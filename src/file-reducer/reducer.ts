import { produce } from 'immer'

import { FileActionType } from './actions'

export type FileData = {
  id: string
  name: string
  type: string
  size: number
  uploadedAt: string
}

export type FileState = {
  isLoading: boolean
  file: File | null
  fileData: FileData | null
  uploadedFiles: FileData[]
}

type ReducerAction<T, P> = {
  type: T
  payload: Partial<P>
}

type FileAction = ReducerAction<FileActionType, FileState>

export function FileReducer(state: FileState, action: FileAction) {
  switch (action.type) {
    case FileActionType.SET_FILE_TO_UPLOAD:
      return produce(state, (draft) => {
        if (!action.payload.file) {
          throw new Error('A file is required')
        }

        draft.file = action.payload.file
      })
    case FileActionType.ADD_FILE_TO_UPLOADED_FILES:
      return produce(state, (draft) => {
        if (!action.payload.fileData) {
          throw new Error('A file is required')
        }

        draft.uploadedFiles.push(action.payload.fileData)
      })
    case FileActionType.RESET_FILE_DATA:
      return produce(state, (draft) => {
        draft.fileData = null
      })
    case FileActionType.SET_IS_LOADING:
      return produce(state, (draft) => {
        if (action.payload.isLoading === undefined) {
          throw new Error('A boolean is required')
        }

        draft.isLoading = action.payload.isLoading
      })
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
