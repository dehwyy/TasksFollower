import ButtonEachWrapper from './ButtonEachWrapper'

interface IProps {
  isPlaying: boolean
  callback: () => void
}

const ButtonStart = ({ isPlaying, callback }: IProps) => {
  return (
    <ButtonEachWrapper callback={isPlaying ? () => {} : callback} extraClasses={`${isPlaying && 'opacity-50'} bg-violetLight rounded-l-xl`}>
      Start
    </ButtonEachWrapper>
  )
}
export default ButtonStart
