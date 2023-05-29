interface IProps {
  children: React.ReactNode
  callback: () => void
}

const InfoShortButton = ({ children, callback }: IProps) => {
  const onClickHandlerWithStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
    callback()
  }
  return (
    <button
      onClick={onClickHandlerWithStopPropagation}
      className="rounded-xl px-5 py-2 text-pinkPale hover:text-pinkPaleLighter border-pinkPale hover:border-pinkPaleLighter border-2 transition-all duration-300">
      {children}
    </button>
  )
}

export default InfoShortButton
