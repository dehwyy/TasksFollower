import Image from 'next/image'
import Arrow from '../../../../public/icons/arrow.svg'

interface IProps {
  isLastJob: unknown
  job: string
}

const TaskInfoJobsItem = ({ isLastJob, job }: IProps) => {
  return (
    <>
      <div className="block-item w-2/3 sm:w-full text-center py-1 rounded-2xl">{job}</div>
      {isLastJob ? <Image width="50px" height="50px" className="w-[50px] h-[50px] mb-1" src={Arrow} alt="arrow" /> : <></>}
    </>
  )
}

export default TaskInfoJobsItem
