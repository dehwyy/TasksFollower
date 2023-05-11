import Link from 'next/link'
import "./style.css"

interface IProps {

}


const Navbar = ({}: IProps) => {

    return (
        <nav className="w-full bg-[#343434] text-light-gray">
          <div className="mx-auto flex justify-center w-3/5 lg:w-4/5 sm:w-full text-xl py-5">
            <div className="flex">
              <div className="cursor-pointer px-5 py-2 hover:text-white transition-all">
                <Link href="/setup">
                  Setup Tasks
                </Link>
              </div>
              <div className="px-10 pb-2 flex items-center justify-center text-3xl cursor-pointer hover:text-white transition-all">
                <Link href="/">
                  Start Tasks
                </Link>
              </div>

              <div className="cursor-pointer px-5 py-2 hover:text-white transition-all">
                <Link href="profile">
                  View Profile
                </Link>
              </div>
            </div>

          </div>
        </nav>
    )
}

export default Navbar