import SelectHeading from '@/app/setup/components/SelectHeading'
import OpenableTip from '@/components/global/OpenableTip'
import SelectItem from '@/app/setup/components/SelectItem'

interface ITask {
  id: number
  title: string
  tags: string[]
}

const tasks: ITask[] = [
  { id: 1, title: 'Complete math lesson', tags: ['school', 'math'] },
  { id: 2, title: 'Complete japanese lesson', tags: ['study', 'language', 'japan', 'japanese'] },
  { id: 3, title: 'Make up room', tags: ['home', 'room', 'gigachad'] },
  { id: 4, title: 'To code some time', tags: ['code', 'cpp', 'ts', 'typescript', 'py', 'python', 'js'] },
]

const SelectTasks = () => {
  return (
    <div>
      <SelectHeading>
        Select from already existing tasks:
        <OpenableTip tip="You can select from already existing task or create your own in *customize mode*" />
      </SelectHeading>
      <div className="grid place-items-center grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-2">
        {tasks.map(task => (
          <SelectItem title={task.title} callback={() => {}} key={task.id} />
        ))}
      </div>
    </div>
  )
}

export default SelectTasks
