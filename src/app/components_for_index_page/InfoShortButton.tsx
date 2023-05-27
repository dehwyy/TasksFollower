interface IProps {
  children: React.ReactNode
}

const InfoShortButton = ({ children }: IProps) => {
  return (
    <button className="rounded-xl px-5 py-2 text-pinkPale hover:text-pinkPaleLighter border-pinkPale hover:border-pinkPaleLighter border-2 transition-all duration-300">
      {children}
    </button>
  )
}

export default InfoShortButton
