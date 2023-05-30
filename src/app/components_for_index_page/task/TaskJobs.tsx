'use client'
import { useAtomValue } from 'jotai'
import { TaskPlayData } from '@/utlis/store/task/task.play'
import { useCallback, useEffect, useMemo } from 'react'
import { TaskPlayState } from '@/utlis/store/task/task.play_state'

const TaskJobs = () => {
  const { value: jobs } = useAtomValue(TaskPlayData.jobs)
  const { jobTimePassed, restTimePassed, jobsCount, jobTime, restTime, stagePassed, restPassed } = TaskPlayState
  const passedTimeJob = useAtomValue(jobTimePassed)
  const passedTimeRest = useAtomValue(restTimePassed)
  const passedStages = useAtomValue(stagePassed)
  const passedRest = useAtomValue(restPassed)
  const totalProgress = useMemo(() => {
    const current = (jobTime + restTime) * passedStages + passedTimeJob
    const full = (jobTime + restTime) * (jobsCount - 1)
    return `${(current / full) * 100}%`
  }, [passedTimeJob, passedStages])
  return (
    <>
      <div className="relative">
        <div style={{ height: 'calc(100% - 45px)' }} className="absolute bg-pinkLight min-w-[4px] left-[49%] right-[49%] top-[45px] ">
          <div
            style={{ top: totalProgress }}
            className="absolute bg-gray-400 z-20 left-0 right-0 bottom-0 transition-all duration-1000 ease-linear"
          />
        </div>
        <div className="flex flex-col gap-y-20">
          {/*It definitely would be Array, ArrayIsArray usage just for Typescript*/}
          {Array.isArray(jobs) &&
            jobs.map((job, i) => (
              <div className="w-full overflow-hidden">
                <div className="w-full relative bg-gray-400 h-[45px] rounded-xl overflow-hidden">
                  <div
                    style={{ bottom: i <= passedRest ? '0px' : i === passedRest + 1 ? `calc(100% - ${(passedTimeRest / restTime) * 100}%)` : '100%' }}
                    className="absolute h-full bg-pinkLight left-0 right-0 bottom-[10%] z-20 transition-all duration-1000 ease-linear"></div>
                  <div className="absolute bg-backgroundColor top-[2px] left-[2px] right-[2px] bottom-[2px] z-30 rounded-xl">
                    <div className="w-full h-full block-item flex items-center justify-center">{job}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default TaskJobs
