'use client'
import {
  Box,
  Step,
  StepDescription, StepIcon,
  StepIndicator,
  StepIndicatorContent, StepNumber, Stepper,
  StepSeparator, StepStatus,
  StepTitle,
  useSteps
} from '@chakra-ui/react'
import { useWindowSize } from 'usehooks-ts'

const steps = [
  { title: 'Time per task' },
  { title: 'Chill time' },
  { title: 'Tasks' },
]

const CustomStepper = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })
  const { width } = useWindowSize()
  return (
    <Stepper index={activeStep} colorScheme={width > 639 ? "blue" : "pink"} orientation='vertical' className="h-full">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator className='-mt-1 bg-blue-500 sm:bg-pink-500'>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <div className='text-white'>
            <StepTitle>{step.title}</StepTitle>
          </div>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}

export default CustomStepper