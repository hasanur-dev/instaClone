import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { logout as logoutApi } from '@/services/auth'

export function useLogout() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: async () => logoutApi(),

    onSuccess: () => {
      queryClient.removeQueries()
      router.replace('/login')
      toast.success('Logout successful')
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return { logout, isLoading }
}
