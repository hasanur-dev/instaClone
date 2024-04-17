import { useMutation } from '@tanstack/react-query'
import { login as loginApi } from '../services/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/navigation'

export default function useLogin() {
  const router = useRouter()
  const {
    mutate: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      router.push('/home')
      toast.success('Login successful')
    },
  })
  return { login, isLoading, error }
}
