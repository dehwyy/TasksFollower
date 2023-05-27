import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import TasksInfo from '@/components/global/TaskInfo'
import { useLayoutEffect } from 'react'
import { useAtom } from 'jotai'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'

interface IProps {
  children?: React.ReactNode
  deps: unknown[]
  title: string
  description: string
  time: {
    rest: number
    work: number
  }
  jobs: IJob[]
  difficulty: number
}

const SummaryModalWindow = ({ children, deps, difficulty, jobs, title, description, time }: IProps) => {
  const [{ summaryWindow }, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  useLayoutEffect(() => {
    setGlobalModalWindow({ uid: 'summaryWindow', state: false })
  }, deps)
  return (
    <Modal isOpen={summaryWindow.state} onClose={() => setGlobalModalWindow({ uid: 'summaryWindow', state: false })}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent className="bg-backgroundColor border-pinkLight border-2 rounded-xl w-full max-w-[50%] lg:max-w-[75%] sm:max-w-full">
        <ModalCloseButton color="backgroundColor" />
        <ModalBody className="py-5">
          <TasksInfo difficulty={difficulty} jobs={jobs} name={title} time={{ rest: time.rest, work: time.work }} description={description} />
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SummaryModalWindow
