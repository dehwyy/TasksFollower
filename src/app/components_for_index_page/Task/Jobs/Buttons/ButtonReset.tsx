import ButtonEachWrapper from './ButtonEachWrapper'

interface IProps {
  isPlaying: boolean
  callback: () => void
}

const ButtonReset = ({ callback, isPlaying }: IProps) => {
  return (
    <ButtonEachWrapper callback={isPlaying ? callback : () => {}} extraClasses={`${isPlaying || 'opacity-50 '} bg-bluePale rounded-r-xl`}>
      Reset
    </ButtonEachWrapper>
  )
}
export default ButtonReset
