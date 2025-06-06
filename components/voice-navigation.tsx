"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, MicOff, Volume2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function VoiceNavigation() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [isSupported, setIsSupported] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      setIsSupported(true)
    }
  }, [])

  const startListening = () => {
    if (!isSupported) {
      toast({
        title: "Voice Navigation Not Supported",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive",
      })
      return
    }

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = "en-US"

    recognition.onstart = () => {
      setIsListening(true)
      toast({
        title: "Voice Navigation Active",
        description: "Say commands like 'go to services' or 'scroll down'",
      })
    }

    recognition.onresult = (event: any) => {
      const current = event.resultIndex
      const transcript = event.results[current][0].transcript.toLowerCase()
      setTranscript(transcript)

      if (event.results[current].isFinal) {
        handleVoiceCommand(transcript)
      }
    }

    recognition.onerror = () => {
      setIsListening(false)
      toast({
        title: "Voice Recognition Error",
        description: "Please try again.",
        variant: "destructive",
      })
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  const stopListening = () => {
    setIsListening(false)
    setTranscript("")
  }

  const handleVoiceCommand = (command: string) => {
    const commands = {
      home: () => (window.location.href = "/"),
      services: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
      projects: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
      about: () => (window.location.href = "/about"),
      contact: () => (window.location.href = "/contact"),
      "scroll down": () => window.scrollBy({ top: 500, behavior: "smooth" }),
      "scroll up": () => window.scrollBy({ top: -500, behavior: "smooth" }),
      top: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    }

    for (const [key, action] of Object.entries(commands)) {
      if (command.includes(key)) {
        action()
        toast({
          title: "Command Executed",
          description: `Navigated to ${key}`,
        })
        break
      }
    }
  }

  if (!isSupported) return null

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isListening && (
        <Card className="mb-4 bg-black/90 backdrop-blur-md border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-white">
              <Volume2 className="h-4 w-4 text-purple-400" />
              <span className="text-sm">Listening: {transcript || "Say a command..."}</span>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={isListening ? stopListening : startListening}
        className={`h-12 w-12 rounded-full ${
          isListening
            ? "bg-red-600 hover:bg-red-700 animate-pulse"
            : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
        }`}
        size="icon"
      >
        {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
      </Button>
    </div>
  )
}
