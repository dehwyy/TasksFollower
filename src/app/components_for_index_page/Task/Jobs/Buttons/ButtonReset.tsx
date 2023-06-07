import ButtonEachWrapper from './ButtonEachWrapper'

interface IProps {}

const ButtonReset = ({}: IProps) => {
  return (
    <ButtonEachWrapper extraClasses="bg-bluePale">
      <button>Reset</button>
    </ButtonEachWrapper>
  )
}
export default ButtonReset
