'use client'
import { useAtomValue } from 'jotai'
import { TaskPlayData } from '@/utlis/store/task/task.play'
import Job from './Job/Component'
import useJobs from '@/utlis/hooks/play_hooks/useJobsNew'

const Component = () => {
  const { value: jobs } = useAtomValue(TaskPlayData.jobs)
  const { StartJob, PauseJob, ResetAllAndPause, restTimePassed, restStagesPassed, restTimeFull, workStagesPassed, workTimeFull, workTimePassed } =
    useJobs()
  console.log(workStagesPassed, workTimePassed, workTimeFull, restStagesPassed, restTimePassed, restTimeFull)
  return (
    <div className="w-full flex flex-col">
      {Array.isArray(jobs) &&
        jobs.map((job, i) => (
          <Job key={i} isLast={!(jobs.length - i - 1)}>
            {job}
          </Job>
        ))}
      <button onClick={StartJob}>HELLO</button>
      <button onClick={PauseJob}>PAUSE</button>
      <button onClick={ResetAllAndPause}>RESET</button>
    </div>
  )
}

export default Component
