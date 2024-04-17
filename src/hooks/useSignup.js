import { useMutation } from '@tanstack/react-query'
import { signup as signupApi } from './../services/auth'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function useSignup() {
  const router = useRouter()
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      router.push('/home')
      toast.success('Account created successfully! You will be redirected soon')
    },
  })

  return { signup, isLoading }
}
