'use client'
import CustomizeTaskOption from '@/app/setup/components/customize_tasks/CustomizeTaskOption'
import { useAtomValue } from 'jotai'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'

interface IProps {}

const CustomizeTaskOptions = ({}: IProps) => {
  const TaskOptions = useAtomValue(TaskOptionData.StaticData)
  return (
    <>
      {TaskOptions.map(option => (
        <CustomizeTaskOption key={option.id} optionUid={option.uid}>
          {option.title}
        </CustomizeTaskOption>
      ))}
    </>
  )
}

export default CustomizeTaskOptions
