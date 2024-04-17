'use client'
import Button from '@/components/Button'
import Error from '@/components/Error'
import Logo from '@/components/Logo'
import SpinnerFullPage from '@/components/SpinnerFullPage'
import SpinnerSmall from '@/components/SpinnerSmall'
import useLogin from '@/hooks/useLogin'
import useUser from '@/hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Login() {
  const router = useRouter()
  const { login, isLoading, error } = useLogin()
  const [email, setEmail] = useState('test@gmail.com')
  const [password, setPassword] = useState('123456')
  const { user, isLoading: isLoadingUser, isAuthenticated } = useUser()

  const handleClick = function (e) {
    console.log(error)
    e.preventDefault()
    if (!email || !password) return
    console.log('login')
    login({ email, password }, { onSuccess: () => router.push('/home') })
  }

  useEffect(() => {
    console.log(isAuthenticated, isLoading)
    if (isAuthenticated && !isLoading) router.push('/home')
  }, [isAuthenticated, isLoading, router])

  if (isLoadingUser) return <SpinnerFullPage />

  if (!isAuthenticated)
    return (
      <div className="text-center px-4 sm:px-0 mt-28 grid gap-8 max-w-screen-mobile mx-auto">
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 py-2.5 rounded-md indent-4"
            disabled={isLoading}
          />
          <Button disabled={isLoading} onClick={handleClick}>
            <div className="flex justify-center">
              {!isLoading ? 'Log in' : <SpinnerSmall />}
            </div>
          </Button>
        </form>
        <div className="h-[1px] bg-gray-200 w-full my-6"></div>
        <div className="text-center font-semibold text-gray-500">
          <span className="">OR</span>
          <p>
            Don't have an account?{' '}
            <span>
              <Link href="/signup" className="text-blue-500 font-bold">
                Signup
              </Link>
            </span>
          </p>
        </div>
      </div>
    )
}
