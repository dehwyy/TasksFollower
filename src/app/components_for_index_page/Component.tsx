import ModalWindow from '@/components/global/ModalWindow'
import TaskInfoModalWindowContent from '@/app/components_for_index_page/TaskInfoModalWindowContent'
import InfoShortWrapper from '@/app/components_for_index_page/InfoShortWrapper'
import InfoShortHeading from '@/app/components_for_index_page/InfoShortHeading'
import InfoShortButtonsWrapper from '@/app/components_for_index_page/InfoShortButtonsWrapper'
import InfoShortButton from '@/app/components_for_index_page/InfoShortButton'

const Component = () => {
  return (
    <>
      <InfoShortWrapper>
        <InfoShortHeading />
        <InfoShortButtonsWrapper>
          {[{ title: ' Edit' }].map((btn, i) => (
            <InfoShortButton key={i}>{btn.title}</InfoShortButton>
          ))}
        </InfoShortButtonsWrapper>
        <TaskInfoModalWindowContent />
      </InfoShortWrapper>
    </>
  )
}

export default Component
