interface IProps {
  children: React.ReactNode
  percentage: number
}

const JobWork = ({ children, percentage }: IProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ! if isPassed => shadow-lg else shadow-0*/}
      <div className={` select-none border-2 bg-violetLightPaler border-violetLightBorder shadow-lg shadow-violetLight w-7/12 py-2 rounded-lg`}>
        {children}
      </div>
      <div className="relative h-[170px] w-[5px] bg-gray-500">
        <div
          style={{ bottom: `${percentage}%` }}
          className="absolute left-0 right-0 top-0 bg-violetLight shadow-violetLight shadow-md transition-all duration-1000 ease-linear"
        />
      </div>
    </div>
  )
}

export default JobWork
