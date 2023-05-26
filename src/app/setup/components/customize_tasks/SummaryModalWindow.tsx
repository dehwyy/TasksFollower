'use client'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import TasksInfo from '@/components/global/TaskInfo'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'
import { useAtom } from 'jotai'
import { useLayoutEffect, useMemo } from 'react'
import isAbleToWatchSummaryModal from '@/utlis/hooks/customize_hooks/isAbleToWatchSummaryModal'

const SummaryModalWindow = () => {
  const [{ summaryWindow }, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  const { title, description, timeWork, timeRest, difficulty, jobs, isAbleToWatch } = isAbleToWatchSummaryModal()
  const selectedJobs = useMemo(() => {
    const newJobs = [] as IJob[]
    jobs.forEach(job => job.isSelected && newJobs.push(job))
    return newJobs
  }, [jobs])
  useLayoutEffect(() => {
    setGlobalModalWindow({ uid: 'summaryWindow', state: false })
  }, [isAbleToWatch])
  return isAbleToWatch ? (
    <Modal isOpen={summaryWindow.state} onClose={() => setGlobalModalWindow({ uid: 'summaryWindow', state: false })}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent className="bg-backgroundColor border-pinkLight border-2 rounded-xl w-full max-w-[50%] lg:max-w-[75%] sm:max-w-full">
        <ModalCloseButton color="backgroundColor" />
        <ModalBody className="py-5">
          <TasksInfo
            difficulty={difficulty.value as number}
            jobs={selectedJobs}
            name={(title?.value as string) || ''}
            time={{ rest: timeRest.value as number, work: timeWork.value as number }}
            description={(description.value as string) || ''}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : (
    <></>
  )
}

export default SummaryModalWindow
