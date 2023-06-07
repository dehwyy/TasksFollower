'use client'
import { useAtomValue } from 'jotai'
import { TaskPlayData } from '@/utlis/store/task/task.play'
import Job from './Job/Component'
import Buttons from './Buttons/Component'
import useJobs from '@/utlis/hooks/play_hooks/useJobsNew'

const Component = () => {
  const { value: jobs } = useAtomValue(TaskPlayData.jobs)
  const { restStagesPassed, restPercentage, workStagesPassed, workPercentage } = useJobs()
  return (
    <div className="w-full flex flex-col">
      {Array.isArray(jobs) &&
        jobs.map((job, i) => (
          <Job
            key={i}
            workPercentage={i < workStagesPassed ? 0 : i == workStagesPassed ? workPercentage : 100}
            restPercentage={i < restStagesPassed ? 0 : i == restStagesPassed ? restPercentage : 100}
            isLast={!(jobs.length - i - 1)}>
            {job}
          </Job>
        ))}
      <Buttons />
    </div>
  )
}

export default Component
