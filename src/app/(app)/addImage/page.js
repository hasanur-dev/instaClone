'use client'

import Button from '@/components/Button'
import SpinnerSmall from '@/components/SpinnerSmall'
import useUser from '@/hooks/useUser'
import { uploadImage } from '@/services/apiImage'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaChevronLeft } from 'react-icons/fa'

export default function AddImage() {
  //   const navigate = useNavigate()
  const router = useRouter()
  const { user, isLoading: isLoadingUser } = useUser()
  const [desc, setDesc] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')
  const [image, setImage] = useState('')

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: uploadImage,
    onSuccess: () => {
      toast.success('Image upload successfully')
      router.push('/')
    },
  })
  console.log(user?.user[0])
  const handleImage = (e) => {
    const image = e.dataTransfer?.items[0].getAsFile() || e.target.files[0]
    console.log(image)
    if (!image.type.startsWith('image')) {
      toast.error('Invalid file type')
      e.target.value = ''
      setImagePreviewUrl('')

      return
    }
    const imageSize = image.size / 1000
    if (imageSize > 5000) {
      console.log(imageSize)

      toast.error('Max file size is 5MB')
      e.target.value = ''
      setImagePreviewUrl('')
      return
    }
    const previewUrl = URL.createObjectURL(image)
    console.log(previewUrl)
    setImagePreviewUrl(previewUrl)
    setImage(image)
    console.log(imageSize)
  }

  const handleUpload = (e) => {
    e.preventDefault()
    const data = mutate(image)
    console.log(data)
    mutate({ image, desc, user: user.user[0] })
  }
  return (
    <div className="mb-12 p-6 mx-4 sm:mx-0 rounded-md shadow-lg flex flex-col gap-6 items-start">
      <Button type="secondary" onClick={() => navigate(-1)}>
        <span className="flex items-center gap-2 pr-3 py-1 ">
          <FaChevronLeft className="text-gray-500" />
          Back
        </span>
      </Button>
      <form className="w-full flex flex-col gap-6">
        <input
          className="bg-gray-100 w-full py-2.5 rounded-md indent-4"
          type="text"
          placeholder="Image Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          disabled={isLoading}
        />
        <img src={imagePreviewUrl} alt="" />
        <div>
          <input type="file" onChange={handleImage} disabled={isLoading} />
        </div>
        <Button onClick={handleUpload}>
          <div className="flex justify-center">
            {isLoading ? <SpinnerSmall /> : 'Upload'}
            {/* <SpinnerSmall /> */}
          </div>
        </Button>
      </form>
    </div>
  )
}
