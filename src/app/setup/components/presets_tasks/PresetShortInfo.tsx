interface IProps {
  name: string
  difficulty: number
}

const PresetShortInfo = ({ name, difficulty }: IProps) => {
  return (
    <div>
      <div className="block-item-hover rounded-lg p-3 flex gap-1 items-center justify-center">
        <div>{name}</div>
        <span className="text-gray-400">{' - '}</span>
        <div className="text-forShadowYellow">{difficulty}★</div>
      </div>
    </div>
  )
}

export default PresetShortInfo
