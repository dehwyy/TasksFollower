interface IProps {
  children: React.ReactNode
}

const TaskWrapper = ({ children }: IProps) => {
  return (
    <div className="w-full pb-10">
      <div className="flex flex-col w-1/2 mx-auto py-10">{children}</div>
    </div>
  )
}

export default TaskWrapper
