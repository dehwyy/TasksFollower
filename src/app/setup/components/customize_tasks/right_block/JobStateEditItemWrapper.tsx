interface IProps {
  children: React.ReactNode
  hasBorder?: boolean
}

const JobStateEditItemWrapper = ({ children, hasBorder }: IProps) => {
  return (
    <div className={`${hasBorder & '!border-b-2'} !border-0 block-item select-none text-xl text-white w-full px-10 py-5 text-center transition-all`}>
      {children}
    </div>
  )
}

export default JobStateEditItemWrapper
