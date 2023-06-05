'use client'
import JobRest from './JobRest'
import JobWork from './JobWork'
import JobWrapper from './JobWrapper'

interface IProps {
  children: React.ReactNode
  isLast: boolean
}

const Component = ({ children, isLast }: IProps) => {
  return (
    <JobWrapper>
      <JobWork>{children}</JobWork>
      <JobRest isLast={isLast} />
    </JobWrapper>
  )
}

export default Component
