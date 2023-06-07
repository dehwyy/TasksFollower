import JobFinal from './JobFinal'
import JobRest from './JobRest'
import JobWork from './JobWork'
import JobWrapper from './JobWrapper'

interface IProps {
  children: React.ReactNode
  isLast: boolean
  workPercentage: number
  restPercentage: number
}

const Component = ({ children, isLast, workPercentage, restPercentage }: IProps) => {
  return (
    <JobWrapper>
      <JobWork percentage={workPercentage}>{children}</JobWork>
      {isLast ? <JobFinal /> : <JobRest percentage={restPercentage} />}
    </JobWrapper>
  )
}

export default Component
