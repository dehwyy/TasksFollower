'use client'
interface IProps {
  children: React.ReactNode
}

const JobWork = ({ children }: IProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ! if isPassed => shadow-lg else shadow-0*/}
      <div className="select-none border-2 bg-violetLightPaler border-violetLightBorder shadow-lg shadow-violetLight w-7/12 py-2 rounded-lg">
        {children}
      </div>
      <div className="h-[170px] w-[5px] bg-gray-500" />
    </div>
  )
}

export default JobWork
