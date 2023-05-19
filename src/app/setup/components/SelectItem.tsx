interface IProps {
  title: string
  callback: () => void
}

const SelectItem = ({ title, callback }: IProps) => {
  return (
    <div className="hover:scale-110 bg-white w-full rounded-xl cursor-pointer py-1 select-none transition-all shadow-lg shadow-forShadowBlue">
      <div className="text-center text-forShadowBlue">{title}</div>
    </div>
  )
}

export default SelectItem
