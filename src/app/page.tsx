import InfoShort from '@/app/components_for_index_page/InfoShort'

interface IProps {}

const Page = ({}: IProps) => {
  return (
    <div className="px-5 pt-10 w-full h-full flex justify-center">
      <InfoShort />
    </div>
  )
}

export default Page
