import Header from '@/components/Header'

export default function layout({ children }) {
  return (
    <div className="max-w-screen-mobile mx-auto">
      <Header />
      <div className="h-[1px] bg-gray-200 mt-3 mb-5"></div>

      {children}
    </div>
  )
}
