type TaskUid = 'title' | 'description' | 'timeWork' | 'timeRest' | 'difficulty'
type JobUid = 'jobs'

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

interface SetterArg {
  selectedOptionUid: TaskUid | null
  timeout: number
}

interface TaskOptionSelectedType {
  selectedOptionUid: TaskUid | null
  isOpen: boolean
}

interface ISelectedTaskValue<T extends string | number = string> {
  uid: TaskUid
  value: T
  inputValue?: string
}

interface IJob {
  id: number
  value: string
  isSelected: boolean
  jobTime: null | number // I should add feature that will allow u to customize the job's time ?? IT IS CUSTOM TIME SO IT SHOULD BE NULL!!
}
