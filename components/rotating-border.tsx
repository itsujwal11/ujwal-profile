"use client"
import { motion } from "framer-motion"

export function RotatingBorder() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full rounded-full relative">
        {/* Rotating dashed border */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-500/70 dark:border-indigo-400/70"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

