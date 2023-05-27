interface IProps {
  children: React.ReactNode
  isOpen: boolean
}

const ExpandingBlockWrapper = ({ children, isOpen }: IProps) => {
  return (
    <div
      style={{ paddingLeft: 'calc(100vw - 100%)' }}
      className={`${isOpen ? 'bottom-[85%]' : 'bottom-0'} fixed left-0 right-0 flex justify-center transition-all duration-700`}>
      <div className="relative transition-all duration-700 bg-backgroundColor rounded-t-2xl">{children}</div>
    </div>
  )
}

export default ExpandingBlockWrapper
