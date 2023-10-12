import { MetaSeo } from 'layout/MetaSeo'

import { AboutMeSection } from './components/AboutMeSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SectionHero } from './components/SectionHero'

export const HomeView = () => {
  return (
    <>
      <MetaSeo
        title="Alfredo Tito - FrontEnd Developer"
        description="homepage to talk about me"
      />
      <div className="flex w-full flex-col items-center justify-center">
        <SectionHero />
        <AboutMeSection />
        <ProjectsSection />
      </div>
    </>
  )
}
