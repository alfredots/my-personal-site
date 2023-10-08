import heroImage from '@assets/hero-image.png'

import { GenericSection } from 'components/common/GenericSection'
import { NextImage } from 'components/NextImage'

export const SectionHero = () => {
  return (
    <GenericSection className="flex flex-col items-center justify-center gap-4 md:flex-row-reverse md:justify-between md:gap-0">
      <NextImage src={heroImage} alt="Foto de Alfredo Tito" />
      <h2 className="text-2xl md:w-[472px] md:text-5xl">
        I'm <span className="text-red-500">Alfredo</span> - Full Frontend
        Developer and South Korean culture enthusiast.
      </h2>
    </GenericSection>
  )
}
