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
        <Select.Trigger className={`${SelectFont.className} h-min flex items-center justify-center gap-2 bg-white rounded-md px-5 shadow-lg shadow-current text-blue-400`}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={`${SelectFont.className} overflow-hidden rounded-md`}>
            <Select.ScrollUpButton className="h-[25px] flex items-center justify-center bg-white text-pink-500">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="rounded-md py-2 bg-white w-full !max-h-1/2">
              <Select.Group>
                {items.map(item => (
                  <Select.Item value={String(item.value)} key={item.id} className={`SelectItem rounded-md flex items-center justify-between px-5 text-blue-400`}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator>
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="h-[25px] mt-[-5px] pb-[5px] flex items-center justify-center bg-white text-pink-500">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    )
}

export default Components