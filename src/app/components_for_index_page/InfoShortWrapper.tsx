'use client'
import { useSetAtom } from 'jotai'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'
import { useCallback } from 'react'

interface IProps {
  children: React.ReactNode
}

const InfoShortWrapper = ({ children }: IProps) => {
  const setGlobalModalWindow = useSetAtom(globalModalWindowsAtom)
  const clickHandler = useCallback(() => {
    setGlobalModalWindow({ uid: 'playSummaryWindow', state: true })
  }, [])
  return (
    <div onClick={clickHandler} className="w-1/3 lg:w-2/3 sm:w-full block-item-hover rounded-xl px-5 py-5">
      <div className="flex justify-between px-5 text-xl">{children}</div>
    </div>
  )
}

export default InfoShortWrapper
