'use client'

import { useState, useEffect } from 'react'
import { X, Mail, Phone } from 'lucide-react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

const InputField = ({ label, type, name, placeholder, value, onChange }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
      placeholder={placeholder}
    />
  </div>
)

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [authMode, setAuthMode] = useState('login')
  const [signupMethod, setSignupMethod] = useState('email')
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '', phone: '', password: '', confirmPassword: '', name: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const handleClose = () => {
    setFormData({ email: '', phone: '', password: '', confirmPassword: '', name: '' })
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (authMode === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!')
          setLoading(false)
          return
        }

        if (signupMethod === 'phone') {
          alert('Phone registration is not yet available. Please sign up with Email.')
          setLoading(false)
          return
        }

        if (!formData.email) {
          alert('Please enter a valid email address.')
          setLoading(false)
          return
        }

        // 1. Create Firebase User
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)

        // 2. Update Profile Name
        await updateProfile(userCredential.user, { displayName: formData.name })

        // 3. Backend Sync handled by AuthContext automatically, but we can force a check or wait
        // The redirects will happen there or we manually fetch
        const token = await userCredential.user.getIdToken()
        const res = await api.post('/auth/sync', { token })

        alert('Account created successfully!')

        if (res.data.role === 'admin') router.push(`/${userCredential.user.uid}`)
        else router.push('/dashboard')

      } else {
        // Login
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)

        const token = await userCredential.user.getIdToken()
        const res = await api.post('/auth/sync', { token })

        alert('Login successful!')

        if (res.data.role === 'admin') router.push(`/${userCredential.user.uid}`)
        else router.push('/dashboard')
      }

      handleClose()
    } catch (error: any) {
      console.error(error)
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      // The signed-in user info.
      const user = result.user;

      // Sync with backend
      const token = await user.getIdToken()
      const res = await api.post('/auth/sync', { token })

      alert('Google Login successful!')

      if (res.data.role === 'admin') router.push(`/${user.uid}`)
      else router.push('/dashboard')

      handleClose()
    } catch (error: any) {
      console.error(error)
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const MethodButton = ({ method, icon: Icon, label }: any) => (
    <button
      type="button"
      onClick={() => setSignupMethod(method)}
      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition ${signupMethod === method
        ? 'bg-white dark:bg-slate-600 shadow-sm text-purple-600 dark:text-purple-400'
        : 'text-gray-600 dark:text-gray-400'
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <button onClick={handleClose} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {authMode === 'signup' && (
              <>
                <div className="flex gap-2 p-1 bg-gray-100 dark:bg-slate-700 rounded-lg">
                  <MethodButton method="email" icon={Mail} label="Email" />
                  <MethodButton method="phone" icon={Phone} label="Phone" />
                </div>
                <InputField
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="abcd"
                  value={formData.name}
                  onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                />
              </>
            )}

            {authMode === 'login' || signupMethod === 'email' ? (
              <InputField
                label="Email Address"
                type="email"
                name="email"
                placeholder="abcd@example.com"
                value={formData.email}
                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
              />
            ) : (
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+856 20xxxxxxxx"
                value={formData.phone}
                onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
              />
            )}

            <InputField label="Password" type="password" name="password" placeholder="••••••••" />

            {authMode === 'signup' && (
              <InputField label="Confirm Password" type="password" name="confirmPassword" placeholder="••••••••" />
            )}

            {authMode === 'login' && (
              <div className="text-right">
                <button type="button" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Processing...' : (authMode === 'login' ? 'Sign In' : 'Create Account')}
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition font-medium text-gray-700 dark:text-gray-200 mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                {authMode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}