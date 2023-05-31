import { useAtomValue } from 'jotai'
import { TaskPlayState } from '@/utlis/store/task/task.play_state'
import { useEffect, useMemo } from 'react'

export default function useJobs() {
  const { jobTimePassed, restTimePassed, jobsCount, jobTime, restTime, stagePassed, restPassed, ReloadConstantData } = TaskPlayState
  const passedTimeJob = useAtomValue(jobTimePassed)
  const passedTimeRest = useAtomValue(restTimePassed)
  const passedStages = useAtomValue(stagePassed)
  const passedRest = useAtomValue(restPassed)

  useEffect(() => {
    ReloadConstantData()
  }, [])
  const totalProgress = useMemo(() => {
    const current = (jobTime + restTime) * passedStages + passedTimeJob
    const full = (jobTime + restTime) * (jobsCount - 1)
    return full !== 0 ? `${(current / full) * 100}%` : '0%'
  }, [passedTimeJob, passedStages, jobsCount])
  const getRestProgress = (i: number) =>
    // if Index is lower or equals to ALREADY PASSED stage => ZeroSpacing to the end;
    // else if Index equals to stage that WILL BE PASSED next => animation
    // else non-colored block
    i <= passedRest ? '0px' : i === passedRest + 1 ? `calc(100% - ${restTime !== 0 ? (passedTimeRest / restTime) * 100 : 0}%)` : '100%'

  return {
    totalProgress,
    getRestProgress,
  }
}
