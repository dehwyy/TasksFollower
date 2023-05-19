'use client'
import { Divider } from '@chakra-ui/react'

interface IProps {
  orientation: 'vertical' | 'horizontal'
}

const DividerComponent = ({ orientation }: IProps) => {
  return <Divider orientation={orientation || 'horizontal'} />
}

export default DividerComponent
