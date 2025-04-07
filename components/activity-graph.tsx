"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function ActivityGraph() {
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

      const { width } = parent.getBoundingClientRect()
      canvas.width = width
      canvas.height = 100
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Generate random activity data
    const generateActivityData = () => {
      const data = []
      for (let i = 0; i < 30; i++) {
        // More activity on weekdays, less on weekends
        const isWeekend = i % 7 === 0 || i % 7 === 6
        const maxValue = isWeekend ? 30 : 100
        data.push(Math.floor(Math.random() * maxValue))
      }
      return data
    }

    const activityData = generateActivityData()

    // Draw graph
    const drawGraph = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const width = canvas.width
      const height = canvas.height
      const barWidth = width / activityData.length
      const maxValue = Math.max(...activityData)

      // Draw grid lines
      ctx.beginPath()
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--border").trim()
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i <= 4; i++) {
        const y = height - (height / 4) * i
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }

      ctx.stroke()

      // Draw bars
      activityData.forEach((value, index) => {
        const barHeight = (value / maxValue) * height * 0.8
        const x = index * barWidth
        const y = height - barHeight

        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, height)
        gradient.addColorStop(0, "#2da44e")
        gradient.addColorStop(1, "#2da44e33")

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth - 2, barHeight)
      })
    }

    drawGraph()

    // Redraw on resize
    window.addEventListener("resize", drawGraph)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", drawGraph)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-full h-[100px] rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  )
}

