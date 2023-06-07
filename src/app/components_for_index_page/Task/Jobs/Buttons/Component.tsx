import ButtonStart from './ButtonStart'
import ButtonPause from './ButtonPause'
import ButtonReset from './ButtonReset'

interface IProps {
  play: () => void
  pause: () => void
  reset: () => void
  isPlaying: boolean
}

const Component = ({ isPlaying, play, pause, reset }: IProps) => {
  return (
    <div className="fixed left-0 right-0 bottom-5 sm:bottom-2">
      <div className="w-1/3 lg:w-2/3 sm:w-[90%] mx-auto flex justify-center bg-backgroundColor text-xl">
        <ButtonStart callback={play} isPlaying={isPlaying} />
        <ButtonPause callback={pause} isPlaying={isPlaying} />
        <ButtonReset callback={reset} isPlaying={isPlaying} />
      </div>
    </div>
  )
}
export default Component
