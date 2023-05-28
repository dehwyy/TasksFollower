import { useMemo } from 'react'
import { useAtomValue } from 'jotai/index'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

export default function useIsValidCustomizeSummaryWindowAndGetValues() {
  const title = useAtomValue(TaskOptionValue.title) as ISelectedTaskValueWithInput
  const description = useAtomValue(TaskOptionValue.description)
  const difficulty = useAtomValue(TaskOptionValue.difficulty)
  const timeWork = useAtomValue(TaskOptionValue.timeWork)
  const timeRest = useAtomValue(TaskOptionValue.timeRest)
  const jobs = useAtomValue(TaskJobsValue.TaskJobs)
  const isValid = useMemo(() => {
    return typeof title.value === 'string' && (title.value.length || title.inputValue.length) && difficulty.value && timeWork.value && timeRest.value
  }, [title.inputValue, title.value, difficulty.value, timeRest.value, timeWork.value])
  return {
    title: title.inputValue || (title.value as string),
    description: description.value as string,
    timeWork: timeWork.value as number,
    timeRest: timeRest.value as number,
    difficulty: difficulty.value as number,
    jobs,
    isValid,
  }
}
