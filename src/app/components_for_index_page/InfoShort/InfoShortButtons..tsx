'use client'
import InfoShortButton from '@/app/components_for_index_page/InfoShort/InfoShortButton'
import { useCallback } from 'react'
import { useSetAtom } from 'jotai'
import { globalCustomizeTaskIsOpen } from '@/utlis/store/global.store'
import { useRouter } from 'next/navigation'

const InfoShortButtons = () => {
  const setEdit = useSetAtom(globalCustomizeTaskIsOpen)
  const router = useRouter()
  const redirectToEditMode = useCallback(() => {
    setEdit(true)
    router.push('/setup')
  }, [])
  return (
    <>
      {[{ title: ' Edit', callback: redirectToEditMode }].map((btn, i) => (
        <InfoShortButton key={i} callback={btn.callback}>
          {btn.title}
        </InfoShortButton>
      ))}
    </>
  )
}

export default InfoShortButtons
