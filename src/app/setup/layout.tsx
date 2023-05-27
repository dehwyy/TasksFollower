interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="w-full px-2">
      <div className="max-w-[1000px] mx-auto py-10 flex flex-col gap-y-7">
        <h2 className="text-4xl self-center text-gray-200">Build your Day Tasks</h2>
        {children}
      </div>
    </div>
  )
}

export default Layout
