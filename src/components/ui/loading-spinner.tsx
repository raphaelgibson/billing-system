export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-t-4 border-b-4 border-gray-200 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
