import heroImage from '@assets/hero-image.png'

import { NextImage } from 'components/NextImage'

export const SectionHero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 md:flex-row-reverse md:justify-between md:gap-0 md:px-6 md:py-4">
      <NextImage src={heroImage} alt="Foto de Alfredo Tito" />
      <h2 className="text-2xl md:w-[472px] md:text-5xl">
        I'm <span className="text-red-500">Alfredo</span> - Full Frontend
        Developer and South Korean culture enthusiast.
      </h2>
    </section>
  )
}
