"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const featuredTestimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Lin's Infotechs transformed our business with their AI solutions. The HoverNav integration increased our accessibility compliance by 300% and user engagement by 150%. Their team's expertise and dedication to innovation is unmatched.",
      rating: 5,
      project: "HoverNav Integration",
      results: [
        "300% increase in accessibility compliance",
        "150% boost in user engagement",
        "40% reduction in support tickets",
      ],
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Research Director",
      company: "NeuroHealth Labs",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The NeuroStim AI platform exceeded our expectations. The precision and adaptability of their AI algorithms have revolutionized our therapeutic protocols and improved patient outcomes significantly.",
      rating: 5,
      project: "NeuroStim AI",
      results: [
        "95% treatment efficacy rate",
        "50% faster protocol development",
        "200+ personalized protocols created",
      ],
    },
    {
      name: "Emily Johnson",
      role: "Principal",
      company: "Riverside Academy",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The Student Portal has completely transformed how we manage education. The AI-powered insights help us personalize learning for each student, resulting in remarkable improvements in academic performance.",
      rating: 5,
      project: "Student Portal",
      results: [
        "25% improvement in test scores",
        "90% student engagement rate",
        "60% reduction in administrative time",
      ],
    },
  ]

  const allTestimonials = [
    {
      name: "David Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      content:
        "Their innovation consulting helped us pivot our strategy and implement AI solutions that scaled our startup from 10 to 10,000 users in just 6 months.",
      rating: 5,
      project: "Innovation Consulting",
      category: "Consulting",
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "HealthTech Solutions",
      content:
        "Working with Lin's Infotechs was a game-changer. Their AI expertise and attention to accessibility made our platform truly inclusive.",
      rating: 5,
      project: "AI Healthcare Platform",
      category: "Healthcare",
    },
    {
      name: "James Thompson",
      role: "CEO",
      company: "EduTech Innovations",
      content:
        "The team's ability to understand our vision and translate it into cutting-edge technology solutions was remarkable. Highly recommended!",
      rating: 5,
      project: "Educational AI Platform",
      category: "Education",
    },
    {
      name: "Maria Garcia",
      role: "CTO",
      company: "AccessFirst",
      content:
        "Lin's Infotechs doesn't just build software; they create solutions that make a real difference in people's lives. Their accessibility focus is outstanding.",
      rating: 5,
      project: "Accessibility Solutions",
      category: "Accessibility",
    },
    {
      name: "Robert Chen",
      role: "VP of Engineering",
      company: "DataFlow Systems",
      content:
        "The AI analytics platform they built for us processes millions of data points in real-time. The performance and accuracy are exceptional.",
      rating: 5,
      project: "AI Analytics Platform",
      category: "Analytics",
    },
    {
      name: "Amanda Foster",
      role: "Director of Operations",
      company: "SmartRetail Co.",
      content:
        "Their e-commerce AI solution increased our conversion rates by 45% and reduced cart abandonment by 30%. ROI was evident within the first month.",
      rating: 5,
      project: "E-commerce AI",
      category: "E-commerce",
    },
    {
      name: "Michael Park",
      role: "Head of Innovation",
      company: "FinTech Solutions",
      content:
        "The fraud detection system they developed has saved us millions. The AI models are incredibly accurate and adapt to new threats automatically.",
      rating: 5,
      project: "Fraud Detection AI",
      category: "FinTech",
    },
    {
      name: "Jennifer Liu",
      role: "Research Lead",
      company: "BioTech Innovations",
      content:
        "Their machine learning models accelerated our drug discovery process by 60%. The collaboration was seamless and the results exceeded expectations.",
      rating: 5,
      project: "Drug Discovery AI",
      category: "BioTech",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Projects", "Testimonials", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`transition-colors ${item === "Testimonials" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
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
              Client <span className="text-red-500">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover how our AI-powered solutions have transformed businesses across industries and created lasting
              impact for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Success Stories</h2>
            <p className="text-xl text-gray-400">In-depth case studies from our most impactful projects</p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <Quote className="h-12 w-12 text-red-400 mb-6" />

                    <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                      "{featuredTestimonials[currentTestimonial].content}"
                    </blockquote>

                    <div className="flex mb-6">
                      {[...Array(featuredTestimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-2">
                        {featuredTestimonials[currentTestimonial].results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {featuredTestimonials[currentTestimonial].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {featuredTestimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-400">{featuredTestimonials[currentTestimonial].role}</p>
                        <p className="text-red-400 text-sm">{featuredTestimonials[currentTestimonial].company}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                        Project: {featuredTestimonials[currentTestimonial].project}
                      </Badge>
                    </div>
                  </div>

                  {/* Image/Visual */}
                  <div className="relative bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white font-bold text-3xl">
                          {featuredTestimonials[currentTestimonial].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {featuredTestimonials[currentTestimonial].project}
                      </h3>
                      <p className="text-gray-300">{featuredTestimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-red-500/50 text-red-400 hover:bg-red-500/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-red-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-red-500/50 text-red-400 hover:bg-red-500/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Testimonials from across our diverse client portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white">{testimonial.name}</h5>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-red-400">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{testimonial.content}</p>

                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
                      {testimonial.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{testimonial.project}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Our Impact in Numbers</h3>
              <p className="text-gray-400">Real results from real partnerships</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Projects Completed", description: "Successful AI implementations" },
                { number: "98%", label: "Client Satisfaction", description: "Based on post-project surveys" },
                { number: "15K+", label: "Users Impacted", description: "Lives improved through our solutions" },
                { number: "24/7", label: "Support Available", description: "Continuous assistance and monitoring" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied clients and discover how our AI-powered solutions can transform your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10 px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
