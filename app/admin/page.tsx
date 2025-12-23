'use client'

import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { checkBackendHealth, getAdminStats, verifyAdminToken } from '@/lib/services/backendService'

export default function AdminDashboardAndGate() {
    const { user, role, loading, logout } = useAuth()
    const router = useRouter()

    // Dashboard State
    const [stats, setStats] = useState({ totalUsers: 0, activeSessions: 0, revenue: 0 })
    const [backendStatus, setBackendStatus] = useState<string | null>(null)

    // Gate State
    const [token, setToken] = useState('')
    const [error, setError] = useState('')
    const [isVerifying, setIsVerifying] = useState(false)

    // --- Effects ---
    useEffect(() => {
        // Redirect if not logged in
        if (!loading && !user) {
            router.push('/')
        }
    }, [user, loading, router])

    useEffect(() => {
        // Fetch stats if admin
        const fetchStats = async () => {
            try {
                const data = await getAdminStats()
                setStats(data)
            } catch (error) {
                console.error('Failed to fetch stats', error)
            }
        }

        if (role === 'admin') {
            fetchStats()
        }
    }, [role])

    // --- Handlers ---
    const handleVerifyToken = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsVerifying(true)

        try {
            const result = await verifyAdminToken(token)
            if (result.success) {
                alert('Admin Access Granted!')
                window.location.reload() // Reload to refresh role in context
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Verification failed')
        } finally {
            setIsVerifying(false)
        }
    }

    const testBackend = async () => {
        try {
            const data = await checkBackendHealth()
            setBackendStatus('✅ Success: ' + JSON.stringify(data))
        } catch (error) {
            setBackendStatus('❌ Error: ' + JSON.stringify(error))
        }
    }

    // --- Render ---

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    if (!user) return null // Will redirect

    // VIEW: Admin Dashboard
    if (role === 'admin') {
        return (
            <div className="p-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-purple-600">Admin Dashboard</h1>
                        <p>Welcome, Administrator {user?.displayName}!</p>
                    </div>
                    <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Logout</button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="font-bold text-lg">Total Users</h3>
                        <p className="text-3xl font-bold">{stats.totalUsers}</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="font-bold text-lg">Active Sessions (24h)</h3>
                        <p className="text-3xl font-bold">{stats.activeSessions}</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="font-bold text-lg">Revenue</h3>
                        <p className="text-3xl font-bold">${stats.revenue}</p>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6">
                    <h3 className="font-semibold mb-2">API System Check</h3>
                    <button onClick={testBackend} className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
                        Verify Protected Endpoint
                    </button>
                    {backendStatus && <pre className="mt-2 text-xs bg-gray-100 p-2 rounded">{backendStatus}</pre>}
                </div>
            </div>
        )
    }

    // VIEW: Token Gate
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
            <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Admin Access
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Enter your secret token to continue.
                    </p>
                </div>

                <form onSubmit={handleVerifyToken} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Security Token
                        </label>
                        <input
                            type="password"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                            placeholder="••••••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-100 text-red-700 text-sm rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isVerifying}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                    >
                        {isVerifying ? 'Verifying...' : 'Unlock Dashboard'}
                    </button>
                </form>
            </div>
        </div>
    )
}
