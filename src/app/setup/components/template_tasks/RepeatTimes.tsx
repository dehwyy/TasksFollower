import SelectHeading from '@/app/setup/components/SelectHeading'
import OpenableTip from '@/components/global/OpenableTip'
import SelectWrapper from '@/app/setup/components/SelectWrapper'
import SelectItem from '@/app/setup/components/SelectItem'

interface ITime {
  id: number
  time: number
}

const Times: ITime[] = [
  { id: 1, time: 1 },
  { id: 2, time: 2 },
  { id: 3, time: 3 },
  { id: 4, time: 4 },
  { id: 5, time: 5 },
  { id: 6, time: 6 },
]

const RepeatTimes = () => {
  return (
    <div>
      <SelectHeading>
        Select time of task repeat:
        <OpenableTip tip="The repeat count of different tasks" />
      </SelectHeading>
      <SelectWrapper>
        {Times.map(time => (
          <SelectItem title={`${time.time} ${time.time - 1 ? 'times' : 'time'}`} callback={() => {}} key={time.id} />
        ))}
      </SelectWrapper>
    </div>
  )
}

export default RepeatTimes
