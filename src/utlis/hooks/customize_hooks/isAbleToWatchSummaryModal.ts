import { useMemo } from 'react'
import { useAtomValue } from 'jotai/index'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

export default function isAbleToWatchSummaryModal() {
  const title = useAtomValue(TaskOptionValue.title)
  const description = useAtomValue(TaskOptionValue.description)
  const difficulty = useAtomValue(TaskOptionValue.difficulty)
  const timeWork = useAtomValue(TaskOptionValue.timeWork)
  const timeRest = useAtomValue(TaskOptionValue.timeRest)
  const jobs = useAtomValue(TaskJobsValue.TaskJobs)
  const isAbleToWatch = useMemo(() => {
    return typeof title.value === 'string' && title.value.length && difficulty.value && timeWork.value && timeRest.value
  }, [title.value, difficulty.value, timeRest.value, timeWork.value])
  return {
    title,
    description,
    difficulty,
    timeWork,
    timeRest,
    jobs,
    isAbleToWatch,
  }
}
