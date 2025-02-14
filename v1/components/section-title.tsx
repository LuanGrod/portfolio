interface SectionTitleProps {
  text: string
}

export default async function SectionTitle({ text }: SectionTitleProps) {
  return (
    <>
      <h1 className="font-montserrat max-sm:text-lg sm:text-xl lg:text-2xl opacity-80 mb-6">
        {text}
      </h1>
    </>
  )
}
