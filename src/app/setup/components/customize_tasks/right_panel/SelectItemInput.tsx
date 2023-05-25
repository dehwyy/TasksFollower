import { Input } from '@chakra-ui/input'
import { useAtom, useAtomValue } from 'jotai'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'

interface IProps {
  uid: TaskUid
}

const SelectItemInput = ({ uid }: IProps) => {
  const [{ inputValue }, setInputValue] = useAtom(TaskOptionValue[uid])
  return (
    <div
      className={`${
        (inputValue as string).length && '!bg-pinkPale hover:!bg-pinkPaleLighter !border-violetBorderPale'
      } block-item-hover !border-0 !border-b-2 cursor-pointer select-none text-xl text-white w-full px-10 py-5 text-center  transition-all`}>
      <div>
        <Input
          tabIndex={-1}
          value={inputValue}
          onChange={e => setInputValue({ value: e.target.value, action: 'input' })}
          variant="flushed"
          focusBorderColor="white"
          className="text-xl shadow-dark"
        />
      </div>
    </div>
  )
}

export default SelectItemInput
