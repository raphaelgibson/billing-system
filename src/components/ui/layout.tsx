import { ReactElement, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { FileContext } from '@/file-context/context'

export function Layout(): ReactElement {
  const { fileState } = useContext(FileContext)

  return (
    <>
      <main className="max-w-screen min-h-screen bg-slate-500 p-6 flex flex-col gap-8">
        {fileState.isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-t-4 border-b-4 border-gray-200 rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </main>
    </>
  )
}
