type TaskUid = 'title' | 'description' | 'timeWork' | 'timeRest' | 'difficulty'
type JobUid = 'jobs'
type DifficultyType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface ITaskOptionItem {
  title: string
  value: string | number
  // if typeof "value" is string => it should be 1 word
  // or words separated by underscore(s)
}

interface ITaskOption {
  id: number
  uid: TaskUid
  title: string
  hasInput: boolean
  values: ITaskOptionItem[]
}

interface TaskOptionSelectedType {
  selectedOptionUid: TaskUid | null
  isOpen: boolean
}

interface ISelectedTaskValue {
  uid: TaskUid
  value: string | number
}
