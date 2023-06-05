interface IProps {
  children: React.ReactNode
}

const JobWrapper = ({ children }: IProps) => {
  return <div className="w-full text-center">{children}</div>
}

export default JobWrapper
