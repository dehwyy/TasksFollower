'use client'

import useAllDataFromStore from '@/utlis/hooks/play_hooks/useAllDataFromStore'

const InfoShortHeading = () => {
  const { title } = useAllDataFromStore()
  return (
    <div className="flex items-center">
      <span className="underline underline-offset-2">{title}</span>
    </div>
  )
}

export default InfoShortHeading
