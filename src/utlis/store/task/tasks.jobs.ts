import { Atom, atom, PrimitiveAtom, WritableAtom } from 'jotai'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'

type SetterArg =
  | {
      action: 'create'
      newJobValue: string
    }
  | {
      action: 'changeState'
      id: number
    }

class TaskJobsValueClass {
  isCreatingJob: PrimitiveAtom<boolean>
  newJobValue: PrimitiveAtom<string>
  isOpenJobsOption: WritableAtom<boolean, [boolean | undefined], void>
  TaskJobs: WritableAtom<IJob[], SetterArg[], void>
  constructor() {
    this.isCreatingJob = atom(false)
    this.newJobValue = atom('')
    this.isOpenJobsOption = atom<boolean, [boolean | undefined], void>(false, (get, set, arg) => {
      // if arg === false it means that this func was called from tasks.config store and for preventing recursion we should use IF statement
      if (arg !== false) {
        // getting the values cuz in other store (tasks.config) it will change to permanent FALSE value
        const previousIsOpenJobsOption = get(this.isOpenJobsOption)
        //
        set(TaskOptionData.SelectedOption)
        // After use other store to erase existence of other windows, we're setting the opposite value that was saved above
        set(this.isOpenJobsOption, !previousIsOpenJobsOption)
      } else {
        // it means that function was called from other store, and we should just close window
        // because the function that called this function just invoke THIS function, and we have to handle logic for THAt call
        set(this.isOpenJobsOption, false)
      }
    })
    this.TaskJobs = atom<IJob[], SetterArg[], void>(
      [
        {
          id: 0,
          value: 'Math',
          isSelected: false,
          jobTime: null,
        },
        {
          id: 1,
          value: 'Japanese',
          isSelected: false,
          jobTime: null,
        },
        {
          id: 2,
          value: 'Science',
          isSelected: false,
          jobTime: null,
        },
        {
          id: 3,
          value: 'CS2',
          isSelected: false,
          jobTime: null,
        },
      ],
      (get, set, { action, newJobValue, id }) => {
        const taskJobs = get(this.TaskJobs)
        if (action === 'create' && newJobValue) {
          const newId = taskJobs.slice(-1)[0].id + 1 // increased the latest element id
          const newAtomItem: IJob = {
            id: newId,
            jobTime: null, // it stays for custom time
            value: newJobValue,
            isSelected: true,
          }
          set(this.TaskJobs, [newAtomItem, ...taskJobs])
          set(this.newJobValue, '')
        } else if (action === 'changeState') {
          const newTaskJobs = taskJobs.map(job => (job.id === id ? { ...job, isSelected: !job.isSelected } : job))
          set(this.TaskJobs, newTaskJobs)
        } else {
          throw new Error('action is not handled!')
        }
      }
    )
  }
}

export const TaskJobsValue = new TaskJobsValueClass()
