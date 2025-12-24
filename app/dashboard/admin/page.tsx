'use client'

import { useState, useEffect } from 'react'
import {
  Users,
  DollarSign,
  Activity,
  Settings,
  Package,
  TrendingUp,
  Search,
  Bell,
  Menu,
  Shield,
  LogOut,
  X
} from 'lucide-react'

// Types
interface Stats {
  totalUsers: number
  activeSessions: number
  revenue: number
}

interface User {
  name: string
  email: string
  plan: string
  status: 'Active' | 'Pending' | 'Cancelled'
  date: string
}

interface StatCard {
  title: string
  value: string
  change: string
  icon: any
  color: string
  bg: string
}

// Mock Auth Hook (replace with your actual auth context)
const useAuth = () => {
  const [user, setUser] = useState<{ displayName: string; email: string } | null>({ 
    displayName: 'Admin User', 
    email: 'admin@bytebit.com' 
  })
  const [role, setRole] = useState<'admin' | 'user' | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setRole('user') // Change to 'admin' to see dashboard
      setLoading(false)
    }, 500)
  }, [])

  const logout = () => {
    setUser(null)
    setRole(null)
  }

  return { user, role, loading, logout, setRole }
}

// Mock API Services
const verifyAdminToken = async (token: string): Promise<{ success: boolean }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === 'admin123') {
        resolve({ success: true })
      } else {
        reject({ response: { data: { message: 'Invalid token' } } })
      }
    }, 1000)
  })
}

const getAdminStats = async (): Promise<Stats> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalUsers: 2350,
        activeSessions: 892,
        revenue: 45231.89
      })
    }, 500)
  })
}

const checkBackendHealth = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'healthy', timestamp: new Date().toISOString() })
    }, 500)
  })
}

// Admin Gate Component
const AdminGate = ({ onSuccess }: { onSuccess: () => void }) => {
  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)

  const handleVerifyToken = async () => {
    if (!token) return
    
    setError('')
    setIsVerifying(true)

    try {
      const result = await verifyAdminToken(token)
      if (result.success) {
        onSuccess()
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Verification failed')
    } finally {
      setIsVerifying(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerifyToken()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <Shield className="w-12 h-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Admin Access
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Enter your security token to continue
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Demo: Use "admin123" to unlock
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Security Token
            </label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition"
              placeholder="••••••••••••"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm rounded-lg text-center flex items-center justify-center gap-2">
              <X className="w-4 h-4" />
              {error}
            </div>
          )}

          <button
            onClick={handleVerifyToken}
            disabled={isVerifying || !token}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? 'Verifying...' : 'Unlock Dashboard'}
          </button>
        </div>
      </div>
    </div>
  )
}

// Main Dashboard Component
const AdminDashboardContent = ({ user, onLogout }: { user: any, onLogout: () => void }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, activeSessions: 0, revenue: 0 })
  const [backendStatus, setBackendStatus] = useState<string | null>(null)
  const [isLoadingStats, setIsLoadingStats] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAdminStats()
        setStats(data)
      } catch (error) {
        console.error('Failed to fetch stats', error)
      } finally {
        setIsLoadingStats(false)
      }
    }
    fetchStats()
  }, [])

  const testBackend = async () => {
    setBackendStatus('Testing...')
    try {
      const data = await checkBackendHealth()
      setBackendStatus('✅ Success: ' + JSON.stringify(data))
    } catch (error) {
      setBackendStatus('❌ Error: ' + JSON.stringify(error))
    }
  }

  const statCards: StatCard[] = [
    {
      title: "Total Revenue",
      value: `$${stats.revenue.toLocaleString()}`,
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      change: "+180 new users this week",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Active Sessions",
      value: stats.activeSessions.toLocaleString(),
      change: "24 hour period",
      icon: Activity,
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      title: "Server Health",
      value: "99.9%",
      change: "All systems operational",
      icon: Package,
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-900/30"
    }
  ]

  const recentUsers: User[] = [
    { name: "John Doe", email: "john@example.com", plan: "Pro", status: "Active", date: "2024-03-10" },
    { name: "Alice Smith", email: "alice@example.com", plan: "Basic", status: "Pending", date: "2024-03-09" },
    { name: "Bob Johnson", email: "bob@example.com", plan: "Enterprise", status: "Active", date: "2024-03-08" },
    { name: "Emma Wilson", email: "emma@example.com", plan: "Pro", status: "Cancelled", date: "2024-03-07" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              <Shield className="w-6 h-6 text-purple-600" />
              Admin Panel
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-lg font-medium transition">
              <Activity className="w-5 h-5" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
              <Users className="w-5 h-5" />
              Users
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
              <Package className="w-5 h-5" />
              Projects
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
              <DollarSign className="w-5 h-5" />
              Finance
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                {user?.displayName?.charAt(0) || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user?.displayName || 'Admin User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user?.email || 'admin@bytebit.com'}
                </p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <button className="p-2 relative text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.title}</h3>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {isLoadingStats ? '...' : stat.value}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Backend Test Section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">API System Check</h3>
              <button
                onClick={testBackend}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition font-medium"
              >
                Verify Protected Endpoint
              </button>
              {backendStatus && (
                <pre className="mt-4 text-xs bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto text-gray-900 dark:text-gray-100">
                  {backendStatus}
                </pre>
              )}
            </div>

            {/* Recent Users Table */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Registrations</h2>
                <button className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-slate-700/50">
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                    {recentUsers.map((user, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {user.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900 dark:text-white">{user.plan}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.status === 'Active'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400'
                                : user.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400'
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {user.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Main Component
export default function AdminDashboard() {
  const { user, role, loading, logout, setRole } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Authentication Required</h2>
          <p className="text-gray-600 dark:text-gray-400">Please log in to continue</p>
        </div>
      </div>
    )
  }

  if (role !== 'admin') {
    return <AdminGate onSuccess={() => setRole('admin')} />
  }

  return <AdminDashboardContent user={user} onLogout={logout} />
}