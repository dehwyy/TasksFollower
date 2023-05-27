import { atom, WritableAtom } from 'jotai'

export type TaskValueAtomType = WritableAtom<ISelectedTaskValue, [string | number], void>

type TaskValueAtomWithInputActionType = 'input' | 'select'
type TaskValueAtomWithInputType = WritableAtom<ISelectedTaskValueWithInput, { value: string; action: TaskValueAtomWithInputActionType }, void>

class TaskOptionValueClass implements Record<TaskUid, TaskValueAtomType | TaskValueAtomWithInputType> {
  title: TaskValueAtomWithInputType
  description: TaskValueAtomWithInputType
  timeRest: TaskValueAtomType
  timeWork: TaskValueAtomType
  difficulty: TaskValueAtomType

  constructor() {
    this.title = this.AtomOptionValueCreatorWithInput('title')
    this.description = this.AtomOptionValueCreatorWithInput('description')
    this.timeWork = this.AtomOptionValueCreator<number>('timeWork', 20)
    this.timeRest = this.AtomOptionValueCreator<number>('timeRest', 5)
    this.difficulty = this.AtomOptionValueCreator<number>('difficulty', 5)
  }
  private AtomOptionValueCreator<T extends string | number = string>(taskUid: TaskUid, defaultValue?: T): TaskValueAtomType {
    return atom<ISelectedTaskValue, [T], void>(
      {
        uid: taskUid,
        value: defaultValue || '',
      },
      (get, set, value) => {
        const previousState = get(this[taskUid]).value
        set(this[taskUid], { uid: taskUid, value: previousState === value ? '' : value })
        // empty brackets cuz input show False value as "False" xd
      }
    )
  }
  private AtomOptionValueCreatorWithInput(taskUid: TaskUid): TaskValueAtomWithInputType {
    return atom<ISelectedTaskValueWithInput, [{ value: string; action: TaskValueAtomWithInputActionType }], void>(
      {
        uid: taskUid,
        value: '',
        inputValue: '',
      },
      (get, set, { value, action }) => {
        if (action === 'input') {
          set(this[taskUid], { ...get(this[taskUid]), inputValue: value, value: '' })
        } else if (action === 'select') {
          set(this[taskUid], { ...get(this[taskUid]), inputValue: '', value })
        } else {
          throw new Error('action not handled (AtomOptionValueCreatorWithInput)')
        }
      }
    )
  }
}
export const TaskOptionValue = new TaskOptionValueClass() as Record<TaskUid, TaskValueAtomWithInputType | TaskValueAtomType>
