import Link from 'next/link'
import './style.css'

interface IProps {}

const Navbar = ({}: IProps) => {
  return (
    <nav style={{ width: 'max(100%, 100vw)' }} className="bg-[#343434] text-light-gray">
      <div className="mx-auto flex justify-center w-3/5 lg:w-4/5 sm:w-full text-xl py-5">
        <div className="flex sm:flex-col ">
          <Link href="/setup">
            <div className="cursor-pointer px-5 py-2 hover:text-white transition-all">Setup Tasks</div>
          </Link>
          <Link href="/">
            <div className="sm:px-5 px-10 sm:pb-0 pb-2 sm:block flex items-center justify-center -ml-1.5 text-2xl cursor-pointer hover:text-white transition-all">
              Start Tasks
            </div>
          </Link>
          <Link href="/profile">
            <div className="cursor-pointer px-5 py-2 hover:text-white transition-all">View Profile</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
