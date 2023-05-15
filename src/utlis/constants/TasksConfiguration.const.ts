export interface ITemplate {
  id: number
  title: string
  values: [number, number]
  selected: boolean
}

export const getConstantTemplates: () => ITemplate[] = () => [
  { id: 1, title: '50 / 10', values: [50, 10], selected: false },
  { id: 2, title: '120 / 30', values: [120, 30], selected: false },
  { id: 3, title: '30 / 5', values: [30, 5], selected: false },
  { id: 4, title: '90 / 20', values: [90, 20], selected: false },
  { id: 5, title: '180 / 60', values: [120, 60], selected: false },
]

export interface ITime {
  id: number
  time: number
  selected: boolean
}

export const getConstantRepeatTimes: () => ITime[] = () => [
  { id: 1, time: 1, selected: false },
  { id: 2, time: 2, selected: false },
  { id: 3, time: 3, selected: false },
  { id: 4, time: 4, selected: false },
  { id: 5, time: 5, selected: false },
  { id: 6, time: 6, selected: false },
]

export interface ITask {
  id: number
  title: string
  tags: string[]
  selected: boolean
}

export const getConstantTasks: () => ITask[] = () -> [
  { id: 1, title: 'Complete math lesson', tags: ['school', 'math'], selected: false },
  { id: 2, title: 'Complete japanese lesson', tags: ['study', 'language', 'japan', 'japanese'], selected: false },
  { id: 3, title: 'Make up room', tags: ['home', 'room', 'gigachad'], selected: false },
  { id: 4, title: 'To code some time', tags: ['code', 'cpp', 'ts', 'typescript', 'py', 'python', 'js'], selected: false  },
]
