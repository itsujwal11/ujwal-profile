"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  BookOpen,
  Users,
  Package,
  Calendar,
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillBadge } from "@/components/skill-badge"
import { ProjectCard } from "@/components/project-card"
import { SkillsMarquee } from "@/components/skills-marquee"
import { CursorParticles } from "@/components/cursor-particles"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const frontendSkills = ["HTML", "CSS", "JavaScript", "React"]
  const backendSkills = ["PHP", "Java", "C#", "C", "Python"]
  const databaseSkills = ["MySQL"]
  const allSkills = [
    "MySQL",
    "PHP",
    "HTML",
    "CSS",
    "Java",
    "JavaScript",
    "C#",
    "C",
    "React",
    "Python",
  ]

  const projects = [
    {
      title: "Project Management App",
      description: "A full-stack project management application with real-time updates and team collaboration features",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "PHP", "MySQL"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "E-commerce Platform",
      description: "Scalable e-commerce solution with payment processing, inventory management, and analytics",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "JavaScript", "PHP"],
      demoUrl: "#",
      codeUrl: "#",
    }
  ]

  const experiences = [
    {
      title: "Junior Developer",
      company: "WebTech Startup",
      period: "2023 - 2024",
      description:
        "Assisted in the development of web applications using HTML, CSS, JavaScript, and PHP. Participated in code reviews and implemented UI improvements based on user feedback.",
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <CursorParticles />
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-semibold text-lg flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2D5C] to-[#00D4FF] dark:from-[#6B2D5C] dark:to-[#00D4FF]">
                Ujwal Shrestha
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection(aboutRef)} className="text-sm relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(projectsRef)} className="text-sm relative group">
              <span>Projects</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(skillsRef)} className="text-sm relative group">
              <span>Skills</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(experienceRef)} className="text-sm relative group">
              <span>Experience</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="text-sm relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden md:inline-flex border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>

            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-950 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <Link href="/" className="font-semibold text-lg flex items-center gap-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                    Ujwal Shrestha
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <div className="flex-1 overflow-auto p-4">
                <nav className="flex flex-col gap-4">
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <span>About</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection(projectsRef)}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <span>Projects</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection(skillsRef)}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <span>Skills</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection(experienceRef)}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <span>Experience</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <span>Contact</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </nav>
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  variant="outline"
                  className="w-full justify-start gap-2 border-gray-200 dark:border-gray-800"
                >
                  {mounted && theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="" type="video/mp4"  />
            <source src="" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <div className="relative z-20 container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                  Software Engineer
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="premium-sparkle-wrapper">
                    <span>
                      <span>
                        <span>
                          <span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7EB] to-[#c18cf0] dark:from-[#00B7EB] dark:to-[#8B00FF]">
                              Ujwal Shrestha
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="text-xl text-white max-w-md leading-relaxed">
                  Crafting elegant digital experiences with modern technologies. I specialize in building efficient,
                  scalable, and user-friendly applications that solve real-world problems and deliver exceptional user
                  experiences.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <Link href="#contact" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>Get in touch</span>
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <Link href="#projects" className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span>View projects</span>
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 flex justify-center lg:justify-end"
              >
                <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] glow-border shine-container">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 relative z-10 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar className="w-full h-full bg-gray-100 dark:bg-gray-900">
                      <AvatarImage src="/ujwalprofile.jpg" alt="Ujwal Shrestha" />
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-4xl">
                        US
                      </AvatarFallback>
                    </Avatar>
                    <div className="shine-overlay"></div>
                    <div className="sparkle sparkle-top-left"></div>
                    <div className="sparkle sparkle-top-right"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-violet-600/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white text-center p-4 flex flex-col items-center justify-center h-full w-full"
                      >
                        <p className="text-xl font-bold">Ujwal Shrestha</p>
                        <p className="text-sm">Software Engineer</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Badge with higher z-index and adjusted positioning */}
                  <motion.div
                    className="absolute bottom-[-40px] right-[-40px] bg-white dark:bg-gray-950 rounded-full p-2 thin-white-border shadow-md z-[60]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white text-xl font-bold">
                      2+
                    </div>
                    <span className="absolute bottom-[-23px] left-[-10px] right-0 text-xs font-medium whitespace-nowrap text-white text-center">
                      Years Experience
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          ref={aboutRef}
          className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-y border-gray-200 dark:border-gray-800 transition-colors"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold">About Me</h2>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2D5C] to-[#00D4FF] dark:from-[#6B2D5C] dark:to-[#00D4FF]">
                    Ujwal Shrestha
                  </span>, a
                  passionate junior level software engineer with expertise in building web applications. I specialize in
                  creating user-friendly solutions that deliver great user experiences.
                </p>

                <p className="leading-relaxed">
                  With a foundation in computer science and some industry experience, I've worked on various
                  projects ranging from small business applications to personal projects. I believe in
                  writing clean, efficient code and continuously learning new technologies.
                </p>

                <p className="leading-relaxed">
                  My technical expertise includes{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">JavaScript</span>,{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">PHP</span>, and{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">MySQL</span>, along with other
                  technologies like HTML, CSS, Java, BlockChain, C#, C, and Python. I'm passionate about creating intuitive user interfaces and functional backend systems.
                </p>

                <p className="leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, working on personal projects,
                  or learning more about software development. I'm eager to grow my skills and contribute to meaningful projects.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I enjoy tackling challenges and finding solutions through creative thinking and
                    analytical approaches.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 8px 10px -6px rgba(124, 58, 237, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Team Player</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I thrive in collaborative environments, valuing open communication and knowledge sharing with
                    colleagues.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Continuous Learner</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm committed to ongoing professional development, constantly exploring new technologies and best
                    practices.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          ref={projectsRef}
          className="py-16 container mx-auto px-4 md:px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>

              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 group"
              >
                <span>View all projects</span>
                <ExternalLink className="h-3 w-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View More Projects
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section
          ref={skillsRef}
          className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-y border-gray-200 dark:border-gray-800 transition-colors"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold">Skills & Technologies</h2>
              </div>

              <div className="mb-8">
                <SkillsMarquee skills={allSkills} />
              </div>

              <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="database">Database</TabsTrigger>
                </TabsList>

                <TabsContent value="frontend" className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <SkillBadge name={skill} />
                      </motion.div>
                    ))}
                  </div>

                  <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I build responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React. I focus on creating clean and efficient UI components.
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="backend" className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <SkillBadge name={skill} />
                      </motion.div>
                    ))}
                  </div>

                  <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I develop server-side applications using PHP, Java, C#, C, and Python, focusing on functionality and performance.
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="database" className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {databaseSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <SkillBadge name={skill} />
                      </motion.div>
                    ))}
                  </div>

                  <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-2">Database</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I work with MySQL to design and manage databases, ensuring efficient data storage and retrieval.
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        <section
          ref={experienceRef}
          className="py-16 container mx-auto px-4 md:px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-violet-600 dark:before:from-blue-400 dark:before:to-violet-400"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 transform -translate-x-1/2"></div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-gray-200 dark:border-gray-800 font-normal">
                        {experience.company}
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{experience.period}</span>
                    </div>
                  </div>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">{experience.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          ref={contactRef}
          className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-t border-gray-200 dark:border-gray-800 transition-colors"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-2 mb-8">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold">Get in Touch</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold">Email Me</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Feel free to reach out with any questions or opportunities.
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="mailto:Ujwolstha712@gmail.com">Ujwolstha712@gmail.com</Link>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 8px 10px -6px rgba(124, 58, 237, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold">Connect on LinkedIn</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Let's connect professionally and expand our network.
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="https://www.linkedin.com/in/ujwal-shrestha-374757199/" target="_blank" rel="noopener noreferrer">
                        View LinkedIn Profile
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 p-6"
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-950 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                      placeholder="Your message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Ujwal Shrestha. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}