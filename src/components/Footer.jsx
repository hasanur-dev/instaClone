import Link from 'next/link'
import { CiCirclePlus } from 'react-icons/ci'

export default function Footer() {
  return (
    <div className="bottom-0 py-3 fixed bg-white w-full overflow-y-hidden border-t border-t-gray-300 left-0 flex items-center justify-center">
      <Link href="addImage">
        <CiCirclePlus className="h-9 w-full text-gray-700" />
      </Link>
    </div>
  )
}
