'use client'
import { Input } from '@chakra-ui/input'
import SelectItem from '@/app/setup/components/customize_tasks/right_panel/SelectItem'
import ArrowPointer from '@/app/setup/components/customize_tasks/right_panel/ArrowPointer'
import { useAtom } from 'jotai/index'
import { TaskConfigurationIdType, TasksConfigurationOptions, TaskSelectedOptions } from '@/utlis/store/task/task_configuration'
import { useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'

const Panel = () => {
  const selectedOption = useAtomValue(TaskOptionData.SelectedOption)
  const AllOptions = useAtomValue(TaskOptionData.StaticData)
  const currentOption = useMemo(() => AllOptions.find(option => option.uid === selectedOption.selectedOptionUid), [selectedOption.selectedOptionUid])
  return (
    <section
      style={{ top: `${currentOption?.id * 105 + 40}px` }}
      className={`${selectedOption.isOpen ? 'translate-x-0' : 'translate-x-full'} absolute left-1/2 right-0 transition duration-[500ms] ease-in-out`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl bg-[#333333] shadow-black-block">
            {currentOption?.values.map((option, index) => (
              <SelectItem key={option.value} value={option.value} uid={currentOption.uid}>
                {option.title}
              </SelectItem>
            ))}
            {/*{currentOption?.hasInput ? (*/}
            {/*  <SelectItem noBorder={true}>*/}
            {/*    <Input variant="flushed" focusBorderColor="white" className="text-xl shadow-dark" />*/}
            {/*  </SelectItem>*/}
            {/*) : (*/}
            {/*  <></>*/}
            {/*)}*/}
          </div>
          <ArrowPointer isOpen={selectedOption.isOpen} hasInput={currentOption?.hasInput} />
        </div>
      </div>
    </section>
  )
}

export default Panel
