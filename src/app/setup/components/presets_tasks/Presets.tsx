import SelectHeading from '@/app/setup/components/SelectHeading'
import DividerComponent from '@/components/global/Divider'
import Image from 'next/image'
import Arrow from '../../../../../public/icons/arrow.svg'
import TaskInfo from '@/components/global/TaskInfo'

interface IProps {}

interface ITask {
  id: number
  name: string
  isDone: boolean
}

type TaskDifficulty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface IPreset {
  id: number
  name: string
  description: string
  time: {
    rest: number
    work: number
  }
  difficulty: TaskDifficulty
  tasks: ITask[]
}

const PresentsData: IPreset[] = [
  {
    id: 1,
    name: 'LearnDay №1',
    description: 'The first and the hardest day in your beginning journey',
    time: { rest: 10, work: 50 },
    difficulty: 10,
    tasks: [
      { id: 1, name: 'Japanese', isDone: false },
      { id: 2, name: 'Book reading', isDone: false },
      { id: 3, name: 'C# learning', isDone: false },
    ],
  },
  {
    id: 2,
    name: 'LearnDay №2',
    description: 'Second day in your adventure of improving',
    time: { rest: 20, work: 70 },
    difficulty: 7,
    tasks: [
      { id: 1, name: 'Chemistry', isDone: false },
      { id: 2, name: 'Coding', isDone: false },
    ],
  },
]
const Presets = () => {
  return (
    <article className="pb-5">
      <SelectHeading>Select one of the following presets</SelectHeading>
      <section className="flex flex-col gap-y-7 pt-5 shadow-light">
        {PresentsData.map(preset => (
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-x-10 gap-y-3 ">
            <div>
              <div className="block-item-hover rounded-lg p-3 flex gap-1 items-center justify-center">
                <div>{preset.name}</div>
                <span className="text-gray-400">{' - '}</span>
                <div className="text-forShadowYellow">{preset.difficulty}★</div>
              </div>
            </div>
            <div className="block-item rounded-lg p-3 col-span-2 lg:col-span-1">
              <TaskInfo tasks={preset.tasks} name={preset.name} time={preset.time} difficulty={preset.difficulty} description={preset.description} />
              <DividerComponent orientation="horizontal" />
              <div className="grid gap-x-5 gap-y-3 grid-cols-2 sm:grid-cols-1 w-2/3 mx-auto sm:w-full pt-3">
                <div className="block-item-hover !border-violetBorderLighter text-center py-1 rounded-2xl">Edit</div>
                <div className="block-item-hover !border-violetBorderLighter text-center py-1 rounded-2xl">Start</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  )
}

export default Presets
