interface IProps {
  title: string
  description: string
  difficulty: number
}

const TaskInfoHeading = ({ title, description, difficulty }: IProps) => {
  return (
    <>
      <div className="text-2xl text-pinkLight shadow-dark">
        Plan "<span className="underline undeline-2 underline-offset-2">{title}</span>"
        <div className="text-forShadowYellow text-center">{difficulty}★</div>
      </div>
      <div className="text-gray-200 underline pb-3">
        <i>{description}</i>
      </div>
    </>
  )
}

export default TaskInfoHeading
