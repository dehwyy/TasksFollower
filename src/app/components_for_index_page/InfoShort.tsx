'use client'
import { useAtomValue } from 'jotai'
import { TaskPlayData } from '@/utlis/store/task/task.play'

const InfoShort = () => {
  const title = useAtomValue(TaskPlayData.title)
  return (
    <div className="w-1/3 lg:w-2/3 sm:w-full block-item-hover rounded-xl px-5 py-5">
      <div className="flex justify-between px-5 text-xl">
        <div className="flex items-center">
          <span className="underline underline-offset-2">{title.value}</span>
        </div>
        <div className="flex gap-x-5">
          {[{ title: ' Edit' }].map((btn, i) => (
            <button
              key={i}
              className="rounded-xl px-5 py-2 text-pinkPale hover:text-pinkPaleLighter border-pinkPale hover:border-pinkPaleLighter border-2 transition-all duration-300">
              {btn.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoShort
