import JobStateEditItemWrapper from '@/app/setup/components/customize_tasks/right_block/JobStateEditItemWrapper'
import JobWrapper from '@/app/setup/components/customize_tasks/right_block/JobWrapper'
import JobCreatorWrapper from '@/app/setup/components/customize_tasks/right_block/JobCreatorWrapper'
import JobCreator from '@/app/setup/components/customize_tasks/right_block/JobCreator'
import JobToggleCreateBlock from '@/app/setup/components/customize_tasks/right_block/JobToggleCreateBlock'
import JobFinderInput from '@/app/setup/components/customize_tasks/right_block/JobFinderInput'
import JobSelectItems from '@/app/setup/components/customize_tasks/right_block/JobSelectItems'

const JobComponent = () => {
  return (
    <JobWrapper>
      <JobStateEditItemWrapper>
        <JobFinderInput />
      </JobStateEditItemWrapper>
      <JobStateEditItemWrapper hasBorder={true}>
        <JobToggleCreateBlock />
      </JobStateEditItemWrapper>
      <JobCreatorWrapper>
        <JobCreator />
      </JobCreatorWrapper>
      <JobSelectItems />
    </JobWrapper>
  )
}

export default JobComponent
