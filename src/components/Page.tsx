interface IProps {
  children: React.ReactNode
}

const Page = ({ children,  }: IProps) => {
  return (
    <main className="max-w-full h-full flex flex-col relative">
      {children}
    </main>
  )
}

export default Page