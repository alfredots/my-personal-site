import { AboutMeSection } from './components/AboutMeSection'
import { SectionHero } from './components/SectionHero'

export const HomeView = () => {
  return (
    <div className="flex w-full max-w-screen-lg flex-col items-center justify-center">
      <SectionHero />
      <AboutMeSection />
    </div>
  )
}
