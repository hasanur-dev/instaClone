'use client'

import Footer from '@/components/Footer'
import ImageBlock from '@/components/ImageBlock'
import SpinnerFullPage from '@/components/SpinnerFullPage'
import useImages from '@/hooks/useImages'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [allImages, setAllImages] = useState([])
  const { images, isLoading } = useImages()
  const { user, isLoading: isLoadingUser, isAuthenticated } = useUser()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) router.push('/login')
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    images?.pages.map((page) => setAllImages(() => [...page.images]))
  }, [images?.pages])

  if (isLoading || isLoadingUser) return <SpinnerFullPage />

  if (!isAuthenticated) router.push('/login')

  // if (isAuthenticated)
  return (
    <div className="relative pb-32 max-w-screen-mobile mx-auto">
      <div className="flex flex-col gap-8">
        {allImages.map((image) => (
          <ImageBlock key={image.id} image={image} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
