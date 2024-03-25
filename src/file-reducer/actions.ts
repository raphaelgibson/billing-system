import { FileData } from './reducer'

export enum FileActionType {
  SET_FILE_TO_UPLOAD = 'SET_FILE_TO_UPLOAD',
  ADD_FILE_TO_UPLOADED_FILES = 'ADD_FILE_TO_UPLOADED_FILES',
  RESET_FILE_DATA = 'RESET_FILE_DATA',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export function setFileToUploadAction(file: File) {
  return {
    type: FileActionType.SET_FILE_TO_UPLOAD,
    payload: {
      file,
    },
  }
}

export function addFileToUploadedFilesAction(fileData: FileData) {
  return {
    type: FileActionType.ADD_FILE_TO_UPLOADED_FILES,
    payload: {
      fileData,
    },
  }
}

export function resetFileDataAction() {
  return {
    type: FileActionType.RESET_FILE_DATA,
    payload: null,
  }
}

export function setIsLoadingAction(isLoading: boolean) {
  return {
    type: FileActionType.SET_IS_LOADING,
    payload: {
      isLoading,
    },
  }
}
