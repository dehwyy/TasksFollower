import Image from 'next/image'
import Arrow from '../../../../../../public/icons/pointer_arrow.svg'
import { useEffect, useRef } from 'react'

interface IProps {
  isOpen: boolean
  hasInput: boolean | undefined
}

const ArrowPointer = ({ isOpen, hasInput }: IProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (isOpen && hasInput) {
      ref.current!.style.opacity = '100%'
      ref.current!.style.visibility = 'visible'
    } else {
      ref.current!.style.opacity = '0%'
      ref.current!.style.visibility = 'hidden'
    }
  }, [isOpen, hasInput])
  return (
    <div ref={ref} className={`${isOpen && 'delay-500'} transition-all duration-500 absolute -right-5 -bottom-32 `}>
      <Image width="100px" height="100px" className="w-[100px] h-[100px] rotate-[150deg]" src={Arrow} alt="arrow" />
      <div className="relative right-5 text-pinkLight block-item !bg-transparent !border-4 rounded-xl px-8 py-2 text-2xl shadow-black-block">
        Your variant
      </div>
    </div>
  )
}

export default ArrowPointer
