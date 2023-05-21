import Image from 'next/image'
import Arrow from '../../../../../../public/icons/pointer_arrow.svg'

interface IProps {
  isSelected: boolean
}

const ArrowPointer = ({ isSelected }: IProps) => {
  return (
    <div
      className={`${isSelected ? 'opacity-100 visible delay-500' : 'opacity-0 invisble'}  transition-all duration-300 absolute -right-5 -bottom-32`}>
      <Image width="100px" height="100px" className="w-[100px] h-[100px] rotate-[150deg]" src={Arrow} alt="arrow" />
      <div className="relative right-5 text-white shadow-dark bg-violet-400 rounded-xl px-5 py-1 text-2xl shadow-black-block">Your variant</div>
    </div>
  )
}

export default ArrowPointer
