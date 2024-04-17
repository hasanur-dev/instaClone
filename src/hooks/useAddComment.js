import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addComment as addCommentApi } from '../services/apiInteractions'

export default function useAddComment() {
  const queryClient = useQueryClient()
  const { mutate: addComment, isPending: isLoading } = useMutation({
    mutationFn: addCommentApi,
    onSuccess: () => {
      console.log('Comment added')
      queryClient.invalidateQueries(['comments'])
    },
  })
  return { addComment, isLoading }
}
