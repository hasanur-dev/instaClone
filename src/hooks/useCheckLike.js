import { useQuery } from '@tanstack/react-query'
import { checkLikes } from '../services/apiInteractions'

export default function useCheckLike({ user_id, image_id }) {
  const { data: like, isLoading } = useQuery({
    queryFn: () => checkLikes({ user_id, image_id }),
    queryKey: ['like', image_id],
  })
  return { like, isLoading }
}
