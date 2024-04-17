'use client'
import { IoIosLogOut } from 'react-icons/io'
import Button from './Button'
import { useRouter } from 'next/navigation'
import { useLogout } from '@/hooks/useLogout'
import SpinnerSmall from './SpinnerSmall'
export default function Logout() {
  const router = useRouter()
  const { logout, isLoading } = useLogout()
  return (
    <button className="bg-blue-500 px-2 rounded-lg" onClick={logout}>
      {isLoading ? (
        <SpinnerSmall />
      ) : (
        <IoIosLogOut className="text-2xl text-white" />
      )}
    </button>
  )
}
