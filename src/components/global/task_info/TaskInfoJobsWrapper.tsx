interface IProps {
  children: React.ReactNode
}

const TaskInfoJobsWrapper = ({ children }: IProps) => {
  return (
    <div className="flex flex-col items-center w-full py-3">
      <div className="text-xl text-pinkLight pb-2">Jobs</div>
      {children}
    </div>
  )
}

export default TaskInfoJobsWrapper
