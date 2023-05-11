'use client'
import InfoIcon from "../../../public/icons/info.svg"
import { useRef, useState } from 'react'
import { useDebounce, useHover } from 'usehooks-ts'
import Image from 'next/image'

interface IProps {
  children: React.ReactNode
  tip: string
}

const HoverTip = ({ children, tip }: IProps) => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const isHoverDebounced = useDebounce(isHover, 250)
  const [isOpen, setOpen] = useState(false)
  return (
      <div ref={hoverRef} className='relative w-full'>
        {children}
        <div className={`${isHoverDebounced ? "opacity-100 visibile" : "opacity-0 invisible"} absolute transition-all left-1/2 -translate-x-1/2`}>
          <Image src={InfoIcon} alt="InfoIcon" />
        </div>
      </div>
  )
}

export default HoverTip