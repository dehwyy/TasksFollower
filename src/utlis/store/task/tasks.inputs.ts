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
      (_, set, newValue) => {
        set(this[taskUid], { uid: taskUid, value: newValue })
      }
    )
  }
}
export const TaskOptionValue = new TaskOptionValueClass()
