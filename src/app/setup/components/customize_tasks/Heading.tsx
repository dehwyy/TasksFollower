interface IProps {
  children: React.ReactNode
}

const Heading = ({ children }: IProps) => {

  return (
    <h3 className="text-xl">
      {children}
    </h3>
  )
}

export default Heading