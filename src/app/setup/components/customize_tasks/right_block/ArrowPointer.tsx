import Image from 'next/image'
import Arrow from '../../../../../../public/icons/pointer_arrow.svg'

interface IProps {
  isOpen: boolean
}

const ArrowPointer = ({ isOpen }: IProps) => {
  return (
    <div className={`${isOpen ? 'opacity-100 visible delay-500' : 'opacity-0 invisible'} transition-all duration-500 absolute -right-5 -bottom-32 `}>
      <Image width="100px" height="100px" className="w-[100px] h-[100px] rotate-[150deg]" src={Arrow} alt="arrow" />
      <div className="relative right-5 text-pinkLight block-item !bg-transparent !border-4 rounded-xl px-8 py-2 text-2xl shadow-black-block">
        Your variant
      </div>
    </div>
  )
}

export default ArrowPointer
