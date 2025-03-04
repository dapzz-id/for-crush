"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { FloatingHearts } from "@/components/floating-hearts"
import { HeartAnimation } from "@/components/heart-animation"
import { useRef, useState } from "react"
import TypingMessage from "@/components/typing-message"

export default function Hero() {
  const [showMessage, setShowMessage] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
      // Hentikan audio pertama dari localStorage
      localStorage.setItem("stopMusic", "true")
      window.dispatchEvent(new Event("storage"))
  
      if (!audioRef.current) {
        audioRef.current = new Audio("/dygta.mp3")
        audioRef.current.addEventListener("ended", () => setIsPlaying(false))
      }
  
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
  
      setIsPlaying(!isPlaying)
    }

  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingHearts count={8} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {!showMessage ? (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Untuk
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">
                    {" "}
                    Seseorang yang Spesial
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="bg-pink-600 rounded-lg hover:bg-pink-700 mt-5 text-white px-8"
                  onClick={() => {
                    setShowMessage(true);
                    toggleAudio();
                  }}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Baca Pesanku
                </Button>
              </motion.div>
            </>
          ) : (
            <TypingMessage />
          )}
        </div>
      </div>

      {/* Animated heart */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <HeartAnimation />
      </div>
    </div>
  )
}

