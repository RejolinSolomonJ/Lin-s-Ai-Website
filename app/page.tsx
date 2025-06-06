"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Brain,
  Smartphone,
  Globe,
  Lightbulb,
  ArrowRight,
  Check,
  Target,
  Users,
  Zap,
  Github,
  Eye,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-500/20">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Projects", href: "#projects" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Blog", href: "#blog" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        {/* Red/pink glow effect in background */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-radial from-red-600/20 to-transparent"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 relative z-10 pt-24">
          {/* Left Column - Hero Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transforming Ideas
              <br />
              <span className="text-red-500">with Innovative</span>
              <br />
              AI Technology
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              Lin's Infotechs delivers cutting-edge AI solutions, exceptional web/app development, and innovation-driven
              projects that help businesses thrive in the digital age.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 rounded-md flex items-center gap-2"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-red-500/30 text-white hover:bg-red-500/10 px-8 py-6 rounded-md"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Column - AI Assistant */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-gray-800 flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image src="/logo.png" alt="Lin's Assistant" width={40} height={40} className="object-contain" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Lin's Assistant</h3>
                  <p className="text-xs text-gray-400">AI Powered</p>
                </div>
                <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-gray-800/80 rounded-xl p-4 text-gray-300">
                  How can Lin's Infotechs help your business grow with AI technology?
                </div>

                <div className="bg-red-900/30 rounded-xl p-4 text-gray-200">
                  We offer custom AI solutions tailored to your business needs. From predictive analytics to intelligent
                  automation, we can help streamline your operations and drive growth.
                </div>

                <div className="bg-gray-800/80 rounded-xl p-4 text-gray-300">
                  Can you tell me more about your app development services?
                </div>

                <div className="flex mt-6">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="flex-1 bg-gray-800/80 border-0 rounded-l-xl py-3 px-4 text-gray-300 focus:outline-none"
                  />
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 rounded-r-xl">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-red-500">Lin's Infotechs</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We're a team of passionate innovators, developers, and researchers dedicated to creating AI-powered
              solutions that transform how people interact with technology.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gray-900/50 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To democratize access to cutting-edge AI technology and create solutions that enhance human
                  capabilities, particularly for those with accessibility needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading force in accessible AI innovation, creating a world where technology adapts to human
                  needs rather than the other way around.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
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
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-gray-900/30 border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
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

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Our </span>
              <span className="text-red-500">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions powered by AI and driven by innovation
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "AI Solutions",
                description:
                  "Custom AI models, machine learning algorithms, and intelligent automation systems tailored to your business needs.",
                features: ["Custom AI Models", "ML Algorithms", "Automation", "Data Analytics", "Predictive Analytics"],
                pricing: "Starting at $5,000",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Smartphone,
                title: "App Development",
                description:
                  "Native and cross-platform mobile applications with cutting-edge features and seamless user experiences.",
                features: [
                  "iOS & Android",
                  "Cross-platform",
                  "UI/UX Design",
                  "Performance Optimization",
                  "App Store Deployment",
                ],
                pricing: "Starting at $8,000",
                color: "from-red-600 to-red-700",
              },
              {
                icon: Globe,
                title: "Web Development",
                description:
                  "Modern, responsive websites and web applications built with the latest technologies and best practices.",
                features: ["Responsive Design", "Modern Frameworks", "SEO Optimization", "Performance", "E-commerce"],
                pricing: "Starting at $3,000",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Lightbulb,
                title: "Innovation Consulting",
                description:
                  "Strategic guidance for digital transformation, technology adoption, and innovative solution development.",
                features: [
                  "Digital Strategy",
                  "Tech Consulting",
                  "Innovation Labs",
                  "Startup Support",
                  "Market Analysis",
                ],
                pricing: "Starting at $2,000",
                color: "from-red-600 to-red-700",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-semibold">{service.pricing}</span>
                    <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specialty Services */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Specialty Solutions</h3>
            <p className="text-xl text-gray-400">Our flagship products and specialized services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "HoverNav Integration",
                description: "Revolutionary accessibility navigation using eye-tracking and gesture control.",
                icon: "👁️",
              },
              {
                title: "NeuroStim AI",
                description: "Advanced neural stimulation platform for therapeutic applications.",
                icon: "🧠",
              },
              {
                title: "Student Portal Systems",
                description: "AI-powered educational platforms with personalized learning experiences.",
                icon: "🎓",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/20 hover:border-red-500/40 transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Featured </span>
              <span className="text-red-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions that showcase our expertise in AI, accessibility, and cutting-edge technology
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16">
            {[
              {
                title: "HoverNav",
                description:
                  "Revolutionary accessibility navigation system using eye-tracking and gesture control for enhanced user interaction.",
                image: "/placeholder.svg?height=300&width=500",
                tags: ["AI", "Accessibility", "Eye-tracking", "React"],
                stats: { users: "10K+", accuracy: "98%", response: "50ms" },
                features: ["Real-time eye tracking", "Gesture recognition", "Voice commands", "Customizable interface"],
                status: "Live",
                year: "2024",
              },
              {
                title: "NeuroStim AI",
                description:
                  "Advanced neural stimulation platform powered by AI for therapeutic and cognitive enhancement applications.",
                image: "/placeholder.svg?height=300&width=500",
                tags: ["AI", "Neuroscience", "Healthcare", "Machine Learning"],
                stats: { patients: "500+", efficacy: "95%", protocols: "200+" },
                features: [
                  "AI-driven protocols",
                  "Real-time monitoring",
                  "Personalized therapy",
                  "Clinical integration",
                ],
                status: "Beta",
                year: "2024",
              },
              {
                title: "Student Portal",
                description:
                  "Comprehensive educational platform with AI-powered learning analytics and personalized study recommendations.",
                image: "/placeholder.svg?height=300&width=500",
                tags: ["Education", "AI", "Analytics", "Next.js"],
                stats: { students: "5K+", courses: "100+", satisfaction: "92%" },
                features: ["Personalized learning", "Progress tracking", "AI tutoring", "Performance analytics"],
                status: "Live",
                year: "2023",
              },
            ].map((project, index) => (
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
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Client </span>
              <span className="text-red-500">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our clients about how our AI-powered solutions transformed their businesses
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl text-red-400 mb-6">"</div>
                  <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                    "Lin's Infotechs transformed our business with their AI solutions. The HoverNav integration
                    increased our accessibility compliance by 300% and user engagement by 150%. Their team's expertise
                    and dedication to innovation is unmatched."
                  </blockquote>

                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                        ⭐
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SC</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">Sarah Chen</h4>
                    <p className="text-gray-400">CTO, TechStart Inc.</p>
                    <p className="text-red-400 text-sm">HoverNav Integration Project</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Dr. Michael Rodriguez",
                role: "Research Director",
                company: "NeuroHealth Labs",
                content:
                  "The NeuroStim AI platform exceeded our expectations. The precision and adaptability of their AI algorithms have revolutionized our therapeutic protocols.",
                rating: 5,
                project: "NeuroStim AI",
                avatar: "MR",
              },
              {
                name: "Emily Johnson",
                role: "Principal",
                company: "Riverside Academy",
                content:
                  "The Student Portal has completely transformed how we manage education. The AI-powered insights help us personalize learning for each student effectively.",
                rating: 5,
                project: "Student Portal",
                avatar: "EJ",
              },
              {
                name: "David Kim",
                role: "Startup Founder",
                company: "InnovateLab",
                content:
                  "Their innovation consulting helped us pivot our strategy and implement AI solutions that scaled our startup from 10 to 10,000 users in just 6 months.",
                rating: 5,
                project: "Innovation Consulting",
                avatar: "DK",
              },
              {
                name: "Lisa Wang",
                role: "Product Manager",
                company: "HealthTech Solutions",
                content:
                  "Working with Lin's Infotechs was a game-changer. Their AI expertise and attention to accessibility made our platform truly inclusive.",
                rating: 5,
                project: "AI Healthcare Platform",
                avatar: "LW",
              },
              {
                name: "James Thompson",
                role: "CEO",
                company: "EduTech Innovations",
                content:
                  "The team's ability to understand our vision and translate it into cutting-edge technology solutions was remarkable. Highly recommended!",
                rating: 5,
                project: "Educational AI Platform",
                avatar: "JT",
              },
              {
                name: "Maria Garcia",
                role: "CTO",
                company: "AccessFirst",
                content:
                  "Lin's Infotechs doesn't just build software; they create solutions that make a real difference in people's lives. Their accessibility focus is outstanding.",
                rating: 5,
                project: "Accessibility Solutions",
                avatar: "MG",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white">{testimonial.name}</h5>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-red-400">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400 fill-current">
                        ⭐
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{testimonial.content}</p>

                  <div className="text-center">
                    <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">
                      Project: {testimonial.project}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "15K+", label: "Users Impacted" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can transform your business and create your own success story.
            </p>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Latest </span>
              <span className="text-red-500">Insights</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, innovations, and stories from the world of AI and technology development
            </p>
          </div>

          {/* Featured Post */}
          <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/30 transition-all duration-300 overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Featured Article"
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white">Innovation</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Future of AI in Accessibility Technology
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Exploring how artificial intelligence is revolutionizing accessibility solutions and creating more
                  inclusive digital experiences for everyone.
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Lin Chen
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    December 15, 2024
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />8 min read
                  </div>
                </div>

                <Button className="bg-red-500 hover:bg-red-600 text-white w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Building HoverNav: Eye-Tracking Technology for Web Navigation",
                excerpt:
                  "A deep dive into the development process of our revolutionary accessibility navigation system.",
                author: "Sarah Kim",
                date: "December 10, 2024",
                readTime: "6 min read",
                image: "/placeholder.svg?height=200&width=400",
                category: "Product",
              },
              {
                title: "Machine Learning in Healthcare: The NeuroStim AI Story",
                excerpt:
                  "How we're using AI to create personalized neural stimulation protocols for therapeutic applications.",
                author: "Dr. Emily Watson",
                date: "December 5, 2024",
                readTime: "10 min read",
                image: "/placeholder.svg?height=200&width=400",
                category: "Research",
              },
              {
                title: "The Rise of Personalized Learning with AI",
                excerpt:
                  "Exploring how artificial intelligence is transforming education through our Student Portal platform.",
                author: "Marcus Rodriguez",
                date: "November 28, 2024",
                readTime: "7 min read",
                image: "/placeholder.svg?height=200&width=400",
                category: "Innovation",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white text-xs">{post.category}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full text-red-400 hover:bg-red-500/10">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Ready to transform your ideas into intelligent solutions? Let's discuss how we can help bring your vision
              to life with cutting-edge AI and development expertise.
            </p>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <MessageSquare className="h-6 w-6 text-red-500 mr-3" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Company
                        </Label>
                        <Input
                          id="company"
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-white">
                          Service Interest
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:border-red-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                            <SelectItem value="app-development">App Development</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="innovation-consulting">Innovation Consulting</SelectItem>
                            <SelectItem value="hovernav">HoverNav Integration</SelectItem>
                            <SelectItem value="neurostim">NeuroStim AI</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 min-h-[120px] focus:border-red-500"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-red-400" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-400">hello@linsinfotechs.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-red-400" />
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-red-400" />
                      <div>
                        <p className="text-white font-medium">Address</p>
                        <p className="text-gray-400">
                          123 Innovation Drive
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Response</h3>
                  <p className="text-gray-300 mb-4">
                    Need immediate assistance? Our AI assistant is available 24/7 to answer questions and help you get
                    started.
                  </p>
                  <Button variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10">
                    Chat with AI Assistant
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
