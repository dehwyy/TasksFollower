import Link from 'next/link'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <nav
      style={{ width: 'max(100%, 100vw)' }}
      className="text-pinkLight shadow-pink z-20 fixed left-0 right-0 bg-backgroundColor border-b-2 border-pinkLight">
      <div className="mx-auto flex justify-center w-3/5 lg:w-4/5 sm:w-full text-xl pt-5 pb-2">
        <div className="flex sm:flex-col w-full items-center">
          <NavbarItem href="/setup">SetupTask</NavbarItem>
          <NavbarItem href="/">UseTask</NavbarItem>
          <NavbarItem href="/">
            <span className="text-orange-200">dehwyy</span>
          </NavbarItem>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
