import { useAtomValue } from 'jotai/index'
import { TaskPlayData } from '@/utlis/store/task/task.play'
import { useMemo } from 'react'

export default function useAllDataFromStore() {
  const title = useAtomValue(TaskPlayData.title)
  const description = useAtomValue(TaskPlayData.description)
  const difficulty = useAtomValue(TaskPlayData.difficulty)
  const timeWork = useAtomValue(TaskPlayData.timeWork)
  const timeRest = useAtomValue(TaskPlayData.timeRest)
  const jobs = useAtomValue(TaskPlayData.jobs)
  const isValid = useMemo(() => {
    return (
      title.value && description.value && difficulty.value && timeWork.value && timeRest.value && Array.isArray(jobs.value) && jobs.value.length > 0
    )
  }, [title.value, description.value, difficulty.value, timeWork.value, timeRest.value, JSON.stringify(jobs.value)])
  return {
    isValid,
    title: title.value as string,
    description: description.value as string,
    difficulty: difficulty.value as number,
    timeWork: timeWork.value as number,
    timeRest: timeRest.value as number,
    jobs: jobs.value as string[],
  }
}
