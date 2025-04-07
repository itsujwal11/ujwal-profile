"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  // Get color based on skill name
  const getColor = (skill: string) => {
    const colors = {
      JavaScript: { bg: "#f7df1e", text: "#000000", icon: "🟨" },
      TypeScript: { bg: "#3178c6", text: "#ffffff", icon: "🔷" },
      React: { bg: "#61dafb", text: "#000000", icon: "⚛️" },
      "Next.js": { bg: "#000000", text: "#ffffff", icon: "▲" },
      Node: { bg: "#339933", text: "#ffffff", icon: "🟢" },
      "Node.js": { bg: "#339933", text: "#ffffff", icon: "🟢" },
      Python: { bg: "#3572A5", text: "#ffffff", icon: "🐍" },
      Java: { bg: "#b07219", text: "#ffffff", icon: "☕" },
      "C#": { bg: "#178600", text: "#ffffff", icon: "#️⃣" },
      PHP: { bg: "#4F5D95", text: "#ffffff", icon: "🐘" },
      HTML: { bg: "#e34c26", text: "#ffffff", icon: "🌐" },
      CSS: { bg: "#563d7c", text: "#ffffff", icon: "🎨" },
      "Tailwind CSS": { bg: "#38b2ac", text: "#ffffff", icon: "💨" },
      MongoDB: { bg: "#13aa52", text: "#ffffff", icon: "🍃" },
      PostgreSQL: { bg: "#336791", text: "#ffffff", icon: "🐘" },
      MySQL: { bg: "#4479A1", text: "#ffffff", icon: "🐬" },
      Redis: { bg: "#DC382D", text: "#ffffff", icon: "🔴" },
      GraphQL: { bg: "#E10098", text: "#ffffff", icon: "◼️" },
      Docker: { bg: "#2496ED", text: "#ffffff", icon: "🐳" },
      Kubernetes: { bg: "#326CE5", text: "#ffffff", icon: "☸️" },
      AWS: { bg: "#FF9900", text: "#000000", icon: "☁️" },
      Firebase: { bg: "#FFCA28", text: "#000000", icon: "🔥" },
      Git: { bg: "#F05032", text: "#ffffff", icon: "📊" },
      "CI/CD": { bg: "#4A154B", text: "#ffffff", icon: "🔄" },
      Express: { bg: "#000000", text: "#ffffff", icon: "🚂" },
      Django: { bg: "#092E20", text: "#ffffff", icon: "🎸" },
      "Spring Boot": { bg: "#6DB33F", text: "#ffffff", icon: "🍃" },
      Azure: { bg: "#0078D4", text: "#ffffff", icon: "☁️" },
    }

    return colors[skill] || { bg: "#4F46E5", text: "#ffffff", icon: "💻" }
  }

  const { bg, text, icon } = getColor(name)

  return (
    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
      <Badge
        className="px-3 py-1.5 text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
        style={{
          backgroundColor: bg,
          color: text,
          borderColor: "transparent",
        }}
      >
        <span className="text-xs">{icon}</span>
        {name}
      </Badge>
    </motion.div>
  )
}

