'use client'
import TaskInfo from '@/components/global/task_info/Component'
import useGetAllDataFromStore from '@/utlis/hooks/play_hooks/useGetAllDataFromStore'
import ModalWindow from '@/components/global/ModalWindow'

interface IProps {}

const TaskInfoModalWindowContent = ({}: IProps) => {
  const { title, description, timeWork, timeRest, difficulty, jobs } = useGetAllDataFromStore()
  return (
    <ModalWindow uid="playSummaryWindow" deps={[]}>
      <TaskInfo title={title} description={description} timeWork={timeWork} timeRest={timeRest} difficulty={difficulty} jobs={jobs} />
    </ModalWindow>
  )
}

export default TaskInfoModalWindowContent
