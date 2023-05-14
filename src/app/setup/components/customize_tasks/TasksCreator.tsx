'use client'
import { Input } from '@chakra-ui/input'
import SelectItem from '@/app/setup/components/SelectItem'
import { PlusIcon, CheckIcon } from '@radix-ui/react-icons'

import { useState } from 'react'
import HoverTip from '@/components/global/HoverTip'
interface IProps {}

const tasks = [
  { id: 1, title: 'Complete math lesson', tags: ['school', 'math'] },
  { id: 2, title: 'Complete japanese lesson', tags: ['study', 'language', 'japan', 'japanese'] },
  { id: 3, title: 'Make up room', tags: ['home', 'room', 'gigachad'] },
  { id: 4, title: 'To code some time', tags: ['code', 'cpp', 'ts', 'typescript', 'py', 'python', 'js'] },
]

const createdTasks: typeof tasks = [{ id: 1, title: 'To code some time', tags: ['code', 'cpp', 'ts', 'typescript', 'py', 'python', 'js'] }]

const TasksCreator = ({}: IProps) => {
  const [isEditMode, setEditMode] = useState(false)
  const [newTaskValue, setNewTaskValue] = useState('')
  return (
    <div className="w-4/5 mx-auto lg:w-full pb-5">
      <h2 className="text-center text-2xl underline decoration-2 pb-5">Configure tasks</h2>
      <div className="flex justify-between">
        <h3 className="text-xl">Select from already existing:</h3>
        <div>
          <Input size="sm" className="rounded-md bg-white text-blue-500" placeholder="Find task..." />
        </div>
      </div>
      <div className="grid place-items-center lg:grid-cols-2 sm:grid-cols-1 grid-cols-3 gap-5 pt-5">
        {tasks.map(layout => (
          <SelectItem title={layout.title} callback={() => {}} key={layout.id} />
        ))}
      </div>
      <div className="flex justify-between pt-5">
        <h3 className="text-center text-xl">Created tasks:</h3>
      </div>
      <div className="grid place-items-center lg:grid-cols-2 sm:grid-cols-1 grid-cols-3 gap-5 pt-5">
        {createdTasks.map(layout => (
          <SelectItem title={layout.title} callback={() => {}} key={layout.id} />
        ))}
        <div
          className={`${
            isEditMode ? 'opacity-100 visible' : 'opacity-0 invisible'
          } place-self-start lg:w-[85%] w-full cursor-pointer select-none transition-all`}>
          <div className="text-blue-500 text-center relative">
            <Input
              value={newTaskValue}
              onChange={e => setNewTaskValue(e.target.value)}
              placeholder="Write task title..."
              size="sm"
              className="bg-white rounded-xl p-2"
            />
            <span
              onClick={() => {
                setEditMode(false)
                createdTasks.push({
                  id: createdTasks.length + 1,
                  title: newTaskValue,
                  tags: [newTaskValue],
                })
                setNewTaskValue('')
              }}
              className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 border-2 border-blue-500 bg-white rounded-full ">
              <CheckIcon className="w-8 h-full " />
            </span>
          </div>
        </div>
      </div>
      <div onClick={() => setEditMode(true)} className="mt-5 p-2 flex justify-end">
        <div className="text-center text-gray-300 ">
          <HoverTip tip="Click to create new task">
            <div className="p-2 text-blue-500 bg-white hover:scale-110 transition-all w-min duration-300 rounded-full cursor-pointer select-none">
              <PlusIcon />
            </div>
          </HoverTip>
        </div>
      </div>
    </div>
  )
}

export default TasksCreator
