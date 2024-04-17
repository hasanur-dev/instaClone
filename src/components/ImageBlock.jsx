'use client'

import useCheckLike from '@/hooks/useCheckLike'
import useGetTotalLikes from '@/hooks/useGetTotalLikes'
import useLikePost from '@/hooks/useLikePost'
import { useRealTime } from '@/hooks/useRealtime'
import useUser from '@/hooks/useUser'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { FaHeart, FaRegComment, FaRegHeart, FaUserCircle } from 'react-icons/fa'
import User from './User'
import Button from './Button'
import Image from 'next/image'

export default function ImageBlock({ image: { id, desc, likes, url, users } }) {
  const queryClient = useQueryClient()
  const { likePost, isLoading } = useLikePost()
  const { user, isLoading: isLoadingUser } = useUser()
  const { like } = useCheckLike({ user_id: user?.user[0].id, image_id: id })
  // const navigate = useNavigate()
  const router = useRouter()
  const { allLikes, isLoading: isLoadingTotalLikes } = useGetTotalLikes(id)
  const handleLike = (e) => {
    likePost({ user_id: user?.user[0].id, image_id: id })
  }

  // channel, event, schema, table, handler
  // useMultipleRealTime([
  // {
  //   channel: 'likes',
  //   event: 'INSERT',
  //   schema: 'public',
  //   table: 'likes',
  //   handler: handleUpdateLikes,
  // },
  // {
  //   channel: 'likes',
  //   event: 'DELETE',
  //   schema: 'public',
  //   table: 'likes',
  //   handler: handleRemoveLikes,
  // },
  // ])
  // useRealTime(handleUpdateLikes)
  const handleChange = (payload) => {
    queryClient.invalidateQueries(['like'])
  }
  useRealTime('likes', '*', 'public', 'likes', handleChange)

  return (
    <div className="flex flex-col gap-3">
      <User name={users.username} />
      <div>
        <img src={url} alt="" />
      </div>
      <div className="flex flex-col gap-1 ml-4 text-gray-700">
        <div className="flex gap-5">
          <Button type="secondary" onClick={handleLike}>
            {like?.length > 0 ? (
              <FaHeart className="text-3xl text-red-500" />
            ) : (
              <FaRegHeart className="text-3xl " />
            )}
          </Button>
          <Button
            type="secondary"
            onClick={() => router.push(`/comments/${id}`)}
          >
            <FaRegComment className=" text-3xl font-thin " />
          </Button>
        </div>
        {allLikes?.length > 0 && (
          <div className="font-semibold text-base">{allLikes.length} likes</div>
        )}
        <div>
          <div className="flex gap-2">
            <p className="font-bold">{users.username}</p>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
