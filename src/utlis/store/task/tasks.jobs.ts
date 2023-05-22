import { atom, WritableAtom } from 'jotai'

type SetterArgs = Array<{
  action: 'create' | 'changeState'
  newTaskValue?: string
  id: number
}>

class TaskJobsValueClass {
  TaskJobs: WritableAtom<IJob[], SetterArgs, void>
  constructor() {
    this.TaskJobs = atom<IJob[], SetterArgs, void>(
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
      (get, set, { action, newTaskValue, id }) => {
        const taskJobs = get(this.TaskJobs)
        if (action === 'create' && newTaskValue) {
          const newId = taskJobs.slice(-1)[0].id + 1 // increased the latest element id
          const newAtomItem: IJob = {
            id: newId,
            jobTime: null, // it stays for custom time
            value: newTaskValue,
            isSelected: true,
          }
          set(this.TaskJobs, [...taskJobs, newAtomItem])
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
