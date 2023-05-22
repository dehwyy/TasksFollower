'use client'
import ExpandingBlockFromBottom from '@/app/setup/components/customize_tasks/ExpandingBlockFromBottom'
import SummaryButton from '@/app/setup/components/customize_tasks/SummaryButton'
import SummaryModalWindow from '@/app/setup/components/customize_tasks/SummaryModalWindow'
import { useAtomValue } from 'jotai'
import TaskItem from '@/app/setup/components/customize_tasks/TaskItem'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'
import Panel from '@/app/setup/components/customize_tasks/right_panel/Panel'

const Component = () => {
  const TaskOptions = useAtomValue(TaskOptionData.StaticData)
  return (
    <ExpandingBlockFromBottom>
      <div className="w-full flex flex-col">
        <article className="grid grid-cols-2 sm:grid-cols-1 mx-auto w-[70%] gap-10 py-5">
          <section className="py-10 flex flex-col gap-y-5">
            {TaskOptions.map(option => (
              <TaskItem key={option.id} optionUid={option.uid}>
                {option.title}
              </TaskItem>
            ))}
            <TaskItem optionUid={'difficulty'}>Tasks Configuration</TaskItem>
            <SummaryButton />
            <SummaryModalWindow />
          </section>
          <Panel />
        </article>
      </div>
    </ExpandingBlockFromBottom>
  )
}

export default Component
