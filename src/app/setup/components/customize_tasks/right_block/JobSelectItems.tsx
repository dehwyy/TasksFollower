'use client'
import JobSelectItem from '@/app/setup/components/customize_tasks/right_block/JobSelectItem'
import { useAtomValue } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

interface IProps {}

const JobSelectItems = ({}: IProps) => {
  const taskJobs = useAtomValue(TaskJobsValue.TaskJobs)
  return (
    <>
      {taskJobs.map(task => (
        <JobSelectItem key={task.id} isSelected={task.isSelected} value={task.value} id={task.id} />
      ))}
    </>
  )
}

export default JobSelectItems
