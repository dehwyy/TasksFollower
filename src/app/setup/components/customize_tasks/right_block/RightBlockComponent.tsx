'use client'
import RightBlockSelectItem from '@/app/setup/components/customize_tasks/right_block/RightBlockSelectItem'
import ArrowPointer from '@/app/setup/components/customize_tasks/right_block/ArrowPointer'
import { useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { TaskOptionData } from '@/utlis/store/task/tasks.config'
import RightBlockSelectItemInput from '@/app/setup/components/customize_tasks/right_block/RightBlockSelectItemInput'
import RightBlockWrapper from '@/app/setup/components/customize_tasks/right_block/RightBlockWrapper'
import RightBlockContentWrapper from '@/app/setup/components/customize_tasks/right_block/RightBlockContentWrapper'

const RightBlockComponent = () => {
  const selectedOption = useAtomValue(TaskOptionData.SelectedOption)
  const AllOptions = useAtomValue(TaskOptionData.StaticData)
  const currentOptionData = useMemo(
    () => AllOptions.find(option => option.uid === selectedOption.selectedOptionUid),
    [selectedOption.selectedOptionUid]
  )
  if (!currentOptionData) return <></>
  const { id, uid, values, hasInput } = currentOptionData
  return (
    <RightBlockWrapper optionId={id} isOpen={selectedOption.isOpen}>
      <RightBlockContentWrapper>
        {values.map(option => (
          <RightBlockSelectItem key={option.value} value={option.value} uid={uid}>
            {option.title}
          </RightBlockSelectItem>
        ))}
        {hasInput ? <RightBlockSelectItemInput uid={uid} /> : <></>}
      </RightBlockContentWrapper>
      {hasInput ? <ArrowPointer isOpen={selectedOption.isOpen} /> : <></>}
    </RightBlockWrapper>
  )
}

export default RightBlockComponent
