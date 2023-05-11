interface IProps {
  title: string
  callback: () => void
}

const SelectItem = ({title, callback}: IProps) => {
    return (
        <div className='bg-white w-full rounded-xl cursor-pointer py-1 select-none'>
          <div className='text-blue-500 text-center' >
            {title}
          </div>
        </div>
    )
}

export default SelectItem