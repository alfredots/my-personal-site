import staemImage from 'assets/portfolio/staem.webp'
import trainerImage from 'assets/portfolio/trainer-tito.webp'

import { GenericButton } from 'components/GenericButton'
import { GenericSection } from 'components/GenericSection'
import { Icon } from 'components/Icon'
import { NextImage } from 'components/NextImage'
import { Title } from 'components/Title'

export const ProjectsSection = () => {
  return (
    <GenericSection>
      <Title isTitleSection>Projects</Title>
      <p className="py-4 text-lg lg:text-xl">
        My projects are developed with a clear focus on functionality, aiming to
        provide an excellent user experience. Additionally, I prioritize
        delivering good performance, ensuring that the applications are fast,
        responsive, and efficient.
      </p>
      <div className="mb-4 flex flex-col items-center gap-4">
        <Title>STAEM</Title>
        <a href="https://staem-challenge.vercel.app/" target="_blank">
          <NextImage
            src={staemImage}
            alt="staem image"
            className="rounded-lg"
          />
        </a>
      </div>
      <div className="mb-4 flex flex-col items-center gap-4">
        <Title>Personal</Title>
        <a href="https://personal-tito-site.vercel.app/" target="_blank">
          <NextImage
            src={trainerImage}
            alt="personal image"
            className="rounded-lg"
          />
        </a>
      </div>
      <GenericButton className="">
        More projects
        <Icon type="arrowRight" size={28} />
      </GenericButton>
    </GenericSection>
  )
}
