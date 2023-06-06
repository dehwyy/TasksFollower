import { WritableAtom } from 'jotai/index'
import { atom } from 'jotai'

export type TaskPlayKeys = JobUid | TaskUid
type TaskPlayValueT = string | number | string[]

type TaskPlayArgsType = {
  uid: TaskPlayKeys
  value: TaskPlayValueT
}

type TaskPlayWriteArgsType = { value: TaskPlayValueT }

type TaskPlayAtom = WritableAtom<TaskPlayArgsType, [TaskPlayWriteArgsType], void>

class TaskPlayDataClass implements Record<TaskPlayKeys, TaskPlayAtom> {
  title: TaskPlayAtom
  description: TaskPlayAtom
  timeWork: TaskPlayAtom
  timeRest: TaskPlayAtom
  difficulty: TaskPlayAtom
  jobs: TaskPlayAtom
  constructor() {
    this.title = this.createAtom('title', 'Tasks Aboba')
    this.description = this.createAtom('description', '')
    this.timeWork = this.createAtom('timeWork', 0)
    this.timeRest = this.createAtom('timeRest', 0)
    this.difficulty = this.createAtom<number>('difficulty', 1)
    this.jobs = this.createAtom('jobs', [])
  }
  private createAtom<T extends TaskPlayValueT = string>(key: TaskPlayKeys, initialValue: T) {
    return atom<TaskPlayArgsType, [TaskPlayWriteArgsType], void>(
      {
        uid: key,
        value: initialValue,
      },
      (get, set, { value }) => {
        set(this[key], { uid: key, value })
      }
    )
  }
}

export const TaskPlayData = new TaskPlayDataClass()

//TODO: refactor this file to better type support
