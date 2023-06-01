interface IProps {
  text: string
  callback: () => void
}

const TaskButton = ({ text, callback }: IProps) => {
  return (
    <button className="block-item-hover rounded-lg py-2 mt-5 w-1/3 mx-auto block" onClick={callback}>
      {text}
    </button>
  )
}

export default TaskButton
