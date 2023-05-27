interface IProps {
  children: React.ReactNode
}

const PresetsWrapper = ({ children }: IProps) => {
  return (
    <article className="pb-5">
      <h3 className="text-[1.85rem] text-gray-300 text-center">Select one of the following presets</h3>
      <section className="flex flex-col gap-y-7 pt-5 shadow-light">{children}</section>
    </article>
  )
}

export default PresetsWrapper
