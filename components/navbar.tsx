"use client"

import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-center px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Heart className="w-8 h-8 text-pink-500" />
        <span className="text-white font-medium text-xl">Just for you</span>
      </Link>
    </motion.nav>
  )
}

