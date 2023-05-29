interface IProps {
  children: React.ReactNode
}

const InfoShortButtonsWrapper = ({ children }: IProps) => {
  return <div className="flex gap-x-5">{children}</div>
}

export default InfoShortButtonsWrapper
