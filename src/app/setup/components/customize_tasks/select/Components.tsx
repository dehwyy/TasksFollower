'use client'
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import "./style.css"
import { Roboto } from 'next/font/google'

const SelectFont = Roboto({ subsets: ["latin"], weight: "500"})

interface IProps {
  placeholder: string
  items: {
    id: number
    name: string
    value: string | number
  }[]
}

const Components = ({items, placeholder}: IProps) => {
    return (
      <Select.Root>
        <Select.Trigger className={`${SelectFont.className} inline-flex items-center justify-center gap-2 bg-white rounded-md px-5 shadow-lg shadow-current text-blue-400`}>
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={`${SelectFont.className} bg-blue-600 overflow-hidden rounded-md`}>
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="rounded-md py-2 px-1 bg-white">
              <Select.Group>
                {items.map(item => (
                  <Select.Item value={String(item.value)} key={item.id} className={`SelectItem rounded-md flex items-center justify-between bg-white px-5 text-blue-400`}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator className="SelectItemIndicator">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    )
}

export default Components