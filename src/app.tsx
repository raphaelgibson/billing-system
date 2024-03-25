import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'
import { FileContextProvider } from './file-context/provider'

export function App() {
  return (
    <BrowserRouter>
      <FileContextProvider>
        <Router />
      </FileContextProvider>
    </BrowserRouter>
  )
}
