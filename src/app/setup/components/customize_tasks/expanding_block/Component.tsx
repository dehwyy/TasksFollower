import ExpandingBlockWrapper from '@/app/setup/components/customize_tasks/expanding_block/ExpandingBlockWrapper'
import ExpandingBlockHeading from '@/app/setup/components/customize_tasks/expanding_block/ExpandingBlockHeading'
import ExpandingBlockContentWrapper from '@/app/setup/components/customize_tasks/expanding_block/ExpandingBlockContentWrapper'

interface IProps {
  children: React.ReactNode
}

const Component = ({ children }: IProps) => {
  return (
    <ExpandingBlockWrapper>
      <ExpandingBlockHeading />
      <ExpandingBlockContentWrapper>{children}</ExpandingBlockContentWrapper>
    </ExpandingBlockWrapper>
  )
}

export default Component
