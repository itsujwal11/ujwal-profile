"use client"
import { Star, GitFork, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface RepositoryCardProps {
  repository: {
    name: string
    description: string
    language: string
    languageColor: string
    stars: number
    forks: number
    topics: string[]
  }
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Card className="border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] p-4 h-full hover:border-[#2da44e] dark:hover:border-[#3fb950] transition-all hover:shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <Link
            href="#"
            className="text-[#0969da] dark:text-[#58a6ff] hover:underline font-semibold flex items-center gap-1 truncate"
          >
            <span>{repository.name}</span>
            <ExternalLink className="h-3 w-3 flex-shrink-0" />
          </Link>
          <Badge variant="outline" className="border-[#d0d7de] dark:border-[#30363d] text-xs">
            Public
          </Badge>
        </div>

        <p className="text-sm text-[#57606a] dark:text-[#8b949e] mt-2 flex-grow">{repository.description}</p>

        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-1">
            {repository.topics.map((topic) => (
              <Badge
                key={topic}
                className="bg-[#ddf4e4] text-[#2da44e] dark:bg-[#238636]/20 dark:text-[#3fb950] hover:bg-[#ddf4e4] dark:hover:bg-[#238636]/30 transition-colors text-xs"
              >
                {topic}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-[#57606a] dark:text-[#8b949e]">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repository.languageColor }}></span>
              <span>{repository.language}</span>
            </div>

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repository.stars}</span>
            </div>

            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repository.forks}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

