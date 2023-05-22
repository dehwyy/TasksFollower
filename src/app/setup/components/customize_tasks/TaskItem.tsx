'use client'
import Jobs from '@/app/setup/components/customize_tasks/right_panel/Jobs'
import Panel from '@/app/setup/components/customize_tasks/right_panel/Panel'
import { useAtom, useSetAtom } from 'jotai'
import { TaskConfigurationIdType, TaskSelectedOptions } from '@/utlis/store/task/task_configuration'
import { useCallback } from 'react'
import { ConfigurationTasksAdder } from '@/utlis/enums/TaskConfiguration'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'

interface IProps {
  children: React.ReactNode
  optionUid: TaskUid
  customBackground?: string
}

const TaskItem = ({ children, optionUid, customBackground }: IProps) => {
  // It's kinda stupid that I can't use "useSetAtom" to interface Atom
  // ( I have to use WritableAtom, but It requires custom Setter that I can but don't want to
  const [_, setSelectedTask] = useAtom(TaskOptionData.SelectedOption)
  const onClickHandler = useCallback(() => {
    setSelectedTask({ selectedOptionUid: optionUid, timeout: 500 })
  }, [])
  return (
    <div
      onClick={onClickHandler}
      className={`${customBackground || 'bg-blue-400'} rounded-xl shadow-black-block text-xl text-white mt-5 px-5 py-4 flex w-full justify-center`}>
      {children}
    </div>
  )
}

export default TaskItem
