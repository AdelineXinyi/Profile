'use client'

import { motion } from 'framer-motion'
import WaterRipples from './WaterRipples'

export default function FloatingBoat() {
  return (
    <>
      {/* Layer 1: Full Static Mountain Background (bottom layer) */}
      <div 
        className="fixed inset-0 -z-10 bg-[url('/images/mountain-bg.png')]"
        style={{
          backgroundSize: '50% 100%',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Layer 2: Water Ripples (above mountain, below boat) */}
      <WaterRipples />
      
      {/* Layer 3: Floating Boat (top layer) */}
      <motion.div
        className="fixed bottom-[25%] left-1/2 w-40 h-20 bg-[url('/images/boat.png')] bg-contain bg-no-repeat z-10"
        initial={{ y: 0 }}
        animate={{
          y: [-8, 8, -8],
          rotate: [-3, 3, -3],
          x:["-100%", "100%", "-100%"]
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
      />
    </>
  )
}