import { atom, PrimitiveAtom, WritableAtom } from 'jotai'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'

type SetterArg = {
  selectedOptionUid: TaskUid | null
  timeout: number
}

class TaskOptionDataClass {
  localTimeout: NodeJS.Timeout | null = null
  StaticData: PrimitiveAtom<ITaskOption[]>
  SelectedOption: WritableAtom<TaskOptionSelectedType, [SetterArg] | [], void>
  constructor() {
    this.SelectedOption = atom<TaskOptionSelectedType, [SetterArg] | [], void>({ selectedOptionUid: null, isOpen: false }, async (get, set, data) => {
      this.localTimeout && clearTimeout(this.localTimeout)
      // getting previous values to prevent link-type issues
      const { selectedOptionUid: previousSelectedOptionUid, isOpen: previousIsOpen } = get(this.SelectedOption)
      // on every click we should close the potential option-window
      set(this.SelectedOption, { selectedOptionUid: previousSelectedOptionUid, isOpen: false })
      // disabling another window - jobOption || acts as
      set(TaskJobsValue.isOpenJobsOption, false)
      // if the previous value equals the value from the PotentialArgs (it could be undefined if it has come from tasks.job Store
      if (previousSelectedOptionUid === data?.selectedOptionUid) {
        // just changing the state to opposite state (ex: true => false）and the leaving from the function
        set(this.SelectedOption, { selectedOptionUid: previousSelectedOptionUid, isOpen: !previousIsOpen })
        return
        // if data  is not exists it means that this func was called from the tasks.job store so just leaving the func
      } else if (!data) {
        return
      }
      // else it means that does exist and the event was called from the component
      const { selectedOptionUid, timeout } = data
      // the SelectItem could be either open or close - it doesn't make any sense (NOW!!! soon FIX!!) shouldn't have timeout when already closed
      this.localTimeout = setTimeout(() => {
        set(this.SelectedOption, { selectedOptionUid, isOpen: true })
      }, timeout || 0)
    })
    this.StaticData = atom<ITaskOption[]>([
      {
        id: 0,
        uid: 'title',
        title: "Task's name",
        hasInput: true,
        values: [
          {
            title: 'Training task',
            value: 'training',
          },
          {
            title: 'Monk mode task',
            value: 'monk',
          },
        ],
      },
      {
        id: 1,
        uid: 'description',
        title: 'Description',
        hasInput: true,
        values: [],
      },
      {
        id: 2,
        uid: 'timeWork',
        title: 'Time for each task',
        hasInput: false,
        values: [
          {
            title: '10 minutes',
            value: 10,
          },
          {
            title: '20 minutes',
            value: 20,
          },
          {
            title: '50 minutes',
            value: 50,
          },
        ],
      },
      {
        id: 3,
        uid: 'timeRest',
        title: 'Rest time between task',
        hasInput: false,
        values: [
          {
            title: '5 minutes',
            value: 5,
          },
          {
            title: '10 minutes',
            value: 10,
          },
          {
            title: '15 minutes',
            value: 15,
          },
        ],
      },
      {
        id: 4,
        uid: 'difficulty',
        title: "Task's difficulty",
        hasInput: false,
        values: Array.from(Array(10)).map((_, i) => ({ title: `${i + 1} ${i ? 'stars' : 'star'}`, value: i + 1 })),
      },
    ])
  }
}

export const TaskOptionData = new TaskOptionDataClass()
