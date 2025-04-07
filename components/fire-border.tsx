"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function FireBorder() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const { width, height } = parent.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Fire particles
    const particles: Particle[] = []
    const particleCount = 120 // Increased particle count for more density

    class Particle {
      x: number
      y: number
      size: number
      color: string
      angle: number
      radius: number
      speed: number
      oscillation: number
      oscillationSpeed: number

      constructor(angle: number) {
        this.angle = angle
        this.radius = Math.min(canvas.width, canvas.height) / 2 - 5 // Slightly inside the border
        this.x = canvas.width / 2 + Math.cos(angle) * this.radius
        this.y = canvas.height / 2 + Math.sin(angle) * this.radius
        this.size = Math.random() * 4 + 2

        // Rotation speed (clockwise)
        this.speed = 0.01 + Math.random() * 0.01

        // Add slight oscillation for organic feel
        this.oscillation = Math.random() * 5
        this.oscillationSpeed = 0.05 + Math.random() * 0.05

        // Fire colors - blue gradient
        const colors = [
          "rgba(59, 130, 246, 0.8)", // Blue
          "rgba(79, 70, 229, 0.8)", // Indigo
          "rgba(124, 58, 237, 0.8)", // Violet
          "rgba(139, 92, 246, 0.6)", // Purple
          "rgba(96, 165, 250, 0.7)", // Light blue
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Move particle along the circle (clockwise)
        this.angle += this.speed

        // Calculate position with slight oscillation for organic movement
        const oscillateRadius = this.radius + Math.sin(this.angle * 5) * this.oscillation

        this.x = canvas.width / 2 + Math.cos(this.angle) * oscillateRadius
        this.y = canvas.height / 2 + Math.sin(this.angle) * oscillateRadius
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = this.color
        ctx.shadowBlur = 10
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
      }
    }

    // Initialize particles with evenly distributed angles
    for (let i = 0; i < particleCount; i++) {
      const angle = ((Math.PI * 2) / particleCount) * i
      particles.push(new Particle(angle))
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    />
  )
}

