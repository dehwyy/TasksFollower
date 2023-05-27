'use client'
import SummaryModalWindow from '@/components/global/ModalWindow'
import useIsValidCustomizeSummaryWindowAndGetValues from '@/utlis/hooks/customize_hooks/useIsAbleToWatchSummaryModal'
import TaskInfo from '@/components/global/task_info/Component'
import { useMemo } from 'react'
import useSetupPlay from '@/utlis/hooks/play_hooks/useSetupPlay'

const CustomizeModalWindowContent = () => {
  const setupPlay = useSetupPlay()
  const { isValid, jobs, ...props } = useIsValidCustomizeSummaryWindowAndGetValues()
  const jobsOnlyValues = useMemo(() => {
    return jobs.filter(job => job.isSelected).map(job => job.value)
  }, [JSON.stringify(jobs)])
  return (
    <SummaryModalWindow uid="customizeSummaryWindow" deps={[]}>
      <TaskInfo {...props} jobs={jobsOnlyValues} />
      <div className="w-full" onClick={setupPlay}>
        <button className="block w-1/3 mx-auto py-2 rounded-xl block-item-hover">Play</button>
      </div>
    </SummaryModalWindow>
  )
}

export default CustomizeModalWindowContent
