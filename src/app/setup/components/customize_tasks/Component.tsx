import ExpandingBlockFromBottom from '@/app/setup/components/customize_tasks/expanding_block/Component'
import CustomizeSummaryButton from '@/app/setup/components/customize_tasks/CustomizeSummaryButton'
import Panel from '@/app/setup/components/customize_tasks/right_panel/Panel'
import CustomizeTaskOptionJobs from '@/app/setup/components/customize_tasks/CustomizeTaskOptionJobs'
import SelectJobs from '@/app/setup/components/customize_tasks/right_panel/SelectJobs'
import CustomizeTaskOptions from '@/app/setup/components/customize_tasks/CustomizeTaskOptions'
import CustomizeLeftColumn from '@/app/setup/components/customize_tasks/CustomizeLeftColumn'
import CustomizeContentWrapper from '@/app/setup/components/customize_tasks/CustomizeContentWrapper'
import CustomizeModalWindowContent from '@/app/setup/components/customize_tasks/CustomizeModalWindowContent'

const Component = () => {
  return (
    <>
      <ExpandingBlockFromBottom>
        <CustomizeContentWrapper>
          <CustomizeLeftColumn>
            <CustomizeTaskOptions />
            <CustomizeTaskOptionJobs>Tasks Configuration</CustomizeTaskOptionJobs>
            <CustomizeSummaryButton />
          </CustomizeLeftColumn>
          <>
            <Panel />
            <SelectJobs />
          </>
        </CustomizeContentWrapper>
      </ExpandingBlockFromBottom>
      <CustomizeModalWindowContent />
    </>
  )
}

export default Component
