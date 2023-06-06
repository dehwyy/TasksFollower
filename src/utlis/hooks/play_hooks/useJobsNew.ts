import { TaskPlayData } from '@/utlis/store/task/task.play'
import { useAtomValue } from 'jotai'
import { useCallback, useState } from 'react'
import { useInterval } from 'usehooks-ts'
interface IArgs {}

export default function useJobs() {
  // * getting constant data from another store
  const jobsCount = (useAtomValue(TaskPlayData.jobs).value as string[]).length
  const workTimeFull = useAtomValue(TaskPlayData.timeWork).value as number
  const restTimeFull = useAtomValue(TaskPlayData.timeRest).value as number
  // * local state
  // True if WorkTime is passing else it is RestTime
  const [isWork, setIsWork] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [workTimePassed, setWorkTimePassed] = useState(0)
  const [restTimePassed, setRestTimePassed] = useState(0)
  //
  const [workStagesPassed, setWorkStagesPassed] = useState(0)
  const [restStagesPassed, setRestStagesPassed] = useState(0)
  //
  useInterval(
    isWork
      ? () => {
          // imlementation for WorkTime
          // ? If timePassed is equals to OverallWorkTime
          if (workTimePassed >= workTimeFull) {
            //  Reset WorkTimePassed
            setWorkTimePassed(0)
            // Incrementing WorkStagePassed
            setWorkStagesPassed(p => p + 1)
            // ?  Is task is still not over?
            if (workStagesPassed !== jobsCount - 1) {
              // * YES => setting RestTime active
              setIsWork(false)
            } else {
              // ! NO => Stopping timer
              setIsPlaying(false)
            }
          } else {
            // Incrementing workTimePassed by 1 second
            setWorkTimePassed(p => p + 1)
          }
        }
      : () => {
          // imlementation for RestTime
          // ? If timePassed is equals to OverallWorkTime
          if (restTimePassed >= restTimeFull) {
            // Setting WorkTime active
            setIsWork(true)
            setRestTimePassed(0)
            // Reset RestTimePassed
            setRestStagesPassed(p => p + 1)
          } else {
            // Incrementing restTimePassed by 1 second
            setRestTimePassed(p => p + 1)
          }
        },
    isPlaying ? 1000 : null
    // NULL values means that INTERVAL is CLEARED
    // @more -> https://usehooks-ts.com/react-hook/use-interval
  )
  //
  const StartJob = useCallback(() => {
    setIsPlaying(true)
  }, [])
  const PauseJob = useCallback(() => {
    setIsPlaying(false)
  }, [])
  const ResetAllAndPause = useCallback(() => {
    // ? reseting
    setWorkStagesPassed(0)
    setWorkTimePassed(0)
    setRestStagesPassed(0)
    setRestTimePassed(0)
    setIsWork(true)
    setIsPlaying(false)
    PauseJob()
  }, [])
  return {
    StartJob,
    PauseJob,
    ResetAllAndPause,
    workTimePassed,
    workTimeFull,
    workStagesPassed,
    restTimePassed,
    restTimeFull,
    restStagesPassed,
  }
}
