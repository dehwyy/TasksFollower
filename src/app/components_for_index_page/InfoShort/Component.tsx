import TaskInfoModalWindowContent from '@/app/components_for_index_page/InfoShort/TaskInfoModalWindowContent'
import InfoShortWrapper from '@/app/components_for_index_page/InfoShort/InfoShortWrapper'
import InfoShortHeading from '@/app/components_for_index_page/InfoShort/InfoShortHeading'
import InfoShortButtonsWrapper from '@/app/components_for_index_page/InfoShort/InfoShortButtonsWrapper'
import InfoShortButtons from '@/app/components_for_index_page/InfoShort/InfoShortButtons.'

const Component = () => {
  return (
    <>
      <InfoShortWrapper>
        <InfoShortHeading />
        <InfoShortButtonsWrapper>
          <InfoShortButtons />
        </InfoShortButtonsWrapper>
        <TaskInfoModalWindowContent />
      </InfoShortWrapper>
    </>
  )
}

export default Component
