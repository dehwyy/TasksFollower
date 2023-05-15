import CustomizeTasks from '@/app/setup/components/customize_tasks/Component'
import Templates from '@/app/setup/components/template_tasks/Templates'
import RepeatTimes from '@/app/setup/components/template_tasks/RepeatTimes'
import SelectTasks from '@/app/setup/components/template_tasks/SelectTasks'

const Page = () => {
  return (
    <div className="bg-blue-500 w-full px-2">
      <div className="max-w-[1000px] mx-auto py-10 flex flex-col gap-y-7">
        <h2 className="text-4xl self-center">Build your Day Tasks</h2>
        <Templates />
        <RepeatTimes />
        <SelectTasks />
        <CustomizeTasks />
      </div>
    </div>
  )
}

export default Page
