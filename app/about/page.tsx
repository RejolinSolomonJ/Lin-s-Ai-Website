import { Logo } from "@/components/logo"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Target, Users, Zap, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Lin Chen",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Visionary leader with 10+ years in AI and software development. Passionate about creating accessible technology solutions.",
      skills: ["AI Strategy", "Product Vision", "Team Leadership"],
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Technical expert specializing in machine learning and neural networks. Led development of NeuroStim AI platform.",
      skills: ["Machine Learning", "Neural Networks", "System Architecture"],
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Development",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Full-stack developer with expertise in modern web technologies and mobile app development.",
      skills: ["React/Next.js", "Mobile Development", "Cloud Architecture"],
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Research Director",
      image: "/placeholder.svg?height=150&width=150",
      bio: "PhD in Computer Science with focus on accessibility technology and human-computer interaction.",
      skills: ["AI Research", "Accessibility", "HCI"],
    },
  ]

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and technology.",
    },
    {
      icon: Users,
      title: "Accessibility for All",
      description: "Technology should be inclusive and accessible to everyone, regardless of ability.",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Every solution we create is designed to make a meaningful difference.",
    },
    {
      icon: Zap,
      title: "Excellence in Execution",
      description: "We deliver high-quality solutions with attention to detail and performance.",
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
              className={`transition-colors ${item === "About" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
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
              About <span className="text-red-500">Lin's Infotechs</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a team of passionate innovators, developers, and researchers dedicated to creating AI-powered
              solutions that transform how people interact with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gray-900/50 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To democratize access to cutting-edge AI technology and create solutions that enhance human
                  capabilities, particularly for those with accessibility needs. We believe technology should empower
                  everyone, regardless of their physical abilities or technical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading force in accessible AI innovation, creating a world where technology adapts to human
                  needs rather than the other way around. We envision a future where AI-powered solutions seamlessly
                  integrate into daily life, enhancing productivity and quality of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-gray-900/30 border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The brilliant minds behind our innovations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-900/30 border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} />
                    <AvatarFallback className="bg-red-500 text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-red-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs border-red-500/30 text-red-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "15K+", label: "Users Impacted" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "5", label: "Years of Innovation" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help bring your vision to life with innovative AI solutions.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
