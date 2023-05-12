import SelectItem from '@/app/setup/components/SelectItem'
import Image from 'next/image'
import InfoIcon from "../../../public/icons/info.svg"
import OpenableTip from '@/components/global/OpenableTip'
import SelectWrapper from '@/app/setup/components/SelectWrapper'
import SelectHeading from '@/app/setup/components/SelectHeading'
import Component from '@/app/setup/components/customize_tasks/Component'
interface IProps {

}

interface ILayout {
  id: number
  title: string
  values: [number, number]
}

const Layouts: ILayout[] = [
  {id: 1, title: "50 / 10", values: [50, 10]},
  {id: 2, title: "120 / 30", values: [120, 30]},
  {id: 3, title: "30 / 5", values: [30, 5]},
  {id: 4, title: "90 / 20", values: [90, 20]},
  {id: 5, title: "180 / 60", values: [120, 60]},
]

interface ITime {
  id: number
  time: number
}

const Times: ITime[] = [
  {id: 1, time: 1},
  {id: 2, time: 2},
  {id: 3, time: 3},
  {id: 4, time: 4},
  {id: 5, time: 5},
  {id: 6, time: 6},
]

interface ITask {
  id: number
  title: string
  tags: string[]
}

const tasks: ITask[] = [
  {id: 1, title: "Complete math lesson", tags: ["school", "math"]},
  {id: 2, title: "Complete japanese lesson", tags: ["study", "language", 'japan', 'japanese' ]},
  {id: 3, title: "Make up room", tags: ["home", "room", 'gigachad']},
  {id: 4, title: "To code some time", tags: ["code", "cpp", 'ts', 'typescript', 'py', 'python', 'js']},
]

const Page = ({}: IProps) => {
    return (
        <div className="bg-blue-500 w-full px-2">
            <div className='max-w-[1000px] mx-auto py-10 flex flex-col gap-y-7'>
              <h2 className='text-4xl self-center'>Build your Day Tasks</h2>
              <div>
                <SelectHeading>
                  Select the following templates:
                  <OpenableTip tip="First number stays for *time per task* and the second is chill time in minutes"/>
                </SelectHeading>
                <SelectWrapper>
                  {Layouts.map(layout => (
                    <SelectItem title={layout.title} callback={() => {}} key={layout.id} />
                  ))}
                </SelectWrapper>
              </div>
              <div>
                <SelectHeading>
                  Select time of task repeat:
                  <OpenableTip tip="The repeat count of different tasks"/>
                </SelectHeading>
              <SelectWrapper>
                {Times.map(time => (
                  <SelectItem title={`${time.time} ${time.time - 1 ? "times" : "time"}`} callback={() => {}} key={time.id}/>
                ))}
              </SelectWrapper>
              </div>
              <div>
                <SelectHeading>
                  Select from already existing tasks:
                  <OpenableTip tip="You can select from already existing task or create your own in *customize mode*"/>
                </SelectHeading>
                <div className='grid place-items-center grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-2'>
                  {tasks.map(task => (
                    <SelectItem title={task.title} callback={() => {}} key={task.id}/>
                  ))}
                </div>
              </div>
              <Component />
            </div>
        </div>
    )
}

export default Page