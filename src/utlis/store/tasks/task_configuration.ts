import { atom } from 'jotai'

// unique identifier
export type SettingItemType = 'name' | 'description' | 'workTime' | 'restTime' | 'difficulty'
// Indexes that exists in TasksConfigurationOptions' items
export type TaskConfigurationIdType = 0 | 1 | 2 | 3
// input if it exists |  unique id | default SelectedValue is null
export type SelectedValueType = 'input' | TaskConfigurationIdType | null
// 5th element (now) doesn't exist それで type below provide new T for compatibility'
export type TaskConfigurationIdTypeWithTaskAdder = TaskConfigurationIdType | 4

interface IItemOption {
  name: string
  value: string | number
}

interface ITaskConfigurationOptions {
  id: TaskConfigurationIdType
  type: SettingItemType
  title: unknown
  hasInput: boolean
  isSelected: boolean
  options: IItemOption[]
  selectedValue: SelectedValueType // stays for index in array of values
}

export const TasksConfigurationOptions = atom<ITaskConfigurationOptions[], [{ index: TaskConfigurationIdType; newValue: SelectedValueType }], void>(
  [
    {
      id: 0,
      type: 'name',
      title: 'Name of the task',
      hasInput: true,
      isSelected: false,
      selectedValue: null,
      options: [
        {
          name: 'Training task',
          value: 'Training task',
        },
      ],
    },
    { id: 1, type: 'description', title: 'Description', hasInput: true, isSelected: false, selectedValue: null, options: [] },
    {
      id: 2,
      type: 'workTime',
      title: 'Time for each task',
      hasInput: false,
      isSelected: false,
      selectedValue: null,
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
      type: 'restTime',
      title: 'Rest time between tasks',
      hasInput: false,
      isSelected: false,
      selectedValue: null,
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
  ],
  (get, set, { index, newValue }) => {
    // newValue is 'index' of newSelectedItem in array, index is 'index' of PanelIndex in array
    const newTasksConfigurationOptions = get(TasksConfigurationOptions).map(option => ({
      ...option,
      selectedValue: option.id === index ? newValue : option.selectedValue,
    }))
    set(TasksConfigurationOptions, newTasksConfigurationOptions)
  }
)

interface ITaskSelectedOptions {
  selected: TaskConfigurationIdTypeWithTaskAdder | null
}

// I can't understand this generic. 2nd arg stands for what? It works only when 'any' || UPDATE: maybe it works like this
export const TaskSelectedOptions = atom<ITaskSelectedOptions, [TaskConfigurationIdTypeWithTaskAdder], void>(
  {
    selected: null,
  },
  (get, set, selectedItemId: TaskConfigurationIdTypeWithTaskAdder) => {
    const newConfigurationAtomRelatedOnNewSelectedItemId = get(TasksConfigurationOptions).map(task => ({
      ...task,
      isSelected: task.id === selectedItemId,
    }))
    set(TaskSelectedOptions, { selected: selectedItemId })
    set(TasksConfigurationOptions, newConfigurationAtomRelatedOnNewSelectedItemId)
  }
)
