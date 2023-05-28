interface IProps {
  children: React.ReactNode
}

const RightBlockContentWrapper = ({ children }: IProps) => {
  return <div className="overflow-hidden rounded-2xl bg-backgroundColorSecond shadow-black-block">{children}</div>
}

export default RightBlockContentWrapper
