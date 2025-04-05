// src/components/ui/Navigation.tsx
'use client'

import { motion } from 'framer-motion'

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' }
]

export default function Navigation() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex space-x-8">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleScroll(section.id)}
                className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {section.name}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 top-full block h-0.5 w-full bg-blue-600"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2 }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}