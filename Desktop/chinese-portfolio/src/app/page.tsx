// src/app/page.tsx
import EducationContent from '@/components/sections/EducationContent'
import ProjectsContent from '@/components/sections/ProjectsContent'
import SkillsContent from '@/components/sections/SkillsContent'
import FloatingBoat from '@/components/effects/FloatingBoat' // Renamed from MountainBackground

export default function Home() {
  return (
    <>
      {/* Hero Section with Mountain & Boat */}
      <section id="home" className="snap-start h-screen relative overflow-hidden">
        <FloatingBoat />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Nature-Inspired Developer</h1>
          <p className="text-xl text-white/90 drop-shadow-md">Scroll to explore my journey</p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="snap-start h-screen bg-white flex items-center justify-center">
        <EducationContent />
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start min-h-screen bg-gray-50 flex items-center">
        <ProjectsContent />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start h-screen bg-white flex items-center justify-center">
        <SkillsContent />
      </section>
    </>
  )
}