interface IProps {
  children: React.ReactNode
  extraClasses?: string
}

const ButtonEachWrapper = ({ children, extraClasses }: IProps) => {
  return (
    <div className={`${extraClasses} p-2 flex-grow text-center shadowed-text`}>
      <button onClick={() => {}}>{children}</button>
    </div>
  )
}
export default ButtonEachWrapper
