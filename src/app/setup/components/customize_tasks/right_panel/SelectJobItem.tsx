import { useSetAtom } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useCallback } from 'react'

interface IProps {
  id: number
  value: string
  isSelected: boolean
  noDivider?: boolean
}

const SelectJobItem = ({ value, isSelected, id, noDivider }: IProps) => {
  const taskJobEdit = useSetAtom(TaskJobsValue.TaskJobs)
  const changeJobState = useCallback(() => taskJobEdit({ id, action: 'changeState' }), [])
  return (
    <div
      onClick={changeJobState}
      className={`${!noDivider && 'border-t-2'} ${
        isSelected ? 'bg-red-500' : ' bg-[#a78bfa]'
      } cursor-pointer select-none text-xl text-white w-full px-10 py-5 text-center transition-all `}>
      {value}
    </div>
  )
}

export default SelectJobItem
