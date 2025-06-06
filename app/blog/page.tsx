import { Logo } from "@/components/logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in Accessibility Technology",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing accessibility solutions and creating more inclusive digital experiences for everyone.",
    author: "Lin Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["AI", "Accessibility", "Technology"],
    category: "Innovation",
  }

  const blogPosts = [
    {
      title: "Building HoverNav: Eye-Tracking Technology for Web Navigation",
      excerpt: "A deep dive into the development process of our revolutionary accessibility navigation system.",
      author: "Sarah Kim",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["HoverNav", "Eye-tracking", "Development"],
      category: "Product",
    },
    {
      title: "Machine Learning in Healthcare: The NeuroStim AI Story",
      excerpt: "How we're using AI to create personalized neural stimulation protocols for therapeutic applications.",
      author: "Dr. Emily Watson",
      date: "December 5, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["NeuroStim", "Healthcare", "AI"],
      category: "Research",
    },
    {
      title: "The Rise of Personalized Learning with AI",
      excerpt: "Exploring how artificial intelligence is transforming education through our Student Portal platform.",
      author: "Marcus Rodriguez",
      date: "November 28, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Education", "AI", "Learning"],
      category: "Innovation",
    },
    {
      title: "Voice Navigation: The Next Frontier in Web Accessibility",
      excerpt: "How voice-controlled interfaces are making the web more accessible for users with mobility challenges.",
      author: "Lin Chen",
      date: "November 20, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Voice", "Accessibility", "UX"],
      category: "Technology",
    },
    {
      title: "Building Scalable AI Solutions: Lessons from the Field",
      excerpt: "Key insights and best practices we've learned while developing enterprise AI applications.",
      author: "Sarah Kim",
      date: "November 15, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["AI", "Enterprise", "Development"],
      category: "Development",
    },
    {
      title: "The Ethics of AI in Healthcare Technology",
      excerpt: "Discussing the important ethical considerations when developing AI-powered healthcare solutions.",
      author: "Dr. Emily Watson",
      date: "November 8, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Ethics", "Healthcare", "AI"],
      category: "Research",
    },
  ]

  const categories = ["All", "Innovation", "Product", "Research", "Technology", "Development"]

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
              className={`transition-colors ${item === "Blog" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
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
              Our <span className="text-red-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights, innovations, and stories from the world of AI and technology development
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Article</h2>
          </div>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white">{featuredPost.category}</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-red-500/30 text-red-400">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="bg-red-500 hover:bg-red-600 text-white w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "border-red-500/30 text-red-400 hover:bg-red-500/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
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
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-red-500/30 text-red-400">
                        {tag}
                      </Badge>
                    ))}
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

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI, technology, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/50 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
