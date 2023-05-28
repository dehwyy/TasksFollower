'use client'
import { useAtomValue } from 'jotai/index'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

interface IProps {
  children: React.ReactNode
}

const JobCreatorWrapper = ({ children }: IProps) => {
  const isCreatingJob = useAtomValue(TaskJobsValue.isCreatingJob)
  return (
    <div className={`${isCreatingJob ? 'h-full' : 'translate-x-full h-0'} w-full transition-all duration-500`}>
      <div className="block-item !border-x-0 !border-y-2 text-xl text-white w-full px-10 py-5 text-center transition-all">
        <div className="w-full flex items-center">{children}</div>
      </div>
    </div>
  )
}

export default JobCreatorWrapper
