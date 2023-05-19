import Image from 'next/image'
import Arrow from '../../../../../../public/icons/pointer_arrow.svg'

interface IProps {
  isEdit: boolean
}

const ArrowPointer = ({ isEdit }: IProps) => {
  return (
    <div className={`${isEdit ? 'opacity-100 visible delay-500' : 'opacity-0 invisble'}  transition-all duration-300 absolute -left-5 -bottom-32`}>
      <Image width="100px" height="100px" className="w-[100px] h-[100px] rotate-[-150deg]" src={Arrow} alt="arrow" />
      <div className="relative -left-10 text-white shadow-dark bg-red-400 rounded-xl px-5 py-1 text-2xl shadow-black-block">Customization</div>
    </div>
  )
}

export default ArrowPointer
