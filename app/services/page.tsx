import { Logo } from "@/components/logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Smartphone, Globe, Lightbulb, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
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
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "Performance Optimization", "App Store Deployment"],
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
      features: ["Digital Strategy", "Tech Consulting", "Innovation Labs", "Startup Support", "Market Analysis"],
      pricing: "Starting at $2,000",
      color: "from-red-600 to-red-700",
    },
  ]

  const specialtyServices = [
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
              className={`transition-colors ${item === "Services" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
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
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive technology solutions powered by AI and driven by innovation to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Specialty Solutions</h2>
            <p className="text-xl text-gray-400">Our flagship products and specialized services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/20 hover:border-red-500/40 transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
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

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Process</h2>
            <p className="text-xl text-gray-400">How we bring your vision to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Developing the perfect solution approach" },
              { step: "03", title: "Development", description: "Building with cutting-edge technology" },
              { step: "04", title: "Launch", description: "Deploying and optimizing your solution" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can accelerate your growth and innovation.
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
