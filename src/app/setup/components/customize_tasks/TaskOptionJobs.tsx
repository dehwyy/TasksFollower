'use client'
import { useSetAtom } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

interface IProps {
  children: React.ReactNode
}

const TaskOptionJobs = ({ children }: IProps) => {
  const toggleSelectedJobsOption = useSetAtom(TaskJobsValue.isOpenJobsOption)
  return (
    <div
      onClick={toggleSelectedJobsOption}
      className={`bg-fuchsia-500 rounded-xl shadow-black-block text-xl text-white mt-5 px-5 py-4 flex w-full justify-center`}>
      {children}
    </div>
  )
}

export default TaskOptionJobs
