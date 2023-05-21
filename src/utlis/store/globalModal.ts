import { atom } from 'jotai'

type WindowUid = 'summaryWindow'

interface ModalWindow {
  state: boolean
}

export const globalModalWindowsAtom = atom<Record<WindowUid, ModalWindow>, [{ uid: WindowUid; state: boolean }], void>(
  {
    summaryWindow: {
      state: false,
    },
  },
  (get, set, { uid, state }) => {
    const window = get(globalModalWindowsAtom)
    set(globalModalWindowsAtom, { ...window, [uid]: { state } })
  }
)
