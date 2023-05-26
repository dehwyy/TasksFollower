import { useAtom } from 'jotai/index'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'
import isAbleToWatchSummaryModal from '@/utlis/hooks/customize_hooks/isAbleToWatchSummaryModal'

const SummaryButton = () => {
  const [_, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  const { isAbleToWatch } = isAbleToWatchSummaryModal()
  return (
    <div
      onClick={() => setGlobalModalWindow({ uid: 'summaryWindow', state: true })}
      className={`${
        isAbleToWatch ? 'cursor-pointer hover:scale-105 hover:border-violetBorderLighter' : 'text-opacity-50'
      } rounded-xl text-pinkLight border-4  border-violetBorderPale text-2xl py-4 mt-5 px-5 flex w-full justify-center duration-300 transition-all`}>
      Summary
    </div>
  )
}
export default SummaryButton
