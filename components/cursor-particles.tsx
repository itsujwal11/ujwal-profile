"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  decreaseRate: number
}

export function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particles array
    const particles: Particle[] = []

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let lastX = 0
    let lastY = 0

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Create particles when mouse moves
      const movementX = Math.abs(mouseX - lastX)
      const movementY = Math.abs(mouseY - lastY)

      // Only create particles if mouse has moved significantly
      if (movementX > 3 || movementY > 3) {
        // Create more particles for faster movement
        const particleCount = Math.min(Math.floor((movementX + movementY) / 10), 3)

        for (let i = 0; i < particleCount; i++) {
          createParticle(mouseX, mouseY)
        }

        lastX = mouseX
        lastY = mouseY
      }
    }

    // Create a particle
    const createParticle = (x: number, y: number) => {
      // Blue/purple color palette
      const colors = [
        "#3b82f6", // blue-500
        "#4f46e5", // indigo-600
        "#6366f1", // indigo-500
        "#8b5cf6", // violet-500
        "#a78bfa", // violet-400
      ]

      const particle: Particle = {
        x,
        y,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decreaseRate: Math.random() * 0.02 + 0.01,
      }

      particles.push(particle)
    }

    // Update particles
    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.speedX
        p.y += p.speedY
        p.alpha -= p.decreaseRate

        // Remove faded particles
        if (p.alpha <= 0) {
          particles.splice(i, 1)
          i--
          continue
        }

        // Draw particle
        if (ctx) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle =
            p.color +
            Math.floor(p.alpha * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.fill()
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      updateParticles()
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ opacity: 0.7 }} />
}

