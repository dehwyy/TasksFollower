import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

interface IProps {
  children: React.ReactNode
}

const ExpandingBlock = ({ children }: IProps) => {
  const [isOpened, setIsOpened] = useState(true)
  return (
    <div>
      <div className="flex select-none bg-white text-blue-500 w-full p-5 rounded-lg ">
        <h3 className="text-2xl">Used layouts</h3>
        <span>
          {isOpened ? (
            <ChevronUpIcon onClick={() => setIsOpened(false)} className="h-full w-5 cursor-pointer" />
          ) : (
            <ChevronDownIcon onClick={() => setIsOpened(true)} className="h-full w-5 cursor-pointer" />
          )}
        </span>
      </div>
      <div className={`${isOpened ? 'top-20 visible opacity-100' : 'top-12 invisible opacity-0'} w-full absolute transition-all `}>{children}</div>
    </div>
  )
}

export default ExpandingBlock
