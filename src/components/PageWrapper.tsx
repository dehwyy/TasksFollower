interface IProps {
  children: React.ReactNode
}

const PageWrapper = ({ children }: IProps) => {
  return (
    <div className="w-[800px] mx-auto">
      <div>{children}</div>
    </div>
  )
}

export default PageWrapper