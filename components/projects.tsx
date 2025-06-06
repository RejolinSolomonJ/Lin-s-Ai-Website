"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowRight, Eye, Zap } from "lucide-react"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: "HoverNav",
      description:
        "Revolutionary accessibility navigation system using eye-tracking and gesture control for enhanced user interaction.",
      longDescription:
        "HoverNav is an innovative accessibility solution that enables hands-free navigation through advanced eye-tracking technology and gesture recognition. Designed to empower users with mobility challenges, it provides seamless interaction with digital interfaces.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["AI", "Accessibility", "Eye-tracking", "React"],
      stats: { users: "10K+", accuracy: "98%", response: "50ms" },
      features: ["Real-time eye tracking", "Gesture recognition", "Voice commands", "Customizable interface"],
      github: "#",
      demo: "#",
      status: "Live",
    },
    {
      title: "NeuroStim AI",
      description:
        "Advanced neural stimulation platform powered by AI for therapeutic and cognitive enhancement applications.",
      longDescription:
        "NeuroStim AI combines cutting-edge neuroscience with artificial intelligence to create personalized neural stimulation protocols. The platform analyzes brain patterns and delivers targeted stimulation for therapeutic and cognitive enhancement purposes.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["AI", "Neuroscience", "Healthcare", "Machine Learning"],
      stats: { patients: "500+", efficacy: "95%", protocols: "200+" },
      features: ["AI-driven protocols", "Real-time monitoring", "Personalized therapy", "Clinical integration"],
      github: "#",
      demo: "#",
      status: "Beta",
    },
    {
      title: "Student Portal",
      description:
        "Comprehensive educational platform with AI-powered learning analytics and personalized study recommendations.",
      longDescription:
        "An intelligent student management system that leverages AI to provide personalized learning experiences, track academic progress, and offer data-driven insights for both students and educators.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Education", "AI", "Analytics", "Next.js"],
      stats: { students: "5K+", courses: "100+", satisfaction: "92%" },
      features: ["Personalized learning", "Progress tracking", "AI tutoring", "Performance analytics"],
      github: "#",
      demo: "#",
      status: "Live",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that showcase our expertise in AI, accessibility, and cutting-edge technology
          </p>
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Project Cards */}
          <div className="lg:col-span-1 space-y-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? "bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/50 scale-105"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardDescription className="text-sm text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 h-full">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{projects[selectedProject].title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{projects[selectedProject].longDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(projects[selectedProject].stats).map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[selectedProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Zap className="h-4 w-4 text-purple-400 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* All Projects CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
