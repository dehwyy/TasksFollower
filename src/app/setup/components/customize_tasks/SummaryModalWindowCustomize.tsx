'use client'
import { useMemo } from 'react'
import useIsAbleToWatchSummaryModal from '@/utlis/hooks/customize_hooks/useIsAbleToWatchSummaryModal'
import useSetupPlay from '@/utlis/hooks/play_hooks/useSetupPlay'
import SummaryModalWindow from '@/components/global/SummaryModalWindow'

const SummaryModalWindowCustomize = () => {
  const { title, description, timeWork, timeRest, difficulty, jobs, isAbleToWatch } = useIsAbleToWatchSummaryModal()
  const setupPlay = useSetupPlay()
  const selectedJobs = useMemo(() => {
    return jobs.filter(job => job.isSelected)
  }, [jobs])
  return isAbleToWatch ? (
    <SummaryModalWindow
      deps={[isAbleToWatch]}
      difficulty={difficulty.value as number}
      jobs={selectedJobs}
      title={(title?.value as string) || ''}
      time={{ rest: timeRest.value as number, work: timeWork.value as number }}
      description={(description.value as string) || ''}>
      <div className="w-full" onClick={setupPlay}>
        <button className="block w-1/3 mx-auto py-2 rounded-xl block-item-hover">Play</button>
      </div>
    </SummaryModalWindow>
  ) : (
    <></>
  )
}

export default SummaryModalWindowCustomize
