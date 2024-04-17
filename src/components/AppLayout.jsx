import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function AppLayout() {
  return (
    <main className="font-sans max-w-[400px] mx-auto">
      <Header />
      <div className="h-[1px] bg-gray-200 mt-3 mb-5"></div>
      <Outlet />
    </main>
  )
}
