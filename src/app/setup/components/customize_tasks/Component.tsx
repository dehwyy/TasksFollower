'use client'
import ExpandingBlockFromBottom from '@/app/setup/components/customize_tasks/ExpandingBlockFromBottom'
import SummaryButton from '@/app/setup/components/customize_tasks/SummaryButton'
import SummaryModalWindow from '@/app/setup/components/customize_tasks/SummaryModalWindow'
import { useAtom } from 'jotai'
import { TaskConfigurationIdType, TasksConfigurationOptions } from '@/utlis/store/tasks/task_configuration'
import ConfigurationItem from '@/app/setup/components/customize_tasks/ConfigurationItem'
import { ConfigurationTasksAdder } from '@/utlis/enums/TaskConfiguration'

interface IProps {}

const Component = ({}: IProps) => {
  const [tasksConfigurationOptions] = useAtom(TasksConfigurationOptions)
  return (
    <ExpandingBlockFromBottom>
      <div className="w-full flex flex-col">
        <article className="grid grid-cols-2 sm:grid-cols-1 mx-auto w-[70%] gap-10 py-5">
          <section className="py-10 flex flex-col gap-y-5">
            {tasksConfigurationOptions.map(task => (
              <ConfigurationItem itemId={task.id as TaskConfigurationIdType}>{task.title}</ConfigurationItem>
            ))}
            <ConfigurationItem itemId={ConfigurationTasksAdder.itemId}>Tasks Configuration</ConfigurationItem>
            <SummaryButton />
            <SummaryModalWindow />
          </section>
        </article>
      </div>
    </ExpandingBlockFromBottom>
  )
}

export default Component
