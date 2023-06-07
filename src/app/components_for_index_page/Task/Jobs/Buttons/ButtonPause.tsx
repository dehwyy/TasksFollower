import ButtonEachWrapper from './ButtonEachWrapper'

interface IProps {
  isPlaying: boolean
  callback: () => void
}

const ButtonPause = ({ callback, isPlaying }: IProps) => {
  return (
    <ButtonEachWrapper callback={isPlaying ? callback : () => {}} extraClasses={`${isPlaying || 'opacity-50'} bg-yellowPale`}>
      Pause
    </ButtonEachWrapper>
  )
}
export default ButtonPause
