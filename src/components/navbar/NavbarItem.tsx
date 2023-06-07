import Link from 'next/link'

interface IProps {
  children: React.ReactNode
  href: string
}

const NavbarItem = ({ children, href }: IProps) => {
  return (
    <Link href={href} className="w-1/3 text-center sm:w-full ">
      <div className="select-none cursor-pointer px-5 py-2 hover:text-orange-100 transition-all">{children}</div>
    </Link>
  )
}
export default NavbarItem
