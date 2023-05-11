'use client'
import Image from 'next/image'
import InfoIcon from '../../../public/icons/info.svg'
import { useState } from 'react'
import { Roboto } from 'next/font/google'

const TipFont = Roboto({ subsets: ["latin"], weight: "500"})


interface IProps {
  tip: string
}

const OpenableTip = ({tip}: IProps) => {
  const [isOpen, setOpen] = useState(false)
    return (
      <span className='pt-0.5 cursor-pointer flex sm:flex-col sm:pb-2 text-sm items-center gap-1' onClick={() => setOpen(false)}>
        <Image src={InfoIcon} alt="InfoIcon" onClick={(e) => {
          e.stopPropagation()
          setOpen(p => !p)
        }}/>
        <span className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} ${TipFont.className} transition-all text-light-gray`}>{tip}</span>
      </span>
    )
}

export default OpenableTip