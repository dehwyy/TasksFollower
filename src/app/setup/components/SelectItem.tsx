interface IProps {
  title: string
  callback: () => void
}

const SelectItem = ({title, callback}: IProps) => {
    return (
        <div className='hover:scale-110 bg-white w-full rounded-xl cursor-pointer py-1 select-none transition-all '>
          <div className='text-blue-500 text-center' >
            {title}
          </div>
        </div>
    )
}

export default SelectItem