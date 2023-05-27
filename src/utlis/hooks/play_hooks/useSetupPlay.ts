import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { TaskPlayData, TaskPlayKeys } from '@/utlis/store/task/task.play'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useCallback } from 'react'

const array = []
type ifArrayType = Pick<typeof array, 'map' | 'filter'>
interface IAtomValueField extends ifArrayType {
  inputValue: string
  value: string | number
}
// Worst code I've ever seen
export default function useSetupPlay() {
  const title = useSetValueFromOptionsToPlay('title')
  const description = useSetValueFromOptionsToPlay('description')
  const timeWord = useSetValueFromOptionsToPlay('timeWork')
  const timeRest = useSetValueFromOptionsToPlay('timeRest')
  const difficulty = useSetValueFromOptionsToPlay('difficulty')
  const jobs = useSetValueFromOptionsToPlay('jobs')
  return useCallback(() => {
    title()
    description()
    timeWord()
    timeRest()
    difficulty()
    jobs()
  }, [title, description, timeWord, timeRest, difficulty, jobs])
}

function useSetValueFromOptionsToPlay(key: TaskPlayKeys) {
  const isJobs = key === 'jobs'
  const atomV = useAtomValue(isJobs ? TaskJobsValue.TaskJobs : TaskOptionValue[key]) as IAtomValueField
  const atomS = useSetAtom(TaskPlayData[key])
  return () =>
    atomS({ value: (atomV.inputValue?.length && atomV.inputValue) || atomV.value || atomV.filter(job => job.isSelected).map(job => job.value) })
}

// TODO: REWRITE THIS HOOK CUZ IT'S govnocode
