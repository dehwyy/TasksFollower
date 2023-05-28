'use client'
import { Input } from '@chakra-ui/input'
import Image from 'next/image'
import Plus from '../../../../../../public/icons/plus.svg'
import { useAtom } from 'jotai/index'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { useDebounce } from 'usehooks-ts'

const JobCreator = () => {
  // Just controlled Input
  const [newJobValue, setNewJobValue] = useAtom(TaskJobsValue.newJobValue)
  // Using useDebounce to improve performance
  const debouncedNewJobValue = useDebounce(newJobValue, 100)
  // getting access to edit AllPossibleJobs array
  const editJobs = useSetAtom(TaskJobsValue.TaskJobs)
  // useCallback to improve performance
  const submitNewJob = useCallback(() => {
    editJobs({ action: 'create', newJobValue })
  }, [debouncedNewJobValue])
  return (
    <>
      <Input
        tabIndex={-1}
        value={newJobValue}
        onChange={e => setNewJobValue(e.target.value)}
        placeholder="Task's name"
        variant="flushed"
        focusBorderColor="white"
        className="text-xl placeholder:text-gray-200 shadow-dark"
      />
      <span onClick={submitNewJob} className="cursor-pointer">
        <Image src={Plus} alt="plusIcon" />
      </span>
    </>
  )
}

export default JobCreator
