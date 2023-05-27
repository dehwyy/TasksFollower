import { useAtomValue } from 'jotai/index'
import { TaskPlayData } from '@/utlis/store/task/task.play'

export default function useGetAllDataFromStore() {
  const title = useAtomValue(TaskPlayData.title)
  const description = useAtomValue(TaskPlayData.description)
  const difficulty = useAtomValue(TaskPlayData.difficulty)
  const timeWork = useAtomValue(TaskPlayData.timeWork)
  const timeRest = useAtomValue(TaskPlayData.timeRest)
  const jobs = useAtomValue(TaskPlayData.jobs)
  return {
    title: title.value as string,
    description: description.value as string,
    difficulty: difficulty.value as number,
    timeWork: timeWork.value as number,
    timeRest: timeRest.value as number,
    jobs: jobs.value as string[],
  }
}
