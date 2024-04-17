'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#fff',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
