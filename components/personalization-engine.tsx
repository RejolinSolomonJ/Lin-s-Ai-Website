"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Target } from "lucide-react"

export function PersonalizationEngine() {
  const [userInterests, setUserInterests] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<string[]>([])
  const [isPersonalizing, setIsPersonalizing] = useState(false)

  const interests = [
    "AI Development",
    "Web Development",
    "Mobile Apps",
    "Machine Learning",
    "Accessibility",
    "Healthcare Tech",
    "Education Tech",
    "Startup Consulting",
  ]

  const serviceRecommendations = {
    "AI Development": ["Custom AI Models", "NeuroStim AI", "AI Consulting"],
    "Web Development": ["Modern Web Apps", "E-commerce Solutions", "PWAs"],
    "Mobile Apps": ["iOS Development", "Android Development", "Cross-platform"],
    "Machine Learning": ["ML Algorithms", "Data Analytics", "Predictive Models"],
    Accessibility: ["HoverNav Integration", "Inclusive Design", "WCAG Compliance"],
    "Healthcare Tech": ["NeuroStim AI", "Medical Apps", "Health Analytics"],
    "Education Tech": ["Student Portal", "Learning Management", "AI Tutoring"],
    "Startup Consulting": ["Tech Strategy", "MVP Development", "Innovation Labs"],
  }

  useEffect(() => {
    // Simulate AI personalization based on user behavior
    const savedInterests = localStorage.getItem("userInterests")
    if (savedInterests) {
      setUserInterests(JSON.parse(savedInterests))
    }
  }, [])

  useEffect(() => {
    if (userInterests.length > 0) {
      const newRecommendations = userInterests.flatMap(
        (interest) => serviceRecommendations[interest as keyof typeof serviceRecommendations] || [],
      )
      setRecommendations([...new Set(newRecommendations)])
      localStorage.setItem("userInterests", JSON.stringify(userInterests))
    }
  }, [userInterests])

  const toggleInterest = (interest: string) => {
    setUserInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const personalizeExperience = () => {
    setIsPersonalizing(true)
    setTimeout(() => {
      setIsPersonalizing(false)
      // Trigger personalization effects
    }, 2000)
  }

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Brain className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">AI Personalization Engine</h3>
            </div>
            <p className="text-gray-400">
              Tell us your interests and we'll personalize your experience with AI-powered recommendations
            </p>
          </div>

          {/* Interest Selection */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-white mb-3 flex items-center">
              <Target className="h-5 w-5 text-purple-400 mr-2" />
              Your Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  variant={userInterests.includes(interest) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    userInterests.includes(interest)
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      : "border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                <Zap className="h-5 w-5 text-purple-400 mr-2" />
                AI Recommendations
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {recommendations.slice(0, 6).map((rec, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/5 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    <span className="text-gray-300 text-sm">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personalize Button */}
          <div className="text-center">
            <Button
              onClick={personalizeExperience}
              disabled={userInterests.length === 0 || isPersonalizing}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {isPersonalizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Personalizing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Personalize My Experience
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
