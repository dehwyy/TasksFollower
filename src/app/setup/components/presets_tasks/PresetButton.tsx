interface IProps {
  children: React.ReactNode
}

const PresetButton = ({ children }: IProps) => {
  return <div className="block-item-hover !border-violetBorderLighter text-center py-1 rounded-2xl">{children}</div>
}

export default PresetButton
