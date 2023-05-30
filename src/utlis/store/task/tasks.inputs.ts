import { atom, WritableAtom } from 'jotai'

// possible TaskWithInputAtom actions
type TaskValueAtomInputActionType = 'input' | 'select'
// args for the TaskWithInputAtom
type TaskValueAtomInputArgs = { value: string; action: TaskValueAtomInputActionType }
// args for both TaskWithInput and withoutInput
type TaskValueArgs = number | string | TaskValueAtomInputArgs
// AtomType for both
type TaskValueAtomType<T extends TaskValueArgs> = WritableAtom<ISelectedTaskValue, T, void>

class TaskOptionValueClass implements Record<TaskUid, TaskValueAtomType<TaskValueArgs>> {
  title: TaskValueAtomType<TaskValueAtomInputArgs>
  description: TaskValueAtomType<TaskValueAtomInputArgs>
  timeRest: TaskValueAtomType<number>
  timeWork: TaskValueAtomType<number>
  difficulty: TaskValueAtomType<number>

  constructor() {
    this.title = this.AtomOptionValueCreatorWithInput('title')
    this.description = this.AtomOptionValueCreatorWithInput('description')
    this.timeWork = this.AtomOptionValueCreator<number>('timeWork', 20)
    this.timeRest = this.AtomOptionValueCreator<number>('timeRest', 5)
    this.difficulty = this.AtomOptionValueCreator<number>('difficulty', 5)
  }
  private AtomOptionValueCreator<T extends string | number = string>(taskUid: TaskUid, defaultValue?: T): TaskValueAtomType<T> {
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
  private AtomOptionValueCreatorWithInput(taskUid: TaskUid): TaskValueAtomType<TaskValueAtomInputArgs> {
    return atom<ISelectedTaskValue, [TaskValueAtomInputArgs], void>(
      {
        uid: taskUid,
        value: 'HELLO',
        inputValue: '',
      },
      (get, set, { value, action }) => {
        if (action === 'input') {
          set(this[taskUid], { ...get(this[taskUid]), inputValue: value, value: '' })
        } else if (action === 'select') {
          set(this[taskUid], { ...get(this[taskUid]), inputValue: '', value })
        } else {
        }
      }
    )
  }
}
export const TaskOptionValue = new TaskOptionValueClass()
