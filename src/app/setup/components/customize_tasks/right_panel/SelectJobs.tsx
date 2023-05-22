'use client'
import { Input } from '@chakra-ui/input'
import Plus from '../../../../../../public/icons/plus.svg'
import Image from 'next/image'
import SelectJobItem from '@/app/setup/components/customize_tasks/right_panel/SelectJobItem'
import { useAtom } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

interface IProps {}

const SelectJobs = ({}: IProps) => {
  const [taskJobs, editJobs] = useAtom(TaskJobsValue.TaskJobs)
  return (
    <section
      onClick={e => e.stopPropagation()}
      className={`${true ? 'translate-x-0  ' : 'translate-x-full'} top-[480px] absolute left-1/2 right-0 transition-all duration-700`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl shadow-black-block flex flex-wrap bg-[#333333]">
            <SelectJobItem noDivider={true}>
              <Input
                placeholder="Find tasks..."
                variant="flushed"
                focusBorderColor="white"
                className="text-xl placeholder:text-gray-200 shadow-dark"
              />
            </SelectJobItem>
            <SelectJobItem>
              <div className="flex items-center shadow-dark gap-5">
                <span>Create Task</span>
                <span onClick={() => {}} className="cursor-pointer">
                  <Image src={Plus} alt="plusIcon" />
                </span>
              </div>
            </SelectJobItem>
            <div className={`${false ? 'h-full' : 'translate-x-full h-0'} w-full transition-all duration-500`}>
              <div className="bg-[#a78bfa] cursor-pointer select-none text-xl text-white w-full px-10 py-5 text-center transition-all">
                <div className="w-full flex items-center">
                  <Input
                    placeholder="Task's name"
                    variant="flushed"
                    focusBorderColor="white"
                    className="text-xl placeholder:text-gray-200 shadow-dark"
                  />
                  <span onClick={() => {}} className="cursor-pointer">
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
