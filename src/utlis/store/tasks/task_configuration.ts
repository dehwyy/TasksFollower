import { atom } from 'jotai'

export type TaskConfigurationIdType = 0 | 1 | 2 | 3
export type TaskConfigurationIdTypeWithTaskAdder = TaskConfigurationIdType | 4

interface IItemOption {
  name: string
  value: string | number
}

interface ITaskConfigurationOptions {
  id: TaskConfigurationIdType
  title: unknown
  hasInput: boolean
  isSelected: boolean
  options: IItemOption[]
}

export const TasksConfigurationOptions = atom<ITaskConfigurationOptions[]>([
  {
    id: 0,
    title: 'Name of the task',
    hasInput: true,
    isSelected: false,
    options: [
      {
        name: 'Training task',
        value: 'Training task',
      },
    ],
  },
  { id: 1, title: 'Description', hasInput: true, isSelected: false, options: [] },
  {
    id: 2,
    title: 'Time for each task',
    hasInput: false,
    isSelected: false,
    options: [
      {
        name: '10 minutes',
        value: 10,
      },
      {
        name: '20 minutes',
        value: 20,
      },
      {
        name: '30 minutes',
        value: 30,
      },
      {
        name: '50 minutes',
        value: 50,
      },
      {
        name: '1 hour',
        value: 60,
      },
      {
        name: '1:20 hour',
        value: 80,
      },
      {
        name: '1:30 hour',
        value: 90,
      },
    ],
  },
  {
    id: 3,
    title: 'Rest time between tasks',
    hasInput: false,
    isSelected: false,
    options: [
      {
        name: '5 minutes',
        value: 5,
      },
      {
        name: '10 minutes',
        value: 10,
      },
      {
        name: '15 minutes',
        value: 515,
      },
      {
        name: '20 minutes',
        value: 20,
      },
      {
        name: '30 minutes',
        value: 30,
      },
      {
        name: '60 minutes',
        value: 60,
      },
    ],
  },
])

interface ITaskSelectedOptions {
  selected: TaskConfigurationIdTypeWithTaskAdder | null
}

// I can't understand this generic. 2nd arg stands for what? It works only when 'any' || UPDATE: maybe it works like this
export const TaskSelectedOptions = atom<ITaskSelectedOptions, [TaskConfigurationIdTypeWithTaskAdder], void>(
  {
    selected: null,
  },
  (get, set, update: TaskConfigurationIdTypeWithTaskAdder) => {
    const selectedItemId = update
    const newConfigurationAtomRelatedOnNewSelectedItemId = get(TasksConfigurationOptions).map(task => ({
      ...task,
      isSelected: task.id === selectedItemId,
    }))
    set(TaskSelectedOptions, { selected: selectedItemId })
    set(TasksConfigurationOptions, newConfigurationAtomRelatedOnNewSelectedItemId)
  }
)
