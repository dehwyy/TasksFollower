interface IProps {
  children: React.ReactNode
  callback: () => void
  extraClasses?: string
}

const ButtonEachWrapper = ({ children, callback, extraClasses }: IProps) => {
  return (
    <div className={`${extraClasses} flex-grow text-center shadowed-text relative top-0 active:top-[1px] transition-all`}>
      <button className="shadowed-text p-2 w-full" onClick={callback}>
        {children}
      </button>
    </div>
  )
}
export default ButtonEachWrapper
