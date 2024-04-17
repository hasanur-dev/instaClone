import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getImages } from '../services/apiImage'

export default function useImages() {
  const {
    data: images,
    isPending: isLoading,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['images'],
    queryFn: ({ pageParam }) => getImages(pageParam),
    getNextPageParam: (lastpage) => lastpage.nextPage,
  })

  return { images, isLoading }
}
