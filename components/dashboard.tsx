import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"
import { DashboardCards } from "./components/dashboard-cards"

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
          <DashboardCards />
          <div className="mt-6">
            <h3 className="mb-4 text-xl font-semibold">Recent Activity</h3>
            {/* Add more content or components here */}
          </div>
        </main>
      </div>
    </div>
  )
}

