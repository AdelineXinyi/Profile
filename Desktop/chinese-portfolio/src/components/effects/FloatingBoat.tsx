'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useRef, useEffect } from 'react'
import WaterRipples from './WaterRipples'

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' }
]

export default function FloatingBoat() {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = useCallback(() => {
    setShowMenu(prev => !prev)
  }, [])

  const handleScroll = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setShowMenu(false)
  }, [])

  // 🔁 Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

  return (
    <>
      {/* Layer 1: Full Static Mountain Background */}
      <div 
        className="fixed inset-0 -z-10 bg-[url('/images/mountain-bg.png')]"
        style={{
          backgroundSize: '100% 100%',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Layer 2: Water Ripples */}
      <WaterRipples />
      
      {/* Layer 3: Floating Boat */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <motion.div
          className="absolute bottom-[10%] left-1/2 w-40 h-20 bg-[url('/images/boat.png')] bg-contain bg-no-repeat cursor-pointer pointer-events-auto"
          initial={{ y: 0 }}
          animate={{
            y: [-8, 8, -8],
            rotate: [-3, 3, -3],
            x: ["-100%", "100%", "-100%"]
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            transformOrigin: '50% 100%'
          }}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          tabIndex={0}
        />
      </div>
      
      {/* Layer 4: Navigation Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            ref={menuRef}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl z-50 p-6 min-w-[200px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleScroll(section.id)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md transition-colors text-gray-800 font-medium text-sm"
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}