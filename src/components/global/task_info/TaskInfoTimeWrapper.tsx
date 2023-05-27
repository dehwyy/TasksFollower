interface IProps {
  children: React.ReactNode
}

const TaskInfoTimeWrapper = ({ children }: IProps) => {
  return (
    <div className="flex flex-col items-center w-full py-3">
      <div className="text-xl text-pinkLight shadow-dark">Time</div>
      <div className="grid grid-cols-3 sm:grid-cols-1 w-full place-items-center">{children}</div>
    </div>
  )
}

export default TaskInfoTimeWrapper
