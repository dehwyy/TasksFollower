'use client'
import { Input } from '@chakra-ui/input'
import Plus from '../../../../../../public/icons/plus.svg'
import Minus from '../../../../../../public/icons/minus.svg'
import Image from 'next/image'
import SelectJobItem from '@/app/setup/components/customize_tasks/right_panel/SelectJobItem'
import { useAtom, useAtomValue } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import SelectJobItemInput from '@/app/setup/components/customize_tasks/right_panel/SelectJobItemInput'

interface IProps {}

const SelectJobs = ({}: IProps) => {
  const [taskJobs, editJobs] = useAtom(TaskJobsValue.TaskJobs)
  const isOpenJobsOption = useAtomValue(TaskJobsValue.isOpenJobsOption)
  const [isCreatingJob, setCreatingJob] = useAtom(TaskJobsValue.isCreatingJob)
  const [newJobValue, setNewJobValue] = useAtom(TaskJobsValue.newJobValue)
  return (
    <section
      onClick={e => e.stopPropagation()}
      className={`${
        isOpenJobsOption ? 'translate-x-0 visible opacity-100' : 'translate-x-full invisible opacity-0'
      } top-[480px] absolute left-1/2 right-0 transition-all duration-[500ms]`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl shadow-black-block flex flex-wrap bg-backgroundColorSecond">
            <SelectJobItemInput>
              <Input
                tabIndex={-1}
                onChange={e => editJobs({ action: 'sortArray', regex: e.target.value })}
                placeholder="Find tasks..."
                variant="flushed"
                focusBorderColor="white"
                className="text-xl placeholder:text-gray-200 shadow-dark"
              />
            </SelectJobItemInput>
            <SelectJobItemInput hasBorder={true}>
              <div className="flex items-center shadow-dark gap-5">
                <span>Create Task</span>
                <span onClick={() => setCreatingJob(p => !p)} className="cursor-pointer">
                  <Image src={isCreatingJob ? Minus : Plus} alt="plusIcon" />
                </span>
              </div>
            </SelectJobItemInput>
            <div className={`${isCreatingJob ? 'h-full' : 'translate-x-full h-0'} w-full transition-all duration-500`}>
              <div className="block-item !border-x-0 !border-y-2 text-xl text-white w-full px-10 py-5 text-center transition-all">
                <div className="w-full flex items-center">
                  <Input
                    tabIndex={-1}
                    value={newJobValue}
                    onChange={e => setNewJobValue(e.target.value)}
                    placeholder="Task's name"
                    variant="flushed"
                    focusBorderColor="white"
                    className="text-xl placeholder:text-gray-200 shadow-dark"
                  />
                  <span onClick={() => editJobs({ action: 'create', newJobValue })} className="cursor-pointer">
                    <Image src={Plus} alt="plusIcon" />
                  </span>
                </div>
              </div>
            </div>
            {taskJobs.map(task => (
              <SelectJobItem key={task.id} isSelected={task.isSelected} value={task.value} id={task.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectJobs
