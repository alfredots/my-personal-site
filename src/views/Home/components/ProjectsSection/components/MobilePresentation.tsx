import staemImage from 'assets/portfolio/staem.webp'
import trainerImage from 'assets/portfolio/trainer-tito.webp'

import { NextImage } from 'components/NextImage'
import { Title } from 'components/Title'

export const MobilePresentation = () => {
  return (
    <>
      <div className="mb-4 flex flex-col items-center gap-4">
        <Title>STAEM</Title>
        <a href="https://staem-challenge.vercel.app/" target="_blank">
          <NextImage
            src={staemImage}
            alt="staem image"
            className="max-w-[640px] rounded-lg"
          />
        </a>
      </div>
      <div className="mb-4 flex flex-col items-center gap-4">
        <Title>Personal</Title>
        <a href="https://personal-tito-site.vercel.app/" target="_blank">
          <NextImage
            src={trainerImage}
            alt="personal image"
            className="max-w-[640px] rounded-lg"
          />
        </a>
      </div>
    </>
  )
}
