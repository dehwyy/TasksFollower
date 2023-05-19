'use client'
import { useState } from 'react'

interface IProps {
  children: React.ReactNode
}

const ExpandingBlockFromBottom = ({ children }: IProps) => {
  const [isOpen, setOpen] = useState(true)
  return (
    <div
      style={{ paddingLeft: 'calc(100vw - 100%)' }}
      className={`${isOpen ? 'bottom-[85%]' : 'bottom-0'} fixed left-0 right-0 flex justify-center transition-all duration-700`}>
      <div className="relative transition-all duration-700">
        <h3
          onClick={() => setOpen(p => !p)}
          className={`${
            isOpen ? 'bg-forShadowYellow text-white shadow-dark' : 'bg-red-500'
          } border-b-0 border-2 border-[#333333] select-none  shadow-black-blocktext-md text-center px-10 py-2 rounded-t-2xl cursor-pointer transition-all duration-700`}>
          Customize your TasksTracker
        </h3>
        <div
          className={`${
            isOpen ? 'top-[15%]' : 'top-[100%] '
          } overflow-y-scroll overflow-x-hidden border-t-[3px] border-[#333333] fixed reversed-gradient-background bottom-0 left-0 right-0 transition-all duration-700 flex justify-center`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ExpandingBlockFromBottom
