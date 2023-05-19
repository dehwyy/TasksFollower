'use client'
import { Input } from '@chakra-ui/input'
import SelectItem from '@/app/setup/components/customize_tasks/right_panel/SelectItem'
import ArrowPointer from '@/app/setup/components/customize_tasks/right_panel/ArrowPointer'

interface IProps {
  isEdit: boolean
  order: number
}

const Panel = ({ isEdit, order }: IProps) => {
  return (
    <section
      onClick={e => e.stopPropagation()}
      style={{ top: `${order * 120}px` }}
      className={`${isEdit ? 'translate-x-0   ' : 'translate-x-full'} absolute left-1/2 right-0 bottom-0 transition-all duration-700`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl bg-red-400 shadow-black-block">
            <SelectItem>Task of the year</SelectItem>
            <SelectItem>Improve day</SelectItem>
            <SelectItem>Task</SelectItem>
            <SelectItem noBorder={true}>
              <Input variant="flushed" focusBorderColor="white" className="text-xl shadow-dark" />
            </SelectItem>
          </div>
          {'isNotTasksSelect' && <ArrowPointer isEdit={isEdit} />}
        </div>
      </div>
    </section>
  )
}

export default Panel
