import { Inter } from 'next/font/google'
import '../styles/globals.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import QueryClient from '@/components/QueryClient'
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InstaClone',
  description: 'A simplified clone of Instagram',
}
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // staleTime: 60 * 1000,
//       staleTime: 0,
//     },
//   },
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
