import { CSSProperties, useState } from 'react'

interface IProps {
  children: React.ReactNode
  styles?: CSSProperties
  noBorder?: boolean
}

const SelectItem = ({ children, noBorder, styles }: IProps) => {
  const [isSelected, setSelected] = useState(false)
  return (
    <div
      onClick={() => setSelected(p => !p)}
      style={styles}
      className={`${!noBorder && 'border-white border-b-[1px]'} ${
        isSelected ? 'bg-green-400' : 'bg-red-400'
      } text-xl text-white w-full px-10 py-5 text-center  transition-all`}>
      <div>{children}</div>
    </div>
  )
}

export default SelectItem
