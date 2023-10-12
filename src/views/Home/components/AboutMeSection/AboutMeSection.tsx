import aboutMeImage from 'assets/about-me-image.png'
import { useBreakpoint } from 'hooks/useBreakpoint'

import { GenericSection } from 'components/GenericSection'
import { NextImage } from 'components/NextImage'
import { Title } from 'components/Title'

export const AboutMeSection = () => {
  const { isLg } = useBreakpoint()
  return (
    <GenericSection className="flex flex-col gap-4">
      <Title isTitleSection>About Me</Title>
      <div className="flex w-full justify-between gap-8">
        {isLg && (
          <NextImage
            width={476}
            src={aboutMeImage}
            alt="Foto de Alfredo Tito em pé no beco do batman"
          />
        )}
        <div className="flex flex-col gap-4">
          <p className="text-lg lg:text-xl">
            I hold a degree in Computer Science from the Federal University of
            Maranhão, where I began my journey in 2016 at the Telemidia
            laboratory, focused on developing interactive multimedia resources
            for the web. Throughout my academic journey, I delved deeply into
            the field of web development, nurturing my passion for this area
            even further.
          </p>
          <p className="text-lg lg:text-xl">
            Currently, I work as a Mid-level Frontend Developer at Dotz/Noverde,
            where I am responsible for creating the interfaces of loyalty and
            financial solutions products. Additionally, I have the opportunity
            to develop modern applications to meet the needs of our clients,
            providing benefits through our platform.
          </p>
          <p className="text-lg lg:text-xl">
            I have experience in developing projects for various sectors,
            including finance, education, healthcare, and retail. I have worked
            with renowned companies such as Grupo Mateus, UNA/SUS (Open
            University of SUS), SESC, among others, delivering innovative and
            efficient solutions to meet their specific needs.
          </p>
        </div>
      </div>
      <p className="text-lg lg:text-xl">
        I have experience in developing projects for various sectors, including
        finance, education, healthcare, and retail. I have worked with renowned
        companies such as Grupo Mateus, UNA/SUS (Open University of SUS), SESC,
        among others, delivering innovative and efficient solutions to meet
        their specific needs.
      </p>
    </GenericSection>
  )
}
