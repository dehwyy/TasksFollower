import { Input } from '@chakra-ui/input'
import { useAtom, useAtomValue } from 'jotai'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'

interface IProps {
  uid: TaskUid
}

const SelectItemInput = ({ uid }: IProps) => {
  const [{ value: inputValue }, setInputValue] = useAtom(TaskOptionValue[uid])
  return (
    <div
      className={`${
        (inputValue as string).length ? 'bg-green-400 hover:bg-green-500' : 'bg-red-400 hover:bg-red-500'
      } cursor-pointer select-none text-xl text-white w-full px-10 py-5 text-center  transition-all`}>
      <div>
        <Input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          variant="flushed"
          focusBorderColor="white"
          className="text-xl shadow-dark"
        />
      </div>
    </div>
  )
}

export default SelectItemInput
