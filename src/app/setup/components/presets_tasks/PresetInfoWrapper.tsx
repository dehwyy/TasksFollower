interface IProps {
  children: React.ReactNode
}

const PresetInfoWrapper = ({ children }: IProps) => {
  return <div className="block-item rounded-lg p-3 col-span-2 lg:col-span-1">{children}</div>
}

export default PresetInfoWrapper
