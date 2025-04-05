'use client'

//import { useRef, useEffect } from 'react'
//import { motion } from 'framer-motion'

// src/components/effects/MountainBackground.tsx
export default function MountainBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path 
            d="M0,256 L480,160 L960,256 L1440,128 L1440,320 L0,320 Z" 
            fill="#E5E7EB" 
          />
        </svg>
      </div>
    )
}