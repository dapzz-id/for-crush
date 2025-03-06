"use client"

import { useState, useEffect, useRef } from "react"
import Typewriter from "typewriter-effect"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Play, Pause } from "lucide-react"

export default function TypingMessage() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [key, setKey] = useState(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleStorageChange = () => {
      const stopMusic = localStorage.getItem("stopMusic")
      if (stopMusic === "true" && audioRef.current) {
        audioRef.current.pause()
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/andmesh.mp3")
      audioRef.current.addEventListener("ended", () => setIsPlaying(false))
      audioRef.current.loop = true
    }

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const messages = [
    "Hai Rizka Rahmawati, sudah lama aku memperhatikanmu. Setiap senyummu, tawamu, caramu berbicara… semua itu membuatku semakin terpesona.",
    "Aku tidak tahu kapan perasaan ini mulai tumbuh. Mungkin sejak pertama melihatmu, atau mungkin karena Tuhan yang membolak-balikkan hati ini. Tapi yang aku tahu, aku menyukaimu tanpa perlu alasan, tanpa perlu jawaban.",
    "Hari demi hari, perasaan ini semakin kuat. Dari sifatmu, senyummu, tawamu, semuanya tentang dirimu membuatku kagum.",
    "Saat ini aku memilih diam. Bukan karena takut, tapi karena aku ingin memperbaiki diri, mengejar impian, dan membahagiakan orang tuaku terlebih dahulu. Aku ingin menjadi seseorang yang pantas, jika suatu hari nanti aku diberi kesempatan untuk menyebut namamu di hadapan Tuhan.",
    "Jika kelak Allah menakdirkan kita bertemu di waktu yang tepat, aku akan memastikan diriku siap. Aku tidak main-main dengan perasaan ini. Aku hanya ingin kamu tahu, bahwa di suatu tempat, ada seseorang yang diam-diam mendoakanmu dalam setiap sujudnya.",
    "Aku yakin, jika berusaha dan berdoa, Allah akan memudahkan segalanya.",
    "Kamu itu seperti chandra yang sundara dan membawakan harsa yang amerta di kalbuku.",
    "Kau adalah aratula yang menyinari nisha, kau adalah aksara di dalam timira, dan aku adalah jivaah yang sarvadah, melihatmu sebagai aksara yang aswara untuk harsa pada diriku.",
    "Tentang daksaku yang mencintaimu aksa di netra, namun cintaku sedalam sagara, tentang asmaraloka yang menyatukan dua atma dalam aksara, entah akan menjadi lara dan fana atau amerta dalam adiwarna.",
    "Aku akan tetap mencintaimu meski tanpa pesan dan komunikasi.",
    "Jika kelak Allah mengizinkan bahwa kamu adalah takdirku, maka aku akan selalu menjagamu, merawatmu, dan mencintaimu sebaik-baiknya. Ada satu lagu yang mungkin mewakili pesan ini:",
    "Aku akan berusaha menjadi yang terbaik, dan aku ingin melihatmu bahagia.",
    "Aku ingin membuatmu tersenyum, tertawa, dan merasa aman.",
    "Aku ingin kamu merasa dihargai dan dicintai, karena menurutku, kamu itu bagaikan berlian yang sangat berharga.",
    "Mungkin itu saja yang bisa aku ungkapkan sekarang. Aku harap kamu bisa memahami perasaanku ini.",
    "Maaf yaa, kalau pesan ini terlalu panjang untukmu. Aku hanya ingin kamu tahu perasaanku.",
    "Oh ya, satu pesan lagi untukmu. Aku berharap kamu selalu menjaga kesehatan, jangan lupakan sholatmu, jaga caramu berpakaian saat di luar, jaga aurat dan kehormatanmu, serta perdalam ilmu agamamu. Karena kamu itu bagaikan berlian yang berkilau, dan aku tahu bagaimana cara laki-laki memandang wanita.",
    "Fokuslah pada cita-citamu terlebih dahulu. Cinta, jodoh, dan takdir bisa datang kapan saja, tapi ingatlah bahwa Allah selalu menyiapkan yang terbaik di waktu yang tepat.",
    "Jangan khawatir tentang cinta. Yang terbaik adalah yang datang tanpa harus melanggar batas yang Allah tetapkan. Orang yang benar-benar mencintaimu adalah orang yang tidak berani mengajaknya dalam perbuatan maksiat.",
    "Hehehe, maaf ya kalau pesan ini terasa sedikit mengatur. Aku hanya ingin melihatmu menjadi wanita yang lebih baik, lebih sholehah, lebih pintar, berbakti pada orang tua, dan sukses dalam karir serta kehidupan.",
    "Terima kasih karena sudah mau membaca pesanku ini. Tetaplah menjadi dirimu yang bersinar, seperti chandra yang sundara di malam yang sunyi. See you di waktu yang tepat menurut Tuhan..."
];

  const handleNext = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex((prev) => prev + 1)
      setIsTypingComplete(false)
      setKey((prev) => prev + 1)
      console.log(messageIndex)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[300px] flex flex-col items-center justify-center"
    >
      <div className="bg-black/15 p-6 rounded-2xl backdrop-blur-sm mb-8 min-h-[200px] flex items-center">
        <div className="text-white text-xl md:text-2xl text-left">
          <Typewriter
            key={key}
            options={{
              delay: 50,
              cursor: "❤️",
              deleteSpeed: 999999999,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(messages[messageIndex])
                .callFunction(() => setIsTypingComplete(true))
                .start()
            }}
          />
        </div>
      </div>

      {isTypingComplete && messageIndex === messages.length - 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
        </motion.div>
      )}

      {isTypingComplete && messageIndex === messages.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
        </motion.div>
      )}

      {isTypingComplete && messageIndex < messages.length - 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {messageIndex == 10 && (
            <Button onClick={toggleAudio} size="lg" className="bg-pink-600 hover:bg-pink-700 rounded-xl mr-6 text-white px-8">
              Play Audio
            </Button>
          )}
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 rounded-xl text-white px-8" onClick={() => {handleNext(); setIsPlaying(false);}}>
            Next
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}
