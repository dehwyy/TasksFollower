interface IProps {
  children: React.ReactNode
  text: string
}

const TaskInfoTimeItem = ({ children, text }: IProps) => {
  return (
    <div className="flex flex-col items-center">
      <div>{text}</div>
      <div className="text-forShadowYellow">{children}</div>
    </div>
  )
}

export default TaskInfoTimeItem
