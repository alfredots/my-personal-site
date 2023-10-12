import { Button } from 'components/common/Button'
import { GenericSection } from 'components/common/GenericSection'
import { SectionTitle } from 'components/SectionTitle'

export const ProjectsSection = () => {
  return (
    <GenericSection>
      <SectionTitle name="Projects" />
      <p className="py-4 text-lg lg:text-xl">
        My projects are developed with a clear focus on functionality, aiming to
        provide an excellent user experience. Additionally, I prioritize
        delivering good performance, ensuring that the applications are fast,
        responsive, and efficient.
      </p>
      <Button>teste</Button>
    </GenericSection>
  )
}
