'use client'
import { useAtomValue, useSetAtom } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useMemo } from 'react'

interface IProps {
  children: React.ReactNode
}

const TaskOptionJobs = ({ children }: IProps) => {
  const jobs = useAtomValue(TaskJobsValue.TaskJobs)
  const hasAtLeastOneSelectedValue = useMemo(() => {
    for (const job of jobs) {
      if (job.isSelected) return true
    }
    return false
  }, [JSON.stringify(jobs)])
  const toggleSelectedJobsOption = useSetAtom(TaskJobsValue.isOpenJobsOption)
  return (
    <div
      onClick={toggleSelectedJobsOption}
      className={`${
        hasAtLeastOneSelectedValue ? 'shadow-green-400' : 'shadow-red-400'
      } shadow-unselectedSelected block-item-hover text-gray-200 rounded-xl text-xl mt-5 px-5 py-4 flex w-full justify-center`}>
      {children}
    </div>
  )
}

export default TaskOptionJobs
