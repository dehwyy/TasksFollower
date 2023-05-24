import Link from 'next/link'

interface IProps {}

const Navbar = ({}: IProps) => {
  return (
    <nav style={{ width: 'max(100%, 100vw)' }} className="text-orange-200 shadow-pink">
      <div className="mx-auto flex justify-center w-3/5 lg:w-4/5 sm:w-full text-xl py-5">
        <div className="flex sm:flex-col ">
          <BasicNavItem link="/setup">Setup Tasks</BasicNavItem>
          <Link href="/">
            <div className="sm:px-5 px-10 sm:pb-0 pb-2 sm:block flex items-center justify-center -ml-1.5 text-2xl cursor-pointer hover:text-orange-100 transition-all">
              Start Tasks
            </div>
          </Link>
          <BasicNavItem link="/profile">View Profile</BasicNavItem>
        </div>
      </div>
    </nav>
  )
}

const BasicNavItem = ({ children, link }: { children: React.ReactNode; link: string }) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer px-5 py-2 hover:text-orange-100 transition-all">{children}</div>
    </Link>
  )
}

export default Navbar
