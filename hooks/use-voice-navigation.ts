"use client"

import { useState, useCallback } from "react"

export function useVoiceNavigation() {
  const [isListening, setIsListening] = useState(false)

  const toggleListening = useCallback(() => {
    setIsListening((prev) => !prev)
  }, [])

  return {
    isListening,
    toggleListening,
  }
}
