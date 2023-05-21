'use client'
import { CSSProperties, useMemo } from 'react'
import type { SelectedValueType } from '@/utlis/store/tasks/task_configuration'
import { TaskConfigurationIdType, TasksConfigurationOptions } from '@/utlis/store/tasks/task_configuration'
import { useAtom } from 'jotai'

interface IProps {
  children: React.ReactNode
  current: SelectedValueType
  itemInArrayId: TaskConfigurationIdType
  styles?: CSSProperties
  noBorder?: boolean
}

const SelectItem = ({ children, current, itemInArrayId, noBorder, styles }: IProps) => {
  const [ConfigurationOptions, changeSelectedValueOfOption] = useAtom(TasksConfigurationOptions)
  const SelectItemNoPanel = ConfigurationOptions[itemInArrayId]
  return (
    <div
      onClick={() => {
        if (current !== 4) {
          changeSelectedValueOfOption({ index: itemInArrayId, newValue: current })
        }
      }}
      style={styles}
      className={`${!noBorder && 'border-white border-b-[1px]'} ${
        current === SelectItemNoPanel?.selectedValue ? 'bg-green-400' : 'bg-red-400'
      } text-xl text-white w-full px-10 py-5 text-center  transition-all`}>
      <div>{children}</div>
    </div>
  )
}

export default SelectItem
