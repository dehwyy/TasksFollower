'use client'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'
import useIsValidCustomizeSummaryWindowAndGetValues from '@/utlis/hooks/customize_hooks/useIsValidCustomizeSummaryWindowAndGetValues'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'

const CustomizeSummaryButton = () => {
  const setGlobalModalWindow = useSetAtom(globalModalWindowsAtom)
  const { isValid } = useIsValidCustomizeSummaryWindowAndGetValues()
  const clickHandler = useCallback(() => {
    isValid && setGlobalModalWindow({ uid: 'customizeSummaryWindow', state: true })
  }, [isValid])
  return (
    <div
      onClick={clickHandler}
      className={`${
        isValid ? 'cursor-pointer hover:scale-105 hover:border-violetBorderLighter' : 'text-opacity-50'
      } rounded-xl text-pinkLight border-4  border-violetBorderPale text-2xl py-4 mt-5 px-5 flex w-full justify-center duration-300 transition-all`}>
      Summary
    </div>
  )
}
export default CustomizeSummaryButton
