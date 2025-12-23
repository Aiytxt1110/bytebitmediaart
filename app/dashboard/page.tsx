'use client'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { checkBackendHealth } from '@/lib/services/backendService'
import ProtectedRoute from '@/components/Navigation/ProtectedRoute'

export default function CustomerDashboard() {
    const { user, logout } = useAuth()
    const [backendStatus, setBackendStatus] = useState<string | null>(null)

    const testBackend = async () => {
        try {
            const data = await checkBackendHealth()
            setBackendStatus('✅ Success: ' + JSON.stringify(data))
        } catch (error) {
            setBackendStatus('❌ Error: Failed to connect to backend')
        }
    }



    return (
        <ProtectedRoute requiredRole="customer">
            <div className="p-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold">Customer Dashboard</h1>
                        <p>Welcome, {user?.displayName}!</p>
                    </div>
                    <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Logout</button>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">My Orders</h2>
                    <p className="text-gray-500">No active orders.</p>
                </div>

                <div className="mt-8 border-t pt-6">
                    <h3 className="font-semibold mb-2">System Check</h3>
                    <button onClick={testBackend} className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
                        Test Backend Connection (Protected)
                    </button>
                    {backendStatus && <p className="mt-2 text-sm">{backendStatus}</p>}
                </div>
            </div>
        </ProtectedRoute>
    )
}
