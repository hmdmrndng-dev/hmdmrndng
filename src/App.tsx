import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Education } from "@/components/sections/Education"
import { HeroSection } from "@/components/sections/HeroSection"
import { Projects } from "@/components/sections/Projects"
import { WorkExperience } from "@/components/sections/WorkExperience"

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WorkExperience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
