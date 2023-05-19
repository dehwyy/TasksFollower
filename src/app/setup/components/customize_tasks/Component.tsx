'use client'
import ExpandingBlockFromBottom from '@/app/setup/components/customize_tasks/ExpandingBlockFromBottom'
import { useState } from 'react'
import Arrow from '../../../../../public/icons/pointer_arrow.svg'
import { Input } from '@chakra-ui/input'
import Image from 'next/image'
import Panel from '@/app/setup/components/customize_tasks/right_panel/Panel'
import Tasks from '@/app/setup/components/customize_tasks/right_panel/Tasks'

interface IProps {}

const time = [
  { id: 1, value: 50, name: '50 minutes' },
  { id: 2, value: 60, name: '60 minutes' },
  { id: 3, value: 80, name: '1:20 hour' },
  { id: 4, value: 110, name: '1:50 hour' },
  { id: 5, value: 120, name: '2 hours' },
  { id: 6, value: 180, name: '3 hours' },
]

const chillTime = [
  { id: 1, value: 10, name: '10 minutes' },
  { id: 2, value: 20, name: '20 minutes' },
  { id: 3, value: 30, name: '30 minutes' },
  { id: 3, value: 60, name: '1 hour' },
]

const Component = ({}: IProps) => {
  const [isEdit, setEdit] = useState(false)
  return (
    <ExpandingBlockFromBottom>
      <div className="w-full flex flex-col">
        <article className="grid grid-cols-2 sm:grid-cols-1 mx-auto w-[70%] gap-10 py-5">
          <section className="py-10 flex flex-col gap-y-5">
            <Item isEdit={isEdit} callback={() => setEdit(p => !p)}>
              Name of the task
            </Item>
            <Item isEdit={isEdit} callback={() => setEdit(p => !p)}>
              Description
            </Item>
            <Item isEdit={isEdit} callback={() => setEdit(p => !p)}>
              Time of each task
            </Item>
            <Item isEdit={isEdit} callback={() => setEdit(p => !p)}>
              Time between tasks
            </Item>
            <Item isEdit={isEdit} callback={() => setEdit(p => !p)}>
              Tasks Configuration
            </Item>
          </section>
        </article>
        <div className="text-center text-3xl text-white pb-10">
          <h2 className="bg-green-400 w-1/3 lg:w-2/3 sm:w-[90%] mx-auto py-1 shadow-black-block rounded-xl">Finalization:</h2>
        </div>
      </div>
    </ExpandingBlockFromBottom>
  )
}

const Item = ({
  children,
  callback,
  isEdit,
  isTasksConfiguration,
}: {
  isTasksConfiguration?: boolean
  isEdit: boolean
  children: React.ReactNode
  callback: () => void
}) => {
  return (
    <div
      onClick={callback}
      className={`${
        isTasksConfiguration ? 'bg-violet-400' : 'bg-blue-400'
      } rounded-xl shadow-black-block  py-4 text-xl text-white  mt-5 px-5 flex w-full justify-center`}>
      {!isTasksConfiguration ? <Tasks isEdit={isEdit} /> : <Panel order={1} isEdit={isEdit} />}
      {children}
    </div>
  )
}

export default Component
