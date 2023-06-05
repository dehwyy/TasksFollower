import InfoShort from '@/app/components_for_index_page/InfoShort/Component'
import Task from '@/app/components_for_index_page/Task/Component'

interface IProps {}

const Page = ({}: IProps) => {
  return (
    <div className="px-5 pt-10 w-full h-full flex flex-col items-center">
      <InfoShort />
      <Task />
    </div>
  )
}

export default Page
