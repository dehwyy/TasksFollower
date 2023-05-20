import CustomizeTasks from '@/app/setup/components/customize_tasks/Component'
import Presets from '@/app/setup/components/presets_tasks/Presets'

const Page = () => {
  return (
    <div className="w-full px-2">
      <div className="max-w-[1000px] mx-auto py-10 flex flex-col gap-y-7">
        <h2 className="text-4xl self-center shadow-red">Build your Day Tasks</h2>
        <Presets />
        <CustomizeTasks />
      </div>
    </div>
  )
}

export default Page
