'use client'
import { memo } from 'react'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { useAtom } from 'jotai'

interface IProps {
  children: React.ReactNode
  uid: TaskUid
  value: number | string
}

const RightBlockSelectItem = ({ children, uid, value }: IProps) => {
  const [{ value: selectedOptionValue, inputValue }, setSelectedValue] = useAtom(TaskOptionValue[uid])
  return (
    <div
      onClick={() => setSelectedValue(inputValue !== undefined ? { value, action: 'select' } : value)}
      className={`${
        selectedOptionValue === value && '!bg-pinkPale hover:!bg-pinkPaleLighter !border-violetBorderPale'
      } block-item-hover !border-0 !border-b-2 cursor-pointer select-none text-xl text-white w-full px-10 py-5 text-center transition-all`}>
      <div>{children}</div>
    </div>
  )
}

export default memo(RightBlockSelectItem)
