import { useAtom } from 'jotai/index'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'

const SummaryButton = () => {
  const [_, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  return (
    <div
      onClick={() => setGlobalModalWindow({ uid: 'summaryWindow', state: true })}
      className="cursor-pointer rounded-xl text-pinkLight border-4 border-violetBorderPale text-2xl py-4 mt-5 px-5 flex w-full justify-center">
      Summary
    </div>
  )
}
export default SummaryButton
