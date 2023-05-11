interface IProps {
  children: React.ReactNode
}

const Page = ({ children,  }: IProps) => {
  return (
    <main className="flex items-center justify-center min-h-full">
      {children}
    </main>
  )
}

export default Page