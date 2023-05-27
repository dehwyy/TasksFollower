'use client'
import { useCallback, useState } from 'react'
import ExpandingBlockWrapper from '@/app/setup/components/customize_tasks/expanding_block/ExpandingBlockWrapper'
import ExpandingBlockHeading from '@/app/setup/components/customize_tasks/expanding_block/ExpandingBlockHeading'
import ExpandingBlockContentWrapper from '@/app/setup/components/customize_tasks/expanding_block/ExpandingBlockContentWrapper'

interface IProps {
  children: React.ReactNode
}

const Component = ({ children }: IProps) => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpenState = useCallback(() => {
    setOpen(p => !p)
  }, [])
  return (
    <ExpandingBlockWrapper isOpen={isOpen}>
      <ExpandingBlockHeading callback={toggleOpenState} />
      <ExpandingBlockContentWrapper isOpen={isOpen}>{children}</ExpandingBlockContentWrapper>
    </ExpandingBlockWrapper>
  )
}

export default Component
