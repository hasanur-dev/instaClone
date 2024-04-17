import { useMutation, useQueryClient } from '@tanstack/react-query'
import { likePost as likePostApi } from '../services/apiInteractions'

export default function useLikePost() {
  const queryClient = useQueryClient()
  const { mutate: likePost, isPending: isLoading } = useMutation({
    mutationFn: likePostApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['like'])
    },
  })
  return { likePost, isLoading }
}
