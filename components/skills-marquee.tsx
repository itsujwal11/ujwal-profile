"use client"
import { SkillBadge } from "./skill-badge"

export interface SkillsMarqueeProps {
  skills: string[]
}

export function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  // Duplicate skills to create a seamless loop
  const allSkills = [...skills, ...skills]

  return (
    <div className="w-full overflow-hidden py-6 bg-gradient-to-r from-blue-50/50 via-indigo-50/50 to-blue-50/50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-blue-950/20 rounded-lg hover-pause">
      <div className="flex animate-marquee whitespace-nowrap">
        {allSkills.map((skill, index) => (
          <div key={`${skill}-${index}`} className="mx-2">
            <SkillBadge name={skill} />
          </div>
        ))}
      </div>
    </div>
  )
}

