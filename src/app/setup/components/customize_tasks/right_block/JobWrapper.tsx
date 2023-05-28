'use client'
import { useAtomValue } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

interface IProps {
  children: React.ReactNode
}

const JobWrapper = ({ children }: IProps) => {
  const isOpenJobsOption = useAtomValue(TaskJobsValue.isOpenJobsOption)
  return (
    <section
      onClick={e => e.stopPropagation()}
      className={`${
        isOpenJobsOption ? 'translate-x-0 visible opacity-100' : 'translate-x-full invisible opacity-0'
      } top-[480px] absolute left-1/2 right-0 transition-all duration-[500ms]`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl shadow-black-block flex flex-wrap bg-backgroundColorSecond">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default JobWrapper
