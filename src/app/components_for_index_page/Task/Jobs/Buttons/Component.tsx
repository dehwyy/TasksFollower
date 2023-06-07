'use client'
import ButtonStart from './ButtonStart'
import ButtonPause from './ButtonPause'
import ButtonReset from './ButtonReset'

const Component = () => {
  return (
    <div className="fixed left-0 right-0 bottom-5 sm:bottom-2">
      <div className="w-1/3 mx-auto flex justify-center bg-backgroundColor rounded-xl overflow-hidden text-xl">
        <ButtonStart />
        <ButtonPause />
        <ButtonReset />
      </div>
    </div>
  )
}
export default Component
