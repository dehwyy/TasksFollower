'use client'
import SelectJobs from '@/app/setup/components/customize_tasks/right_panel/SelectJobs'
import Panel from '@/app/setup/components/customize_tasks/right_panel/Panel'
import { useAtom, useSetAtom } from 'jotai'
import { TaskConfigurationIdType, TaskSelectedOptions } from '@/utlis/store/task/task_configuration'
import { useCallback } from 'react'
import { ConfigurationTasksAdder } from '@/utlis/enums/TaskConfiguration'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'

interface IProps {
  children: React.ReactNode
  optionUid: TaskUid
}

const TaskOption = ({ children, optionUid }: IProps) => {
  const setSelectedTask = useSetAtom(TaskOptionData.SelectedOption)
  const onClickHandler = useCallback(() => {
    setSelectedTask({ selectedOptionUid: optionUid, timeout: 500 })
  }, [])
  return (
    <div onClick={onClickHandler} className="block-item-hover text-gray-200 rounded-xl text-xl mt-5 px-5 py-4 flex w-full justify-center">
      {children}
    </div>
  )
}

export default TaskOption
