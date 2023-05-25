'use client'
import { CSSProperties, memo, useCallback, useMemo } from 'react'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { useAtom } from 'jotai'
interface IProps {
  children: React.ReactNode
  uid: TaskUid
  value: number | string
  styles?: CSSProperties
  noBorder?: boolean
}

const SelectItem = ({ children, uid, value, noBorder, styles }: IProps) => {
  const [{ value: selectedOptionValue }, setSelectedValue] = useAtom(TaskOptionValue[uid])
  return (
    <div
      style={styles}
      onClick={() => setSelectedValue(value)}
      className={`${!noBorder && 'border-white border-b-[1px]'} ${
        selectedOptionValue === value && '!bg-pinkPale hover:!bg-pinkPaleLighter !border-violetBorderPale'
      } block-item-hover !border-0 !border-b-2 cursor-pointer select-none text-xl text-white w-full px-10 py-5 text-center transition-all`}>
      <div>{children}</div>
    </div>
  )
}

export default memo(SelectItem)
