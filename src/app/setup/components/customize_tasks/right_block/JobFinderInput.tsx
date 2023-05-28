'use client'
import { Input } from '@chakra-ui/input'
import { useSetAtom } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useCallback } from 'react'

const JobFinderInput = () => {
  const JobEdit = useSetAtom(TaskJobsValue.TaskJobs)
  const onChangeInputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    JobEdit({ action: 'sortArray', regex: e.target.value })
  }, [])
  return (
    <Input
      tabIndex={-1}
      onChange={onChangeInputHandler}
      placeholder="Find tasks..."
      variant="flushed"
      focusBorderColor="white"
      className="text-xl placeholder:text-gray-200 shadow-dark"
    />
  )
}

export default JobFinderInput
