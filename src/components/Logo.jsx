// import { Link } from 'react-router-dom'

import Link from 'next/link'

export default function Logo() {
  return (
    <Link href={'/'}>
      <h2 className="font-accent font-medium text-4xl">InstaClone</h2>
    </Link>
  )
}
