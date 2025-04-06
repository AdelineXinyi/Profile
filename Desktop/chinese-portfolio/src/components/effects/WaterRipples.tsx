// components/effects/WaterRipples.tsx
'use client'

export default function WaterRipples() {
  return (
    <div className="absolute bottom-0 w-full h-32 bg-blue-500/10 backdrop-blur-sm">
      <div className="absolute bottom-full w-full h-8 bg-gradient-to-t from-blue-500/20 to-transparent" />
    </div>
  )
}