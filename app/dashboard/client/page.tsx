'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    LayoutDashboard,
    Settings,
    CreditCard,
    HelpCircle,
    LogOut,
    Menu,
    Bell,
    Sparkles,
    Zap,
    Clock,
    ArrowRight
} from 'lucide-react'

export default function ClientDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    // Mock User Data
    const services = [
        {
            title: "SaaS Starter Plan",
            status: "Active",
            renewal: "Apr 24, 2024",
            usage: "45%",
            icon: Sparkles,
            color: "text-blue-500",
            bg: "bg-blue-100 dark:bg-blue-900/20"
        },
        {
            title: "Web Hosting - Premium",
            status: "Active",
            renewal: "May 01, 2024",
            usage: "12%",
            icon: Zap,
            color: "text-purple-500",
            bg: "bg-purple-100 dark:bg-purple-900/20"
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
                <div className="h-full flex flex-col">
                    <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-slate-700">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Bytebit Client
                        </Link>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-1">
                        <Link href="/dashboard/client" className="flex items-center gap-3 px-4 py-3 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-lg font-medium">
                            <LayoutDashboard className="w-5 h-5" />
                            Overview
                        </Link>
                        <Link href="/dashboard/client/services" className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
                            <Zap className="w-5 h-5" />
                            My Services
                        </Link>
                        <Link href="/dashboard/client/billing" className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
                            <CreditCard className="w-5 h-5" />
                            Billing
                        </Link>
                        <Link href="/dashboard/client/support" className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
                            <HelpCircle className="w-5 h-5" />
                            Support
                        </Link>
                        <Link href="/dashboard/client/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition">
                            <Settings className="w-5 h-5" />
                            Settings
                        </Link>

                        <div className="pt-8 mt-8 border-t border-gray-100 dark:border-slate-700">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition">
                                <LogOut className="w-5 h-5" />
                                Sign Out
                            </button>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-4 lg:px-8">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg">
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">John Client</p>
                                <p className="text-xs text-gray-500">Client Account</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                JC
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, John! 👋</h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">Here is what's happening with your projects today.</p>
                        </div>

                        {/* Active Services Grid */}
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Active Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {services.map((service, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-lg ${service.bg}`}>
                                            <service.icon className={`w-6 h-6 ${service.color}`} />
                                        </div>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold rounded-full">
                                            {service.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                    <div className="space-y-3 mt-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Next Billing</span>
                                            <span className="text-gray-900 dark:text-white font-medium">{service.renewal}</span>
                                        </div>
                                        <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: service.usage }}></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Usage</span>
                                            <span>{service.usage}</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-6 py-2 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                                        Manage Service
                                    </button>
                                </div>
                            ))}

                            {/* New Service Card */}
                            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 shadow-lg text-white flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Need more power?</h3>
                                    <p className="text-purple-100 text-sm mb-6">Upgrade your plan to unlock premium features and priority support.</p>
                                </div>
                                <button className="w-full py-2 bg-white text-purple-600 rounded-lg text-sm font-bold hover:bg-gray-50 transition shadow-sm">
                                    Explore Plans
                                </button>
                            </div>
                        </div>

                        {/* Support and Updates */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Support Tickets</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                                <HelpCircle className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white text-sm">DNS Configuration Help</p>
                                                <p className="text-xs text-gray-500">Ticket #2931 • Updated 2h ago</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">In Progress</span>
                                    </div>
                                    <button className="w-full text-center text-sm text-purple-600 font-medium hover:underline mt-2">View All Tickets</button>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Status</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">API Operational</span>
                                        </div>
                                        <span className="text-xs text-green-600 font-medium">100% Uptime</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">Database Cluster</span>
                                        </div>
                                        <span className="text-xs text-green-600 font-medium">100% Uptime</span>
                                    </div>
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg mt-4">
                                        <p className="text-xs text-blue-700 dark:text-blue-300">
                                            <span className="font-bold">Scheduled Maintenance:</span> March 28th, 02:00 AM UTC. Expected downtime: 5 mins.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}
