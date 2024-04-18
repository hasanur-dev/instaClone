'use client'

import Button from '@/components/Button'
import Logo from '@/components/Logo'
import SpinnerFullPage from '@/components/SpinnerFullPage'
import SpinnerSmall from '@/components/SpinnerSmall'
import useSignup from '@/hooks/useSignup'
import useUser from '@/hooks/useUser'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { Link, useNavigate } from 'react-router-dom'
// import Button from '../ui/Button'
// import Logo from '../ui/Logo'
// import useUser from '../hooks/useUser'
// import { useEffect, useState } from 'react'
// import SpinnerFullPage from '../ui/SpinnerFullPage'
// import useSignup from '../hooks/useSignup'
// import SpinnerSmall from '../ui/SpinnerSmall'

export default function Signup() {
  const { signup, isLoading, error } = useSignup()
  //   const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const { isLoading: isLoadingUser, isAuthenticated } = useUser()

  const handleClick = function (e) {
    e.preventDefault()
    if (!email || !password || !username) return
    console.log('login')
    signup(
      { email, password, username },
      {
        onSuccess: () => {
          setEmail('')
          setPassword('')
          setUsername('')
        },
      }
    )
    // login({ email, password })
  }

  //   useEffect(() => {
  //     if (isAuthenticated && !isLoadingUser) navigate('/')
  //   }, [isAuthenticated, isLoadingUser, navigate])

  if (isLoadingUser) return <SpinnerFullPage />

  if (!isAuthenticated)
    return (
      <div className="px-4 sm:px-0 text-center mt-28 grid gap-8 max-w-screen-mobile mx-auto">
        {error && <Error message={error.message} />}
        <Logo />
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 py-2.5 rounded-md indent-4"
            disabled={isLoading}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 py-2.5 rounded-md indent-4"
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 py-2.5 rounded-md indent-4"
            disabled={isLoading}
          />
          <Button onClick={handleClick} disabled={isLoading}>
            <div className="flex justify-center">
              {!isLoading ? 'Sign up' : <SpinnerSmall />}
            </div>
          </Button>
        </form>
        <div className="h-[1px] bg-gray-200 w-full my-6"></div>
        <div className="text-center font-semibold text-gray-500">
          <span className="">OR</span>
          <p>
            Have an account?{' '}
            <span>
              <Link href="/login" className="text-blue-500 font-bold">
                Log in
              </Link>
            </span>
          </p>
        </div>
      </div>
    )
}
