'use client'

import JobFinal from './JobFinal'

interface IProps {
  isLast: boolean
}

const JobRest = ({ isLast }: IProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {isLast ? (
        <JobFinal />
      ) : (
        <>
          <div className="select-none border-2 bg-violetPale text-violetBorderLighter border-violetBorderLighter shadow-lg shadow-violetBorderLighter w-1/2 py-2 rounded-lg">
            Rest
          </div>
          <div className="h-[80px] w-[5px] bg-gray-500" />
        </>
      )}
    </div>
  )
}

export default JobRest
