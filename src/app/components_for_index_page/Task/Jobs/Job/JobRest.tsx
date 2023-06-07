interface IProps {
  percentage: number
}

const JobRest = ({ percentage }: IProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="select-none border-2 bg-violetPale text-violetBorderLighter border-violetBorderLighter shadow-lg shadow-violetBorderLighter w-1/2 py-2 rounded-lg">
        Rest
      </div>
      <div className="relative h-[80px] w-[5px] bg-gray-500">
        <div
          style={{ bottom: `${percentage}%` }}
          className="absolute left-0 right-0 top-0 bg-violetLight shadow-violetLight shadow-md transition-all duration-1000 ease-linear"
        />
      </div>
    </div>
  )
}

export default JobRest
