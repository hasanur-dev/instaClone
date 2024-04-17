import { useQuery } from '@tanstack/react-query'
import { getComments } from '../services/apiInteractions'
import { useParams } from 'react-router-dom'

export default function useGetComments(imageId) {
  // const { imageId } = useParams()
  const { data, isPending: isLoading } = useQuery({
    queryFn: () => getComments(imageId),
    queryKey: ['comments', imageId],
  })

  return { data, isLoading }
}
