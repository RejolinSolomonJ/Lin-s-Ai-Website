import { Logo } from "@/components/logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowRight, Eye, Zap, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const featuredProjects = [
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
      year: "2024",
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
      year: "2024",
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
      year: "2023",
    },
  ]

  const otherProjects = [
    {
      title: "E-Commerce AI Assistant",
      description: "Smart shopping assistant with personalized recommendations",
      tags: ["AI", "E-commerce", "React"],
      status: "Live",
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Real-time patient data visualization and insights",
      tags: ["Healthcare", "Analytics", "Dashboard"],
      status: "Live",
    },
    {
      title: "Voice-Controlled Smart Home",
      description: "AI-powered home automation with natural language processing",
      tags: ["IoT", "AI", "Voice Recognition"],
      status: "Beta",
    },
    {
      title: "Financial Fraud Detection",
      description: "Machine learning system for real-time fraud prevention",
      tags: ["FinTech", "ML", "Security"],
      status: "Live",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Projects", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`transition-colors ${item === "Projects" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6">Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-red-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Innovative solutions that showcase our expertise in AI, accessibility, and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-xl text-gray-400">Our most impactful and innovative solutions</p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={project.status === "Live" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}
                    >
                      {project.status}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-red-500/30 text-red-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-3 bg-gray-900/50 rounded-lg">
                        <div className="text-xl font-bold text-red-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <Zap className="h-4 w-4 text-red-400 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="bg-red-500 hover:bg-red-600 text-white">
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">More Projects</h2>
            <p className="text-xl text-gray-400">Additional solutions we've built</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                    <Badge
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={
                        project.status === "Live"
                          ? "bg-green-500 text-white text-xs"
                          : "bg-yellow-500 text-black text-xs"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-red-500/30 text-red-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full text-red-400 hover:bg-red-500/10">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your innovative ideas to life with cutting-edge AI and development solutions.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
