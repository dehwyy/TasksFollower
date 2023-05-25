import { atom, WritableAtom } from 'jotai'

export type TaskValueAtomType = WritableAtom<ISelectedTaskValue, [string | number], void>

class TaskOptionValueClass implements Record<TaskUid, TaskValueAtomType> {
  title: TaskValueAtomType
  description: TaskValueAtomType
  timeRest: TaskValueAtomType
  timeWork: TaskValueAtomType
  difficulty: TaskValueAtomType

  constructor() {
    this.title = this.AtomOptionValueCreator('title')
    this.description = this.AtomOptionValueCreator('description')
    this.timeWork = this.AtomOptionValueCreator('timeWork')
    this.timeRest = this.AtomOptionValueCreator('timeRest')
    this.difficulty = this.AtomOptionValueCreator('difficulty')
  }
  private AtomOptionValueCreator(taskUid: TaskUid): TaskValueAtomType {
    return atom<ISelectedTaskValue, [string], void>(
      {
        uid: taskUid,
        value: '',
      },
      (get, set, value) => {
        const previousState = get(this[taskUid]).value
        set(this[taskUid], { uid: taskUid, value: previousState === value ? '' : value })
        // empty brackets cuz input show False value as "False" xd
      }
    )
  }
}
export const TaskOptionValue = new TaskOptionValueClass()
