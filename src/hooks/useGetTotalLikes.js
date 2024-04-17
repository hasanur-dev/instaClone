import { useQuery } from '@tanstack/react-query'
import { getTotalLikes } from '../services/apiInteractions'

export default function useGetTotalLikes(image_id) {
  const { data: allLikes, isPending: isLoading } = useQuery({
    queryFn: () => getTotalLikes(image_id),
    queryKey: ['allLikes', image_id],
  })

  return { allLikes, isLoading }
}
