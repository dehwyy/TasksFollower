import { atom } from 'jotai'
import { ITasksAtom } from '@/utlis/store/tasks.types'



export const tasksAtom = atom<ITasksAtom[]>([
  {id: 1, name: "Make up room", order: 1},
  {id: 2, name: "Repair old phone", order: 2},
  {id: 3, name: "Write essay about 'sekai to sensou'", order: 3},
  {id: 4, name: "Pass school's exams", order: 4}
])

export const sortedTasksAtom = atom((get) => get(tasksAtom).sort((a, b) => a.order - b.order))