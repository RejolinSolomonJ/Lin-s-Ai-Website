"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Lin's Infotechs transformed our business with their AI solutions. The HoverNav integration increased our accessibility compliance by 300% and user engagement by 150%.",
      rating: 5,
      project: "HoverNav Integration",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Research Director",
      company: "NeuroHealth Labs",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The NeuroStim AI platform exceeded our expectations. The precision and adaptability of their AI algorithms have revolutionized our therapeutic protocols.",
      rating: 5,
      project: "NeuroStim AI",
    },
    {
      name: "Emily Johnson",
      role: "Principal, Riverside Academy",
      company: "Riverside Academy",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The Student Portal has completely transformed how we manage education. The AI-powered insights help us personalize learning for each student effectively.",
      rating: 5,
      project: "Student Portal",
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Their innovation consulting helped us pivot our strategy and implement AI solutions that scaled our startup from 10 to 10,000 users in just 6 months.",
      rating: 5,
      project: "Innovation Consulting",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our clients about how our AI-powered solutions transformed their businesses
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-purple-400 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonials[currentTestimonial].image || "/placeholder.svg"} />
                  <AvatarFallback>
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                  <p className="text-purple-400 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Project: {testimonials[currentTestimonial].project}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-purple-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white/5 border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? "ring-2 ring-purple-500/50" : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} />
                    <AvatarFallback className="text-xs">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{testimonial.name}</h5>
                    <p className="text-xs text-gray-400">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 line-clamp-3">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15K+", label: "Users Impacted" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
