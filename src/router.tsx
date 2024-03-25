import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/ui'
import { HomePage } from './home-page'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
