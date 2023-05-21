'use client'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import TasksInfo from '@/components/global/TaskInfo'
import { globalModalWindowsAtom } from '@/utlis/store/globalModal'
import { useAtom } from 'jotai'

const SummaryModalWindow = () => {
  const [{ summaryWindow }, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  return (
    <Modal isOpen={summaryWindow.state} onClose={() => setGlobalModalWindow({ uid: 'summaryWindow', state: false })}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent className="text-forShadowBlue shadow-black-block rounded-xl w-full max-w-[50%] lg:max-w-[75%] sm:max-w-full">
        <ModalCloseButton color="black" />
        <ModalBody className="py-5">
          <TasksInfo
            tasks={[
              { id: 1, name: 'Play osu!', isDone: false },
              { id: 2, name: 'Samposuru', isDone: false },
              { id: 3, name: 'Samposuru', isDone: false },
              { id: 4, name: 'Samposuru', isDone: false },
              { id: 5, name: 'Samposuru', isDone: false },
              { id: 6, name: 'Samposuru', isDone: false },
              { id: 7, name: 'Samposuru', isDone: false },
              { id: 8, name: 'Samposuru', isDone: false },
              { id: 10, name: 'Samposuru', isDone: false },
            ]}
            name={'Daily routine'}
            time={{ rest: 20, work: 60 }}
            description="Task as a daily routine shit"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SummaryModalWindow
