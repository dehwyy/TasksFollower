interface IProps {
  children: React.ReactNode
}

const PresetSingleWrapper = ({ children }: IProps) => {
  return <div className="grid grid-cols-3 lg:grid-cols-1 gap-x-10 gap-y-3 ">{children}</div>
}

export default PresetSingleWrapper
