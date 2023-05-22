'use client'
import ExpandingBlockFromBottom from '@/app/setup/components/customize_tasks/ExpandingBlockFromBottom'
import SummaryButton from '@/app/setup/components/customize_tasks/SummaryButton'
import SummaryModalWindow from '@/app/setup/components/customize_tasks/SummaryModalWindow'
import { useAtomValue } from 'jotai'
import TaskOption from '@/app/setup/components/customize_tasks/TaskOption'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'
import Panel from '@/app/setup/components/customize_tasks/right_panel/Panel'
import TaskOptionJobs from '@/app/setup/components/customize_tasks/TaskOptionJobs'
import SelectJobs from '@/app/setup/components/customize_tasks/right_panel/SelectJobs'

const Component = () => {
  const TaskOptions = useAtomValue(TaskOptionData.StaticData)
  return (
    <ExpandingBlockFromBottom>
      <div className="w-full flex flex-col">
        <article className="grid grid-cols-2 sm:grid-cols-1 mx-auto w-[70%] gap-10 py-5">
          <section className="py-10 flex flex-col gap-y-5">
            {TaskOptions.map(option => (
              <TaskOption key={option.id} optionUid={option.uid}>
                {option.title}
              </TaskOption>
            ))}
            <TaskOptionJobs>Tasks Configuration</TaskOptionJobs>
            <SummaryButton />
            <SummaryModalWindow />
          </section>
          <Panel />
          <SelectJobs />
        </article>
      </div>
    </ExpandingBlockFromBottom>
  )
}

export default Component
