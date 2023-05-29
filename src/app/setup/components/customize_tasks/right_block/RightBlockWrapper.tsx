interface IProps {
  children: React.ReactNode
  optionId: number | null
  isOpen: boolean
}

const RightBlockWrapper = ({ children, optionId, isOpen }: IProps) => {
  return (
    <section
      style={{ top: `${optionId * 105 + 40}px` }}
      className={`${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } absolute left-1/2 right-0 transition duration-[500ms] linear`}>
      <div className="flex flex-col py-10">
        <div className="w-3/5 ml-[10%] relative">{children}</div>
      </div>
    </section>
  )
}

export default RightBlockWrapper
