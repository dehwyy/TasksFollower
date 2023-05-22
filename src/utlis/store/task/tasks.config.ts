import { atom, PrimitiveAtom, WritableAtom } from 'jotai'

class TaskOptionDataClass {
  localTimeout: NodeJS.Timeout | null = null
  StaticData: PrimitiveAtom<ITaskOption[]>
  SelectedOption: WritableAtom<TaskOptionSelectedType, [{ selectedOptionUid: TaskUid | null; timeout: number }], void>
  constructor() {
    this.SelectedOption = atom<TaskOptionSelectedType, [{ selectedOptionUid: TaskUid | null; timeout: number }], void>(
      { selectedOptionUid: null, isOpen: false },
      async (get, set, data) => {
        // getting Uid and Timeout in ms from data
        const { selectedOptionUid, timeout } = data
        // just shortcut
        const selectedOption = get(this.SelectedOption)
        // if selected option is already exists on the screen (prevent re-animation on already visible components)
        if (selectedOptionUid === selectedOption.selectedOptionUid) return
        // otherwise hiding the block if it even exists
        selectedOption.isOpen && set(this.SelectedOption, { ...selectedOption, isOpen: false })
        // clearing previous timeout if it exists
        this.localTimeout && clearTimeout(this.localTimeout)
        // if block exists doing timeout in other case no timeout just microtask (nonsense comparing to timeout ms)
        this.localTimeout = setTimeout(
          () => {
            set(this.SelectedOption, { selectedOptionUid: selectedOptionUid, isOpen: true })
          },
          selectedOption.isOpen ? timeout : 0
        )
      }
    )
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
