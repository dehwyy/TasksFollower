import DividerComponent from '@/components/global/Divider'
import TaskInfoHeading from '@/components/global/task_info/TaskInfoHeading'
import TaskInfoTimeItem from '@/components/global/task_info/TaskInfoTimeItem'
import { useMemo } from 'react'
import TaskInfoTimeWrapper from '@/components/global/task_info/TaskInfoTimeWrapper'
import TaskInfoJobsWrapper from '@/components/global/task_info/TaskInfoJobsWrapper'
import TaskInfoJobsItem from '@/components/global/task_info/TaskInfoJobsItem'
import TaskInfoWrapper from '@/components/global/task_info/TaskInfoWrapper'

interface IProps {
  title: string
  description: string
  timeWork: number
  timeRest: number
  difficulty: number
  jobs: string[]
}

const TaskInfo = ({ title, description, timeWork, timeRest, difficulty, jobs }: IProps) => {
  const timeData = useMemo(
    () => [
      { text: 'Work Time Per Task', value: timeWork },
      { text: 'Rest Time Per Task', value: timeRest },
      { text: 'Overall', value: (timeWork + timeRest) * jobs.length },
    ],
    [timeWork, timeRest, JSON.stringify(jobs)]
  )
  return (
    <TaskInfoWrapper>
      <TaskInfoHeading title={title} description={description} difficulty={difficulty} />
      <DividerComponent orientation="horizontal" />
      <TaskInfoTimeWrapper>
        {timeData.map((t, i) => (
          <TaskInfoTimeItem key={i} text={t.text}>
            {t.value}
          </TaskInfoTimeItem>
        ))}
      </TaskInfoTimeWrapper>
      <DividerComponent orientation="horizontal" />
      <TaskInfoJobsWrapper>
        {jobs.length ? jobs.map((job, i) => <TaskInfoJobsItem key={i} job={job} isLastJob={jobs.length - i - 1} />) : <div>No Jobs</div>}
      </TaskInfoJobsWrapper>
    </TaskInfoWrapper>
  )
}

export default TaskInfo
