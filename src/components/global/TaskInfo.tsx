import DividerComponent from '@/components/global/Divider'
import Image from 'next/image'
import Arrow from '../../../public/icons/arrow.svg'
import { useMemo } from 'react'

interface IProps {
  name: string
  description: string
  time: {
    rest: number
    work: number
  }
  jobs: IJob[]
}

const TaskInfo = ({ name, description, time, jobs }: IProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-2xl text-pinkLight shadow-dark">
        Plan "<span className="underline undeline-2 underline-offset-2">{name}</span>"
      </div>
      <div className="text-gray-200 underline pb-3">
        <i>{description}</i>
      </div>
      <DividerComponent orientation="horizontal" />
      <div className="flex flex-col items-center w-full py-3">
        <div className="text-xl text-pinkLight shadow-dark">Time</div>
        <div className="grid grid-cols-3 sm:grid-cols-1 w-full place-items-center">
          <div className="flex flex-col items-center">
            <div>Work Time Per Task</div>
            <div className="text-forShadowYellow">{time.work}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Rest Time Per Task</div>
            <div className="text-forShadowYellow">{time.rest}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Overall</div>
            <div className="text-forShadowYellow">{(time.work + time.rest) * jobs.length}</div>
          </div>
        </div>
      </div>
      <DividerComponent orientation="horizontal" />
      <div className="flex flex-col items-center w-full py-3">
        <div className="text-xl text-pinkLight pb-2">Tasks</div>
        {jobs.length ? (
          jobs.map((job, i) =>
            job.isSelected ? (
              <>
                <div className="block-item w-2/3 sm:w-full text-center py-1 rounded-2xl">{job.value}</div>
                {jobs.length - i - 1 ? <Image width="50px" height="50px" className="w-[50px] h-[50px] mb-1" src={Arrow} alt="arrow" /> : <></>}
              </>
            ) : (
              <></>
            )
          )
        ) : (
          <div>No Jobs</div>
        )}
      </div>
    </div>
  )
}

export default TaskInfo
