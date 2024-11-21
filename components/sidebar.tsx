import { BarChart, Home, Settings, Users } from 'lucide-react'
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r">
      <nav className="flex-1 space-y-1 p-4">
        <Link
          className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
          href="#"
        >
          <Home className="mr-3 h-5 w-5" />
          Home
        </Link>
        <Link
          className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
          href="#"
        >
          <BarChart className="mr-3 h-5 w-5" />
          Analytics
        </Link>
        <Link
          className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
          href="#"
        >
          <Users className="mr-3 h-5 w-5" />
          Users
        </Link>
        <Link
          className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
          href="#"
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
      </nav>
    </aside>
  )
}

