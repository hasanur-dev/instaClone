'use client'

import Button from '@/components/Button'
import Comment from '@/components/Comment'
import Spinner from '@/components/Spinner'
import SpinnerFullPage from '@/components/SpinnerFullPage'
import SpinnerSmall from '@/components/SpinnerSmall'
import useAddComment from '@/hooks/useAddComment'
import useGetComments from '@/hooks/useGetComments'
import { useRealTime } from '@/hooks/useRealtime'
import useUser from '@/hooks/useUser'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import { useParams } from 'react-router-dom'

export default function Comments({ params }) {
  const [comment, setComment] = useState('')
  const queryClient = useQueryClient()
  const router = useRouter()
  const { addComment, isLoading } = useAddComment()
  const { user } = useUser()
  const imageId = params.imageId
  const { data, isLoading: isLoadingComments } = useGetComments(imageId)

  const handleCommentUpdate = (payload) => {
    console.log(payload)
    queryClient.invalidateQueries(['comments'])
  }

  useRealTime('comments', 'INSERT', 'public', 'comments', handleCommentUpdate)

  const handleClick = (e) => {
    e.preventDefault()
    console.log('add comment')
    if (!comment) return
    addComment(
      {
        comment,
        image_id: imageId,
        user_id: user.user[0].id,
      },
      {
        onSuccess: () => setComment(''),
      }
    )
  }
  console.log(data)
  return (
    <div className="">
      <div className="flex gap-12">
        <Button type="secondary" onClick={() => router.back()}>
          <span className="flex items-center gap-2 pr-3 py-1 ">
            <FaChevronLeft className="text-gray-500" />
            Back
          </span>
        </Button>
        <h2 className="text-center text-2xl font-semibold">Comments</h2>
      </div>
      <div className="bg-gray-300 h-[1px] mt-5"></div>
      {isLoadingComments ? (
        <SpinnerFullPage />
      ) : (
        <div className="flex flex-col gap-4 mt-4">
          {data?.map((com) => (
            <Comment key={com.id} comment={com} />
          ))}
        </div>
      )}
      <form className="absolute w-[400px] left-1/2 -translate-x-1/2 bottom-3 rounded-md">
        <input
          type="text"
          placeholder="Type your comment..."
          className="w-full bg-gray-200 py-3 indent-4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={isLoading}
        />
        <button
          onClick={handleClick}
          disabled={isLoading}
          className="absolute top-0 right-0 text-2xl p-3 bg-blue-500 text-white"
        >
          {isLoading ? <SpinnerSmall /> : <IoSend />}
        </button>
      </form>
    </div>
  )
}
