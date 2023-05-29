'use client'

import useGetAllDataFromStore from '@/utlis/hooks/play_hooks/useGetAllDataFromStore'

const InfoShortHeading = () => {
  const { title } = useGetAllDataFromStore()
  return (
    <div className="flex items-center">
      <span className="underline underline-offset-2">{title}</span>
    </div>
  )
}

export default InfoShortHeading
