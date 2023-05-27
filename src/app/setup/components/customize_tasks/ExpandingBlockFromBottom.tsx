'use client'
import { useState } from 'react'

interface IProps {
  children: React.ReactNode
}

const ExpandingBlockFromBottom = ({ children }: IProps) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div
      style={{ paddingLeft: 'calc(100vw - 100%)' }}
      className={`${isOpen ? 'bottom-[85%]' : 'bottom-0'} fixed left-0 right-0 flex justify-center transition-all duration-700`}>
      <div className="relative transition-all duration-700 bg-backgroundColor rounded-t-2xl">
        <h3
          onClick={() => setOpen(p => !p)}
          className="!border-b-0 !border-violetBorderLighter block-item-hover select-none text-md text-center px-10 -mb-2 pb-4 pt-2 rounded-t-2xl cursor-pointer transition-all duration-700">
          Customize your TasksTracker
        </h3>
        <div
          className={`${
            isOpen ? 'top-[15%]' : 'top-[100%] '
          } overflow-y-scroll overflow-x-hidden fixed bg-backgroundColor bottom-0 left-0 right-0 transition-all duration-700 `}>
          <div className={`${isOpen ? 'top-[15%]' : 'top-[100%]'} w-full bg-backgroundColor fixed transition-all duration-700`}>
            <div className="bg-violetBorderLighter w-full h-[3px]"></div>
          </div>
          <div className="flex justify-center">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default ExpandingBlockFromBottom
