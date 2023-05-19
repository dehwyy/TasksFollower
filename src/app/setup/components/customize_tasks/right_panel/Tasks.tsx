import SelectItem from '@/app/setup/components/customize_tasks/right_panel/SelectItem'
import { Input } from '@chakra-ui/input'
import ArrowPointer from '@/app/setup/components/customize_tasks/right_panel/ArrowPointer'

interface IProps {
  isEdit: boolean
}

const Tasks = ({ isEdit }: IProps) => {
  return (
    <section
      onClick={e => e.stopPropagation()}
      className={`${isEdit ? 'translate-x-0   ' : 'translate-x-full'} absolute left-1/2 right-0 bottom-0 transition-all duration-700`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">
          <div className="overflow-hidden rounded-2xl bg-red-400 shadow-black-block">
            <SelectItem noBorder={true}>
              <Input placeholder="Find tasks..." variant="flushed" focusBorderColor="white" className="text-xl shadow-dark" />
            </SelectItem>
            <SelectItem>Math</SelectItem>
            <SelectItem>Japanese</SelectItem>
            <SelectItem>Science</SelectItem>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tasks
