interface IProps {}

const TaskJobs = () => {
  return (
    <div className="w-full flex flex-col">
      {['1', '2'].map(job => (
        <div key={job} className="w-full text-center">
          <div className="w-full flex flex-col items-center">
            {/* ! if isPassed => shadow-lg else shadow-0*/}
            <div className="select-none border-2 bg-violetLightPaler border-violetLightBorder shadow-lg shadow-violetLight w-7/12 py-2 rounded-lg">
              {job}
            </div>
            <div className="h-[170px] w-[5px] bg-gray-500" />
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="select-none border-2 bg-violetPale border-violetBorderLighter shadow-lg shadow-violetBorderLighter w-1/2 py-2 rounded-lg">
              Rest
            </div>
            <div className="h-[80px] w-[5px] bg-gray-500" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskJobs
