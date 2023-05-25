'use client'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import TasksInfo from '@/components/global/TaskInfo'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'
import { useAtom, useAtomValue } from 'jotai'
import { TaskOptionValue } from '@/utlis/store/task/tasks.inputs'
import { TaskJobsValue } from '@/utlis/store/task/tasks.jobs'
import { useMemo } from 'react'

const SummaryModalWindow = () => {
  const [{ summaryWindow }, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  const title = useAtomValue(TaskOptionValue.title)
  const description = useAtomValue(TaskOptionValue.description)
  const difficulty = useAtomValue(TaskOptionValue.difficulty)
  const timeWork = useAtomValue(TaskOptionValue.timeWork)
  const timeRest = useAtomValue(TaskOptionValue.timeRest)
  const jobs = useAtomValue(TaskJobsValue.TaskJobs)
  const selectedJobs = useMemo(() => {
    const newJobs = [] as IJob[]
    jobs.forEach(job => job.isSelected && newJobs.push(job))
    return newJobs
  }, [jobs])
  const isAbleToCheck = useMemo(() => {
    return typeof title.value === 'string' && title.value.length && difficulty.value && timeWork.value && timeRest.value
  }, [title.value, difficulty.value, timeRest.value, timeWork.value])
  return isAbleToCheck ? (
    <Modal isOpen={summaryWindow.state} onClose={() => setGlobalModalWindow({ uid: 'summaryWindow', state: false })}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent className="bg-backgroundColor border-pinkLight border-2 rounded-xl w-full max-w-[50%] lg:max-w-[75%] sm:max-w-full">
        <ModalCloseButton color="backgroundColor" />
        <ModalBody className="py-5">
          <TasksInfo
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
