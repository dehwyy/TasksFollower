import SelectHeading from '@/app/setup/components/SelectHeading'
import OpenableTip from '@/components/global/OpenableTip'
import SelectWrapper from '@/app/setup/components/SelectWrapper'
import SelectItem from '@/app/setup/components/SelectItem'

const Templates = () => {
  return (
    <div>
      <SelectHeading>
        Select the following templates:
        <OpenableTip tip="First number stays for *time per task* and the second is chill time in minutes" />
      </SelectHeading>
      <SelectWrapper>
        {Template.map(layout => (
          <SelectItem title={layout.title} callback={() => {}} key={layout.id} />
        ))}
      </SelectWrapper>
    </div>
  )
}

export default Templates
