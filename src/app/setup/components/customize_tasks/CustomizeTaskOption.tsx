'use client'
import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { TRANSITION_DELAY } from '@/utlis/enums/global'

interface IProps {
  children: React.ReactNode
  optionUid: TaskUid
}

const CustomizeTaskOption = ({ children, optionUid }: IProps) => {
  const setSelectedTask = useSetAtom(TaskOptionData.SelectedOption)
  // I don't understand why ts solve value of key in type Record<keys, ISelectedTaskValueWithInput || ISelectedTaskValue> as ISelectedTaskValue // bruh.
  const currentTaskSelectedOption = useAtomValue(TaskOptionValue[optionUid]) as ISelectedTaskValueWithInput
  const onClickHandler = useCallback(() => {
    setSelectedTask({ selectedOptionUid: optionUid, timeout: TRANSITION_DELAY.DELAY })
  }, [])
  return (
    <div
      onClick={onClickHandler}
      className={`${
        currentTaskSelectedOption.value || currentTaskSelectedOption!.inputValue ? 'shadow-green-400' : 'shadow-red-400'
      } shadow-unselectedSelected block-item-hover text-gray-200 rounded-xl text-xl mt-5 px-5 py-4 flex w-full justify-center transition-all`}>
      {children}
    </div>
  )
}

export default CustomizeTaskOption
