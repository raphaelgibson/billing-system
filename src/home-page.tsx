import { useContext } from 'react'
import {
  FileUploader,
  LoadingSpinner,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from './components'
import { FileContext } from './file-context/context'

export function HomePage() {
  const { fileState, uploadFile } = useContext(FileContext)

  async function handleUploadFile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!fileState.file) {
      return
    }

    await uploadFile(fileState.file)
  }

  return (
    <form
      className="max-w-lg mx-auto mt-8 p-6 bg-slate-200 rounded-lg shadow-md"
      onSubmit={handleUploadFile}
    >
      {fileState.isLoading && <LoadingSpinner />}
      <h2 className="text-xl font-semibold mb-4">
        Enviar arquivo de cobranças
      </h2>
      <FileUploader />
      {fileState.uploadedFiles.length > 0 && (
        <>
          <h3 className="mt-5 mb-1 p-1 font-semibold">Arquivos processados:</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>
                  <strong>Nome</strong>
                </TableCell>
                <TableCell>
                  <strong>Data de envio</strong>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="invisible">
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              {fileState.uploadedFiles.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{file.uploadedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </form>
  )
}
