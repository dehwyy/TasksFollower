interface IProps {
  children: React.ReactNode
}

const Page = ({ children }: IProps) => {
  return (
    <main style={{ paddingLeft: 'calc(100vw - 100%)' }} className="max-w-full h-full flex relative lg:w-[95%] mx-auto pt-16 sm:pt-32">
      {children}
    </main>
  )
}

export default Page
