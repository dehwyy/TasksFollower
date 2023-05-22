'use client'
import { useAtom } from 'jotai'
import SelectItem from '@/app/setup/components/customize_tasks/right_panel/SelectItem'
import { Input } from '@chakra-ui/input'
import Plus from '../../../../../../public/icons/plus.svg'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { TaskSelectedOptions } from '@/utlis/store/task/task_configuration'
import { ConfigurationTasksAdder } from '@/utlis/enums/TaskConfiguration'

interface IProps {}

const Jobs = ({}: IProps) => {
  const [selectedItem] = useAtom(TaskSelectedOptions)
  const isSelected = useMemo(() => ConfigurationTasksAdder.itemId === selectedItem.selected, [selectedItem])
  const [isCreatingTask, setIsCreatingTask] = useState(false)
  const [createTaskInput, setCreateTaskInput] = useState('')
  const [createdTasks, setCreatedTasks] = useState([])
  return (
    <section
      onClick={e => e.stopPropagation()}
      className={`${isSelected ? 'translate-x-0  ' : 'translate-x-full'} top-[480px] absolute left-1/2 right-0 transition-all duration-700`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl shadow-black-block flex flex-wrap bg-[#333333]">
            <SelectItem noBorder={true} styles={{ background: '#a78bfa' }}>
              <Input
                placeholder="Find tasks..."
                variant="flushed"
                focusBorderColor="white"
                className="text-xl placeholder:text-gray-200 shadow-dark"
              />
            </SelectItem>
            <SelectItem styles={{ background: '#a78bfa' }}>
              <div className="flex items-center shadow-dark gap-5">
                <span>Create Task</span>
                <span onClick={() => setIsCreatingTask(p => !p)} className="cursor-pointer">
                  <Image src={Plus} alt="plusIcon" />
                </span>
              </div>
            </SelectItem>
            <div className={`${isCreatingTask ? 'h-full' : 'translate-x-full h-0'} w-full transition-all duration-500`}>
              <SelectItem noBorder={true} styles={{ background: '#a78bfa' }}>
                <div className="w-full flex items-center">
                  <Input
                    value={createTaskInput}
                    onChange={e => setCreateTaskInput(e.target.value)}
                    placeholder="Task's name"
                    variant="flushed"
                    focusBorderColor="white"
                    className="text-xl placeholder:text-gray-200 shadow-dark"
                  />
                  <span
                    onClick={() => {
                      createTaskInput && setCreatedTasks(p => [createTaskInput, ...p])
                      setCreateTaskInput('')
                    }}
                    className="cursor-pointer">
                    <Image src={Plus} alt="plusIcon" />
                  </span>
                </div>
              </SelectItem>
            </div>
            {createdTasks.map(task => (
              <SelectItem>{task}</SelectItem>
            ))}
            <SelectItem>Math</SelectItem>
            <SelectItem>Japanese</SelectItem>
            <SelectItem noBorder={true}>Science</SelectItem>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs
