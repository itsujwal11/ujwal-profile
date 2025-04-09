"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    demoUrl: string
    codeUrl: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
      <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 h-full group">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={200}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white text-sm font-medium">{project.title}</div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.demoUrl}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium hover:from-blue-700 hover:to-violet-700 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.codeUrl}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-800 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Code className="h-3.5 w-3.5" />
                <span>View Code</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}


