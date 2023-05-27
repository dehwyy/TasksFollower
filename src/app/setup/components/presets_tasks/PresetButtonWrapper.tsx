interface IProps {
  children: React.ReactNode
}

const PresetButtonWrapper = ({ children }: IProps) => {
  return <div className="grid gap-x-5 gap-y-3 grid-cols-2 sm:grid-cols-1 w-2/3 mx-auto sm:w-full pt-3">{children}</div>
}

export default PresetButtonWrapper
