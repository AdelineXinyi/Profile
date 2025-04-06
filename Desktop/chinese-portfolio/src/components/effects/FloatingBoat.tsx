'use client'

import { motion } from 'framer-motion'
import WaterRipples from './WaterRipples'

export default function FloatingBoat() {
  return (
    <div className="absolute inset-0">
      {/* Layer 1: Static Mountain Background */}
      <div 
        className="absolute inset-0 bg-[url('/images/mountain-bg.png')] bg-cover bg-bottom"
      />
      
      {/* Layer 2: Water Ripples (below boat) */}
      <WaterRipples />
      
      {/* Layer 3: Animated Boat */}
      <motion.div
        className="absolute bottom-[25%] left-1/2 w-40 h-20 bg-[url('/images/boat.png')] bg-contain bg-no-repeat z-10"
        initial={{ y: 0 }}
        animate={{
          y: [-8, 8, -8],
          rotate: [-3, 3, -3],
          x: "-50%"
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transformOrigin: '50% 100%'
        }}
      />
    </div>
  )
}