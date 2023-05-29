'use client'
import { useAtomValue } from 'jotai'
import { globalCustomizeTaskIsOpen } from '@/utlis/store/global.store'

interface IProps {
  children: React.ReactNode
}

const ExpandingBlockContentWrapper = ({ children }: IProps) => {
  const isOpen = useAtomValue(globalCustomizeTaskIsOpen)
  return (
    <div
      className={`${
        isOpen ? 'top-[15%]' : 'top-[100%] '
      } overflow-y-scroll overflow-x-hidden fixed bg-backgroundColor bottom-0 left-0 right-0 transition-all duration-700 `}>
      <div className={`${isOpen ? 'top-[15%]' : 'top-[100%]'} w-full bg-backgroundColor fixed transition-all duration-700`}>
        <div className="bg-violetBorderLighter w-full h-[3px]"></div>
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  )
}

export default ExpandingBlockContentWrapper
