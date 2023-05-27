'use client'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import { useCallback, useLayoutEffect, useMemo } from 'react'
import { useAtom } from 'jotai'
import { globalModalWindowsAtom, WindowUid } from '@/utlis/store/globalModal'

interface IProps {
  children: React.ReactNode
  uid: WindowUid
  deps?: unknown[]
}

const SummaryModalWindow = ({ children, uid, deps }: IProps) => {
  const [windows, setGlobalModalWindow] = useAtom(globalModalWindowsAtom)
  const onCloseHandler = useCallback(() => {
    setGlobalModalWindow({ uid, state: false })
  }, [])
  useLayoutEffect(() => {
    setGlobalModalWindow({ uid, state: false })
  }, deps || [])
  return (
    <Modal isOpen={windows[uid].state} onClose={onCloseHandler}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent className="bg-backgroundColor border-pinkLight border-2 rounded-xl w-full max-w-[50%] lg:max-w-[75%] sm:max-w-full">
        <ModalCloseButton color="backgroundColor" />
        <ModalBody className="py-5">{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SummaryModalWindow
