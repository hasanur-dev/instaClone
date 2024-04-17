import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../services/auth'

export default function useUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ['user'],
  })
  // console.log(user)
  return {
    user: user,
    isLoading,
    isAuthenticated: user?.data?.role === 'authenticated',
  }
}
