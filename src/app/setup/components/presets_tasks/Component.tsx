import DividerComponent from '@/components/global/Divider'
import TaskInfo from '@/components/global/task_info/Component'
import PresetShortInfo from '@/app/setup/components/presets_tasks/PresetShortInfo'
import PresetButton from '@/app/setup/components/presets_tasks/PresetButton'
import PresetButtonWrapper from '@/app/setup/components/presets_tasks/PresetButtonWrapper'
import PresetsWrapper from '@/app/setup/components/presets_tasks/PresetsWrapper'
import PresetInfoWrapper from '@/app/setup/components/presets_tasks/PresetInfoWrapper'
import PresetSingleWrapper from '@/app/setup/components/presets_tasks/PresetSingleWrapper'

type TaskDifficulty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface IPreset {
  id: number
  title: string
  description: string
  timeWork: number
  timeRest: number
  difficulty: TaskDifficulty
  jobs: IJob[]
}
const PresentsData: IPreset[] = [
  {
    id: 1,
    title: 'LearnDay №1',
    description: 'The first and the hardest day in your beginning journey',
    timeWork: 25,
    timeRest: 5,
    difficulty: 10,
    jobs: [
      { id: 1, value: 'Japanese', jobTime: 10, isSelected: false },
      { id: 2, value: 'Book reading', jobTime: 10, isSelected: false },
      { id: 3, value: 'C# learning', jobTime: 10, isSelected: false },
    ],
  },
  {
    id: 2,
    title: 'LearnDay №2',
    description: 'Second day in your adventure of improving',
    timeWork: 25,
    timeRest: 5,
    difficulty: 7,
    jobs: [
      { id: 1, value: 'Chemistry', jobTime: 10, isSelected: false },
      { id: 2, value: 'Coding', jobTime: 10, isSelected: false },
    ],
  },
]

const Component = () => {
  return (
    <PresetsWrapper>
      {PresentsData.map(preset => (
        <PresetSingleWrapper key={preset.id}>
          <PresetShortInfo name={preset.title} difficulty={preset.difficulty} />
          <PresetInfoWrapper>
            <TaskInfo
              title={preset.title}
              timeWork={preset.timeWork}
              timeRest={preset.timeRest}
              jobs={preset.jobs.map(job => job.value)}
              difficulty={preset.difficulty}
              description={preset.description}
            />
            <DividerComponent orientation="horizontal" />
            <PresetButtonWrapper>
              <PresetButton>Edit</PresetButton>
              <PresetButton>Start</PresetButton>
            </PresetButtonWrapper>
          </PresetInfoWrapper>
        </PresetSingleWrapper>
      ))}
    </PresetsWrapper>
  )
}

export default Component
