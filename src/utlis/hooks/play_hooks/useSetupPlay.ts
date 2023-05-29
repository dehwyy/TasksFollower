import { useAtomValue, useSetAtom } from 'jotai'
import { TaskPlayData, TaskPlayKeys } from '@/utlis/store/task/task.play'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'

export default function useSetupPlay() {
  const router = useRouter()
  const title = useSetValueFromOptionsToPlayExcludeJobs('title')
  const description = useSetValueFromOptionsToPlayExcludeJobs('description')
  const timeWord = useSetValueFromOptionsToPlayExcludeJobs('timeWork')
  const timeRest = useSetValueFromOptionsToPlayExcludeJobs('timeRest')
  const difficulty = useSetValueFromOptionsToPlayExcludeJobs('difficulty')
  const jobs = useSetValueForJobs()
  return useCallback(() => {
    const callbacks = [title, description, timeWord, timeRest, difficulty, jobs]
    callbacks.forEach(c => c())
    router.push('/')
  }, [title, description, timeWord, timeRest, difficulty, jobs])
}

function useSetValueFromOptionsToPlayExcludeJobs(key: Exclude<TaskPlayKeys, 'jobs'>) {
  const atomV = useAtomValue(TaskOptionValue[key])
  const atomS = useSetAtom(TaskPlayData[key])
  const value = useMemo(() => {
    return (atomV.inputValue?.length && atomV.inputValue) || atomV.value
  }, [atomV?.inputValue, atomV.value])
  return () => atomS({ value })
}
// for JOBS only
function useSetValueForJobs() {
  const atomV = useAtomValue(TaskJobsValue.TaskJobs)
  const atomS = useSetAtom(TaskPlayData.jobs)
  return () => atomS({ value: atomV.filter(job => job.isSelected).map(job => job.value) })
}
