import Logo from './Logo'
import Logout from './Logout'

export default function Header() {
  return (
    <div className="pt-4 px-4 flex justify-between">
      <Logo />
      <Logout />
    </div>
  )
}
