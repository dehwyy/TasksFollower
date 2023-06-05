'use client'
import { useAtomValue } from 'jotai'
import { TaskPlayData } from '@/utlis/store/task/task.play'
import Job from './Job/Component'

const Component = () => {
  const { value: jobs } = useAtomValue(TaskPlayData.jobs)
  return (
    <div className="w-full flex flex-col">
      {Array.isArray(jobs) &&
        jobs.map((job, i) => (
          <Job key={i} isLast={!(jobs.length - i - 1)}>
            {job}
          </Job>
        ))}
    </div>
  )
}

export default Component
