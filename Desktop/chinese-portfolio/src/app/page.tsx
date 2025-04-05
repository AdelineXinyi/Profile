// src/app/page.tsx
import EducationContent from '@/components/sections/EducationContent'
import ProjectsContent from '@/components/sections/ProjectsContent'
import SkillsContent from '@/components/sections/SkillsContent'
import MountainBackground from '@/components/effects/MountainBackground'

export default function Home() {
  return (
    <>
      <section id="home" className="snap-start h-screen flex items-center justify-center relative">
        <MountainBackground />
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Nature-Inspired Developer</h1>
          <p className="text-xl">Scroll to explore my journey</p>
        </div>
      </section>

      <section id="education" className="snap-start h-screen bg-white flex items-center justify-center">
        <EducationContent />
      </section>

      <section id="projects" className="snap-start min-h-screen bg-gray-50 flex items-center">
        <ProjectsContent />
      </section>

      <section id="skills" className="snap-start h-screen bg-white flex items-center justify-center">
        <SkillsContent />
      </section>
    </>
  )
}

