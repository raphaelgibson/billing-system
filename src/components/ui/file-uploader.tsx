import { FileContext } from '@/file-context/context'
import { useContext } from 'react'

export function FileUploader() {
  const { fileState, setFileToUpload } = useContext(FileContext)

  function handleSetFileToUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setFileToUpload(file)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label htmlFor="file" className="sr-only">
          Escolha um arquivo
        </label>
        <input
          id="file"
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
          onChange={handleSetFileToUpload}
        />
      </div>
      {fileState.file && (
        <section>
          <p className="text-lg font-semibold mt-3">Detalhes do arquivo:</p>
          <ul>
            <li>
              <span className="font-semibold">Nome: </span>
              {fileState.file.name}
            </li>
            <li>
              <span className="font-semibold">Formato: </span>
              {fileState.file.type}
            </li>
            <li>
              <span className="font-semibold">Tamanho: </span>
              {fileState.file.size} bytes
            </li>
          </ul>
        </section>
      )}

      {fileState.file && (
        <button
          className="rounded-lg bg-green-800 text-white px-4 py-2 border-none font-semibold"
          type="submit"
          disabled={!fileState.file}
        >
          Enviar o arquivo
        </button>
      )}
    </div>
  )
}
