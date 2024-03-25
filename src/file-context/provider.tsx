import { ReactNode, useReducer, useEffect, useCallback } from 'react'

import { FileReducer } from '../file-reducer/reducer'
import {
  setFileToUploadAction,
  addFileToUploadedFilesAction,
  setIsLoadingAction,
} from '../file-reducer/actions'
import { FileContext } from './context'
import { api } from '@/lib/axios'

type FileContextProviderProps = { children: ReactNode }

export function FileContextProvider({ children }: FileContextProviderProps) {
  const [fileState, dispatch] = useReducer(
    FileReducer,
    {
      isLoading: false,
      file: null,
      fileData: null,
      uploadedFiles: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@billing-system:uploaded-files-1.0.0',
      )

      if (storedStateAsJSON) {
        return {
          ...initialState,
          uploadedFiles: JSON.parse(storedStateAsJSON),
        }
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(fileState.uploadedFiles)

    localStorage.setItem('@billing-system:uploaded-files-1.0.0', stateJSON)
  }, [fileState.uploadedFiles])

  function setFileToUpload(file: File) {
    dispatch(setFileToUploadAction(file))
  }

  const uploadFile = useCallback(async (file: File) => {
    setIsLoading(true)
    const body = new FormData()
    body.append('file', file)
    const { data } = await api.post('/billing-file', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    dispatch(
      addFileToUploadedFilesAction({
        id: data.id,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'long',
          timeStyle: 'medium',
        }).format(new Date(data.uploaded_at)),
      }),
    )
    setIsLoading(false)
  }, [])

  function setIsLoading(isLoading: boolean) {
    dispatch(setIsLoadingAction(isLoading))
  }

  return (
    <FileContext.Provider
      value={{ fileState, setFileToUpload, uploadFile, setIsLoading }}
    >
      {children}
    </FileContext.Provider>
  )
}
