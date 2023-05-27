import { atom } from 'jotai'

export type WindowUid = 'customizeSummaryWindow' | 'playSummaryWindow'

interface ModalWindow {
  state: boolean
}

export const globalModalWindowsAtom = atom<Record<WindowUid, ModalWindow>, [{ uid: WindowUid; state: boolean }], void>(
  {
    customizeSummaryWindow: {
      state: false,
    },
    playSummaryWindow: {
      state: false,
    },
  },
  (get, set, { uid, state }) => {
    const newState = {} as Record<WindowUid, ModalWindow>
    console.log(get(globalModalWindowsAtom))
    const keys = Object.keys(get(globalModalWindowsAtom)) as WindowUid[]
    for (const key of keys) {
      newState[key] = { state: key === uid ? state : false }
    }
    set(globalModalWindowsAtom, newState)
  }
)
