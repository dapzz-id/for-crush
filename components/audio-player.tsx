"use client"

import { useEffect, useRef } from "react"

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3

      const handleCanPlay = () => {
        audioRef.current?.play().catch((error) => {
          console.log("Autoplay prevented, waiting for user interaction")
        })
      }

      audioRef.current.addEventListener("canplaythrough", handleCanPlay)

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("canplaythrough", handleCanPlay)
          audioRef.current.pause()
          audioRef.current.src = ""
        }
      }
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      id="bgMusic"
      loop
      preload="auto"
      className="hidden"
      src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3"
      onError={(e) => {
        const error = e.currentTarget.error
        console.error("Background music error details:", {
          code: error?.code,
          message: error?.message,
        })
      }}
    >
      Your browser does not support the audio element.
    </audio>
  )
}

