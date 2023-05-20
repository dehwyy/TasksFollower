'use client'
import Tasks from '@/app/setup/components/customize_tasks/right_panel/Tasks'
import Panel from '@/app/setup/components/customize_tasks/right_panel/Panel'
import { useAtom } from 'jotai'
import { TaskConfigurationIdType, TaskConfigurationIdTypeWithTaskAdder, TaskSelectedOptions } from '@/utlis/store/tasks/task_configuration'
import { useCallback } from 'react'
import { ConfigurationTasksAdder } from '@/utlis/enums/TaskConfiguration'

interface IProps {
  children: React.ReactNode
  itemId: TaskConfigurationIdTypeWithTaskAdder
  customBackground?: string
}

const ConfigurationItem = ({ children, itemId, customBackground }: IProps) => {
  const [selectedItem, setSelectedItem] = useAtom(TaskSelectedOptions)
  const onClickHandler = useCallback(() => setSelectedItem(itemId), [])
  return (
    <div
      onClick={onClickHandler}
      className={`${customBackground || 'bg-blue-400'} rounded-xl shadow-black-block  py-4 text-xl text-white  mt-5 px-5 flex w-full justify-center`}>
      {itemId === ConfigurationTasksAdder.itemId ? <Tasks /> : <Panel itemId={itemId as TaskConfigurationIdType} />}
      {children}
    </div>
  )
}

export default ConfigurationItem
