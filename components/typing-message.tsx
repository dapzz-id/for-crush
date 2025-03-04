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
    "Hai [Nama Crush], sudah lama sekali aku memperhatikanmu. Setiap senyummu, tawamu, selalu membuatku menjadi semakin terpesona denganmu.",
    "Sejak awal pertama kali aku melihatmu, aku mulai menyukaimu. Waktu itu tanpa alasan awal aku mulai menyukai dirimu, tapi aku yakin Allah lah yang telah membolak balikkan isi hatiku.",
    "Hari demi hari aku semakin menyukai dirimu, dari sifatmu, senyummu, tawamu, semuanya dari dirimu.",
    "Mungkin hari ini aku belum bisa mengungkapkannya secara langsung, tapi aku yakin suatu saat nanti aku akan mengungkapkannya langsung kepadamu.",
    "Karena menurutku, saat ini belum waktunya, aku ingin fokus mengejar cita-cita dan impianku terlebih dahulu. Agar bisa membahagiakan kedua orang tuaku.",
    "Aku ingin mengubah diriku ini menjadi lebih baik lagi dari saat ini. Jika suatu saat nanti aku ditakdirkan untukmu, maka aku telah siap akan hal itu. Aku tidak main-main dengan perasaan ini, sungguh aku sangat mencintai dirimu.",
    "Aku selalu meminta kepada tuhanku, agar kita bisa dipertemukan di waktu yang tepat dan dipersatukan kelak, meski aku tahu itu sangat sulit. Tapi aku yakin, jika berusaha dan berdoa, Allah akan memudahkan segalanya.",
    "Kamu itu seperti chandra yang sundara dan membawakan harsa yang amerta di kalbuku",
    "Kau adalah aratula yang menyinari nisha, kau adalah aksara didalam timira, dan aku adalah jivaah yang sarvadah, melihatmu sebagai aksara yang aswara untuk harsa pada diriku.",
    "Tentang daksaku yang mencintaimu aksa di netra, namun cintaku sedalam sagara, tentang asmaraloka yang menyatukan dua atma dalam aksara, entah akan menjadi lara dan fana atau amerta dalam adiwarna.",
    "Aku akan tetap mencintai dan menyukai dirimu meski tanpa pesan dan komunikasi.",
    "Jika kelak aku di izinkan oleh Allah bahwa kamu adalah takdirku, maka aku akan selalu menjagamu, merawatmu, dan mencintaimu sebaik-baiknya, sama seperti lagu ini:",
    "Aku akan selalu berusaha menjadi yang terbaik untukmu, dan aku akan selalu berusaha untuk membuatmu bahagia.",
    "Aku akan selalu berusaha untuk membuatmu tersenyum, tertawa, dan bahagia.",
    "Aku akan selalu berusaha untuk membuatmu merasa nyaman dan aman bersamaku.",
    "Aku akan selalu berusaha untuk membuatmu merasa dicintai dan dihargai.",
    "Karena menurutku, kamu itu bagaikan berlian yang sangat berharga sekali.",
    "Mungkin itu saja yang bisa aku ungkapkan sekarang, aku harap kamu bisa memahami perasaanku ini.",
    "Maaf yaa, kalau pesan ini terlalu panjang untukmu. Aku hanya ingin kamu tahu perasaanku ini.",
    "Oh yaa, satu pesan lagi untukmu. Aku berharap kamu selalu jaga kesehatanmu, jangan lupakan sholatmu, jaga caramu berpakaian saat diluar, jaga aurat & kehormatanmu, perdalam ilmu agamamu. Karena kamu itu bagaikan berlian yang berkilau. Aku juga tau bagaimana cara laki-laki dalam memandang wanita.",
    "Fokuslah pada cita-citamu terlebih dahulu, karena kalau masalah cinta, jodoh dan takdir, itu bisa datang kapan saja dan dimana saja. Tetapi kamu harus selalu ingat, bahwa agamamu islam, Allah melarang pacaran, jadi jangan pernah pacaran sebelum menikah.",
    "Hehehe, maaf yaa kalau agak sedikit ngatur kamu. Aku hanya ingin melihatmu menjadi orang yang lebih baik lagi dari sebelumnya, menjadi wanita yang sholehah, pintar, berbakti pada orang tua, dan sukses dalam karir dan kehidupanmu.",
    "Terima kasih yaa karena sudah mau membaca pesanku ini, see youu di waktu yang tepat menurut tuhan...",
  ]

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
          {messageIndex == 11 && (
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

          {messageIndex == 22 && (
            <Button onClick={() => { window.location.href = 'https://ngl.link/wakafa_billahi_syahida' }} size="lg" className="bg-pink-600 py-7 hover:bg-pink-700 rounded-xl mr-6 text-white px-8">
              Send a reply, if you want <br></br> to send a message to me
            </Button>
          )}
    </motion.div>
  )
}
