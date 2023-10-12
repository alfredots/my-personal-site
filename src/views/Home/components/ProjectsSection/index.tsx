import { useBreakpoint } from 'hooks/useBreakpoint'

// import { GenericButton } from 'components/GenericButton'
import { GenericSection } from 'components/GenericSection'
// import { Icon } from 'components/Icon'
import { Title } from 'components/Title'

import { DesktopPresentation } from './components/DesktopPresentation'
import { MobilePresentation } from './components/MobilePresentation'

export const ProjectsSection = () => {
  const { isMd } = useBreakpoint()

  return (
    <GenericSection>
      <Title isTitleSection>Projects</Title>
      <p className="py-4 text-lg lg:text-xl">
        My projects are developed with a clear focus on functionality, aiming to
        provide an excellent user experience. Additionally, I prioritize
        delivering good performance, ensuring that the applications are fast,
        responsive, and efficient.
      </p>
      {!isMd && <MobilePresentation />}
      {isMd && <DesktopPresentation />}
      {/* <GenericButton className="mx-auto max-w-[515px]">
        More projects
        <Icon type="arrowRight" size={28} />
      </GenericButton> */}
    </GenericSection>
  )
}
