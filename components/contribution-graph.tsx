"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ContributionGraph() {
  // Generate random contribution data
  const generateContributions = () => {
    const contributions = []
    const today = new Date()
    const startDate = new Date(today)
    startDate.setDate(today.getDate() - 364)

    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      // Random contribution count (weighted to have more low values)
      let count = 0
      const rand = Math.random()

      if (rand > 0.95) {
        count = Math.floor(Math.random() * 15) + 10 // High activity (10-25)
      } else if (rand > 0.8) {
        count = Math.floor(Math.random() * 10) + 5 // Medium activity (5-15)
      } else if (rand > 0.5) {
        count = Math.floor(Math.random() * 5) + 1 // Low activity (1-5)
      }

      contributions.push({
        date: date.toISOString().split("T")[0],
        count,
      })
    }

    return contributions
  }

  const [contributions] = useState(generateContributions())

  // Group contributions by week
  const weeks = []
  let currentWeek = []

  for (let i = 0; i < contributions.length; i++) {
    const date = new Date(contributions[i].date)
    const dayOfWeek = date.getDay()

    currentWeek.push(contributions[i])

    if (dayOfWeek === 6 || i === contributions.length - 1) {
      // Pad the first week with empty cells
      if (weeks.length === 0 && currentWeek.length < 7) {
        const padding = 7 - currentWeek.length
        for (let j = 0; j < padding; j++) {
          currentWeek.unshift({ date: "", count: 0 })
        }
      }

      weeks.push(currentWeek)
      currentWeek = []
    }
  }

  // Get color based on contribution count
  const getColor = (count: number) => {
    if (count === 0) return "bg-[#ebedf0] dark:bg-[#161b22]"
    if (count < 5) return "bg-[#9be9a8] dark:bg-[#0e4429]"
    if (count < 10) return "bg-[#40c463] dark:bg-[#006d32]"
    if (count < 15) return "bg-[#30a14e] dark:bg-[#26a641]"
    return "bg-[#216e39] dark:bg-[#39d353]"
  }

  // Format date for tooltip
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[700px]">
        <div className="flex text-xs text-[#57606a] dark:text-[#8b949e] mb-2 justify-end gap-[13px]">
          <div>Less</div>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-[#ebedf0] dark:bg-[#161b22]"></div>
            <div className="w-3 h-3 rounded-sm bg-[#9be9a8] dark:bg-[#0e4429]"></div>
            <div className="w-3 h-3 rounded-sm bg-[#40c463] dark:bg-[#006d32]"></div>
            <div className="w-3 h-3 rounded-sm bg-[#30a14e] dark:bg-[#26a641]"></div>
            <div className="w-3 h-3 rounded-sm bg-[#216e39] dark:bg-[#39d353]"></div>
          </div>
          <div>More</div>
        </div>

        <div className="flex">
          <div className="flex flex-col justify-between text-xs text-[#57606a] dark:text-[#8b949e] pr-2 pt-2 h-[100px]">
            <div>Mon</div>
            <div>Wed</div>
            <div>Fri</div>
          </div>

          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <TooltipProvider key={dayIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: weekIndex * 0.01 + dayIndex * 0.01,
                          }}
                          className={`w-3 h-3 rounded-sm ${getColor(day.count)} hover:ring-2 hover:ring-[#bbb] dark:hover:ring-[#555] transition-all`}
                        ></motion.div>
                      </TooltipTrigger>
                      {day.date && (
                        <TooltipContent>
                          <div className="text-xs">
                            <div>{day.count} contributions</div>
                            <div>{formatDate(day.date)}</div>
                          </div>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

