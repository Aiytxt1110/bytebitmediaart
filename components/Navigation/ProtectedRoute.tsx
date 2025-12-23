'use client'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
    children: React.ReactNode
    requiredRole?: 'customer' | 'admin'
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
    const { user, role, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading) {
            // 1. Check if user is logged in
            if (!user) {
                router.push('/')
                return
            }

            // 2. Check for Role Requirement
            if (requiredRole && role !== requiredRole) {
                // Redirect to their appropriate dashboard if they have the wrong role
                if (role === 'admin') router.push('/admin')
                else router.push('/dashboard')
            }
        }
    }, [user, role, loading, requiredRole, router])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    // If not logged in, don't render anything while redirecting
    if (!user) return null

    // If role doesn't match, don't render while redirecting
    if (requiredRole && role !== requiredRole) return null

    return <>{children}</>
}
