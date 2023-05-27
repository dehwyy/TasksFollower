interface IProps {
  children: React.ReactNode
}

const TaskInfoWrapper = ({ children }: IProps) => {
  return <div className="flex flex-col items-center w-full">{children}</div>
}

export default TaskInfoWrapper
