import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function User({ name }) {
  return (
    <div
      alt="user"
      className="pl-4 rounded-full flex items-center gap-3 font-semibold"
    >
      <FaUserCircle className="h-8 w-8 text-gray-300" />
      <p>{name}</p>
    </div>
  )
}
