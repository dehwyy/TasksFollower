'use client'
import TaskJobs from '@/app/components_for_index_page/task/TaskJobs'
import { useCallback } from 'react'
import { TaskPlayState } from '@/utlis/store/task/task.play_state'

const Component = () => {
  const { JobStart } = TaskPlayState
  const buttonClickHandler = useCallback(() => {
    JobStart()
  }, [])
  return (
    <div className="w-full">
      <div className="flex flex-col w-1/4 mx-auto py-10">
        <TaskJobs />
      </div>
      <button className="block-item-hover rounded-lg py-2 mt-5 w-1/3 mx-auto block" onClick={buttonClickHandler}>
        Play
      </button>
    </div>
  )
}

export default Component
