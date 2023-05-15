import { atom } from 'jotai'
import { getConstantTemplates } from '@/utlis/constants/TasksConfiguration.const'
import type { ITemplate } from '@/utlis/constants/TasksConfiguration.const'

export const TemplatesAtom = atom<ITemplate[]>(getConstantTemplates())

interface ITime {
  id: number
  time: number
  selected: boolean
}

interface ITask {
  id: number
  title: string
  tags: string[]
  selected: boolean
}
