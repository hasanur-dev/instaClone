'use client'
import SpinnerFullPage from '@/components/SpinnerFullPage'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const router = useRouter()
  // const navigate = useNavigate()
  const { user, isLoading, isAuthenticated } = useUser()
  // console.log(user)
  useEffect(() => {
    // if (!isAuthenticated && !isLoading) navigate('/login')
    if (!isAuthenticated && !isLoading) router.push('/login')
  }, [isAuthenticated, isLoading, router])

  if (isLoading) return <SpinnerFullPage />
  if (isAuthenticated) router.push('/home')
}
