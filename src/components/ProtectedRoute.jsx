import React, { useEffect } from 'react'
import useUser from '../hooks/useUser'
import SpinnerFullPage from './SpinnerFullPage'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children }) {
  // const navigate = useNavigate()
  const router = useRouter()
  const { user, isLoading, isAuthenticated } = useUser()
  // console.log(user)
  useEffect(() => {
    if (!isAuthenticated && !isLoading) router.push('/login')
  }, [isAuthenticated, isLoading, router])

  if (isLoading) return <SpinnerFullPage />
  if (isAuthenticated) return <div>{children}</div>
}
