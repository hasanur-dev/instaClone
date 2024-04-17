export default function Error({ message }) {
  return (
    <div className="text-red-50 py-4 text-lg bg-red-400 absolute top-0 left-1/2 -translate-x-1/2 w-full">
      <p>{message}</p>
    </div>
  )
}
