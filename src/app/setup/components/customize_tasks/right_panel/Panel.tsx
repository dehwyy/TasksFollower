'use client'
import { Input } from '@chakra-ui/input'
import SelectItem from '@/app/setup/components/customize_tasks/right_panel/SelectItem'
import ArrowPointer from '@/app/setup/components/customize_tasks/right_panel/ArrowPointer'
import { useAtom } from 'jotai/index'
import { TaskConfigurationIdType, TasksConfigurationOptions, TaskSelectedOptions } from '@/utlis/store/tasks/task_configuration'
import { useMemo } from 'react'
import { ConfigurationTasksAdder } from '@/utlis/enums/TaskConfiguration'

interface IProps {
  itemId: TaskConfigurationIdType
}

const Panel = ({ itemId }: IProps) => {
  const [selectedItem] = useAtom(TaskSelectedOptions)
  const [TasksOptions] = useAtom(TasksConfigurationOptions)
  const currentOptions = useMemo(() => TasksOptions[itemId], [])
  const isSelected = useMemo(() => itemId === selectedItem.selected, [selectedItem])
  return (
    <section
      onClick={e => e.stopPropagation()}
      style={{ top: `${itemId * 120}px` }}
      className={`${isSelected ? 'translate-x-0' : 'translate-x-full'} absolute left-1/2 right-0 transition-all duration-700`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl bg-[#333333] shadow-black-block">
            {currentOptions.options.map((option, index) => (
              <SelectItem current={index as TaskConfigurationIdType} itemInArrayId={itemId}>
                {option.name}
              </SelectItem>
            ))}
            {currentOptions.hasInput ? (
              <SelectItem current={ConfigurationTasksAdder.itemId} itemInArrayId={itemId} noBorder={true}>
                <Input variant="flushed" focusBorderColor="white" className="text-xl shadow-dark" />
              </SelectItem>
            ) : (
              <></>
            )}
          </div>
          {currentOptions.hasInput && <ArrowPointer isSelected={isSelected} />}
        </div>
      </div>
    </section>
  )
}

export default Panel
