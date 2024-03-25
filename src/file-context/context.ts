import { createContext } from 'react'

import { FileState } from '../file-reducer/reducer'

type FileContextType = {
  fileState: FileState
  setFileToUpload: (file: File) => void
  uploadFile: (file: File) => Promise<void>
  setIsLoading: (isLoading: boolean) => void
}

export const FileContext = createContext({} as FileContextType)
