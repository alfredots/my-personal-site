export const SectionTitle = ({ name = '' }) => {
  return (
    <div className="w-fit">
      <h1 className="text-3xl">{name}</h1>
      <div className="h-1 w-full bg-red-500" />
    </div>
  )
}
