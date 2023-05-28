'use client'
import Image from 'next/image'
import Minus from '../../../../../../public/icons/minus.svg'
import Plus from '../../../../../../public/icons/plus.svg'
import { useAtom } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useCallback } from 'react'

const JobToggleCreateBlock = () => {
  const [isCreatingJob, setCreatingJob] = useAtom(TaskJobsValue.isCreatingJob)
  const toggleEditMode = useCallback(() => {
    setCreatingJob(p => !p)
  }, [])
  return (
    <div className="flex items-center shadow-dark gap-5">
      <span>Create Task</span>
      <span onClick={toggleEditMode} className="cursor-pointer">
        <Image src={isCreatingJob ? Minus : Plus} alt="icon" />
      </span>
    </div>
  )
}

export default JobToggleCreateBlock
