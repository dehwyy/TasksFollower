interface IProps {
  children: React.ReactNode
}

const TaskOptionJobs = ({ children }: IProps) => {
  return <div className={`bg-fuchsia-500 rounded-xl shadow-black-block text-xl text-white mt-5 px-5 py-4 flex w-full justify-center`}>{children}</div>
}

export default TaskOptionJobs
