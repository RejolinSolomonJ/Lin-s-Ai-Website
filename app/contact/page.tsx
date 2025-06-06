"use client"

import type React from "react"
import { useState } from "react"
import { Logo } from "@/components/logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      })
      setFormData({ name: "", email: "", company: "", service: "", message: "" })
    }, 2000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
              className={`transition-colors ${item === "Contact" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
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
              Get In <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your ideas into intelligent solutions? Let's discuss how we can help bring your vision
              to life with cutting-edge AI and development expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
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
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
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
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-white">
                          Service Interest
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
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
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 min-h-[120px] focus:border-red-500"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
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
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-red-400" />
                      <div>
                        <p className="text-white font-medium">Business Hours</p>
                        <p className="text-gray-400">
                          Mon-Fri: 9AM-6PM PST
                          <br />
                          Sat-Sun: By appointment
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

              {/* Project Consultation */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Free Consultation</h3>
                  <p className="text-gray-300 mb-4">
                    Schedule a free 30-minute consultation to discuss your project requirements and explore how our AI
                    solutions can benefit your business.
                  </p>
                  <Button variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Visit Our Office</h3>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
