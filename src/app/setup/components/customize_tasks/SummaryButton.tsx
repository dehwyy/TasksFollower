import { useAtom } from 'jotai/index'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'

const SummaryButton = () => {
  const [_, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  return (
    <div
      onClick={() => setGlobalModalWindow({ uid: 'summaryWindow', state: true })}
      className="cursor-pointer rounded-xl shadow-black-block bg-white text-forShadowBlue text-2xl py-4  mt-5 px-5 flex w-full justify-center">
      Summary
    </div>
  )
}
export default SummaryButton
