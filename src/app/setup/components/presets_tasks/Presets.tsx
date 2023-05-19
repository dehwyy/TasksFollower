import SelectHeading from '@/app/setup/components/SelectHeading'
import DividerComponent from '@/components/global/Divider'
import Image from 'next/image'
import Arrow from '../../../../../public/icons/arrow.svg'

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
    description: 'The first and the hardest day in your begging journey',
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
    <article>
      <SelectHeading>Select one of the following presets</SelectHeading>
      <section className="flex flex-col gap-y-7 pt-5 shadow-light">
        {PresentsData.map(preset => (
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-x-10 gap-y-3 text-forShadowBlue ">
            <div>
              <div
                style={{ background: 'rgba(255, 255, 255, 1)' }}
                className="shadow-black-block rounded-lg p-3 flex gap-1 items-center justify-center">
                <div>{preset.name}</div>
                <span className="text-gray-400">{' - '}</span>
                <div className="text-forShadowYellow">{preset.difficulty}★</div>
              </div>
            </div>
            <div
              style={{ background: 'rgba(255, 255, 255, 1)' }}
              className="shadow-black-block rounded-lg p-3 col-span-2 lg:col-span-1 flex flex-col items-center">
              <div className="text-2xl text-red-400 shadow-dark">Plan {preset.name}</div>
              <div className="text-forShadowBlue underline pb-3">
                <i>{preset.description}</i>
              </div>
              <DividerComponent orientation="horizontal" />
              <div className="flex flex-col items-center w-full py-3">
                <div className="text-xl text-red-400 shadow-dark">Time</div>
                <div className="grid grid-cols-3 w-full place-items-center">
                  <div className="flex flex-col items-center">
                    <div>Work Time Per Task</div>
                    <div className="text-forShadowYellow">{preset.time.work}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>Rest Time Per Task</div>
                    <div className="text-forShadowYellow">{preset.time.rest}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>Overall</div>
                    <div className="text-forShadowYellow">{(preset.time.work + preset.time.rest) * preset.tasks.length}</div>
                  </div>
                </div>
              </div>
              <DividerComponent orientation="horizontal" />
              <div className="flex flex-col items-center w-full py-3">
                <div className="text-xl text-red-400 shadow-dark pb-1">Tasks</div>
                {preset.tasks.map((task, i) => (
                  <>
                    <div className="border-forShadowBlue border-2 w-2/3 sm:w-full text-center py-1 rounded-2xl">{task.name}</div>
                    {preset.tasks.length - i - 1 ? (
                      <Image width="50px" height="50px" className="w-[50px] h-[50px] mb-1" src={Arrow} alt="arrow" />
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>
              <DividerComponent orientation="horizontal" />
              <div className="grid gap-x-5 gap-y-3 grid-cols-2 sm:grid-cols-1 w-2/3 sm:w-full pt-3">
                <div className="text-forShadowYellow border-forShadowYellow border-2 text-center py-1 rounded-2xl">Edit</div>
                <div className="text-green-500 border-green-500 border-2 text-center py-1 rounded-2xl">Start</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  )
}

export default Presets
