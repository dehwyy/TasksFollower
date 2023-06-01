'use client'
import TaskButton from '@/app/components_for_index_page/task/TaskButton'
import useAllDataFromStore from '@/utlis/hooks/play_hooks/useAllDataFromStore'
import { TaskPlayState } from '@/utlis/store/task/task.play_state'
import { useCallback } from 'react'

interface IProps {}

const TaskButtons = ({}: IProps) => {
  const { isValid } = useAllDataFromStore()
  const { JobStart, ReloadConstantData, PauseTask } = TaskPlayState
  const play = useCallback(() => JobStart(), [])
  const reset = useCallback(() => ReloadConstantData(), [])
  const pause = useCallback(() => PauseTask(), [])
  return isValid ? (
    <div className="flex flex-col w-full">
      <TaskButton text="Play" callback={play} />
      <TaskButton text="Reset" callback={reset} />
      <TaskButton text="Pause" callback={pause} />
    </div>
  ) : (
    <></>
  )
}

export default TaskButtons
