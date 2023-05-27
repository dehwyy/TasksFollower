interface IProps {
  children: React.ReactNode
}

const CustomizeContentWrapper = ({ children }: IProps) => {
  return <article className="grid grid-cols-2 sm:grid-cols-1 mx-auto w-[70%] gap-10 py-5">{children}</article>
}

export default CustomizeContentWrapper
