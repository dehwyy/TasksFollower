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
