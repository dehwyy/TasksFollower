'use client'
import { useCallback } from 'react'
import { globalCustomizeTaskIsOpen } from '@/utlis/store/global.store'
import { useSetAtom } from 'jotai'

const ExpandingBlockHeading = () => {
  const setOpen = useSetAtom(globalCustomizeTaskIsOpen)
  const toggleOpenState = useCallback(() => {
    setOpen(p => !p)
  }, [])
  return (
    <h3
      onClick={toggleOpenState}
      className="!border-b-0 !border-violetBorderLighter block-item-hover select-none text-md text-center px-10 -mb-2 pb-4 pt-2 rounded-t-2xl cursor-pointer transition-all duration-700">
      Customize your TasksTracker
    </h3>
  )
}

export default ExpandingBlockHeading
