interface IProps {
  children: React.ReactNode
}

const CustomizeLeftColumn = ({ children }: IProps) => {
  return <section className="py-10 flex flex-col gap-y-5">{children}</section>
}

export default CustomizeLeftColumn
