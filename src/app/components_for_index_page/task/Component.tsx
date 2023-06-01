import TaskJobs from '@/app/components_for_index_page/task/TaskJobs'
import TaskButtons from '@/app/components_for_index_page/task/TaskButtons'

const Component = () => {
  return (
    <div className="w-full pb-10">
      <div className="flex flex-col w-1/4 mx-auto py-10">
        <TaskJobs />
      </div>
      <TaskButtons />
    </div>
  )
}

export default Component
