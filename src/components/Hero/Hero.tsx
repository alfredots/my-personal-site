import { inter } from '@styles/fonts'
import profileImage from 'assets/perfil.png'

import { NextImage } from 'components/NextImage'

export const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 p-4 sm:flex-row-reverse sm:justify-between">
      <NextImage src={profileImage} alt="" className="rounded-2xl" />
      <h1
        className={
          inter.className +
          ' text-center text-2xl text-white sm:text-left sm:text-5xl lg:w-[470px]'
        }
      >
        I'm <span className="text-red-500">Alfredo</span> - Full Frontend
        Developer and South Korean culture enthusiast.
      </h1>
    </section>
  )
}
