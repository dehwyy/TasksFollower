'use client'
import { Roboto } from 'next/font/google'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import ExpandingBlock from '@/app/profile/components/ExpandingBlock'

interface IProps {}

const ExtraboldText = Roboto({ subsets: ['latin'], weight: '900' })

const layouts = [
  {
    id: 1,
    tasksCount: 5,
    at: new Date(1684030022488),
    allTasks: [
      { id: 1, name: 'Play starrail' },
      { id: 2, name: 'Omatsuri ni iku' },
    ],
  },
  {
    id: 2,
    tasksCount: 3,
    at: new Date(1684030022488),
    allTasks: [
      { id: 1, name: 'Watch mrekk' },
      { id: 2, name: 'Drink water' },
    ],
  },
]

const Page = ({}: IProps) => {
  const nickname = 'dehwyy'
  return (
    <div className="max-w-[1000px] mx-auto py-12 flex flex-col w-full gap-5">
      <section>
        <h2 className="text-3xl text-gray-200 text-center">
          Signed as <span className={`${ExtraboldText.className} text-white underline-offset-4 underline decoration-2`}>{nickname}</span>
        </h2>
      </section>
      <section className="w-full relative">
        <ExpandingBlock>
          {layouts.map(layout => (
            <div key={layout.id} className="first:rounded-t-lg last:rounded-b-lg bg-blue-600 py-7 px-2  grid grid-cols-3 w-full">
              <div className="text-center">
                At {layout.at.toLocaleTimeString()} {String(layout.at.getDate()).padStart(2, '0')}.{String(layout.at.getMonth()).padStart(2, '0')}.
                {String(layout.at.getFullYear()).slice(2)}
              </div>
              <div className="text-center">Total {layout.tasksCount} tasks</div>
              <div className="flex flex-col">
                <span className="underline decoration-2">Tasks:</span>
                {layout.allTasks.map(task => (
                  <div key={task.id}>{task.name}</div>
                ))}
              </div>
            </div>
          ))}
        </ExpandingBlock>
      </section>
    </div>
  )
}

export default Page
