// Navbar.js
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "@/public/assets/images/cselogo.svg"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Members", href: "/members" },
    { name: "Polaris", href: "/polaris" },
  ]

  return (
    <motion.header
      className={`top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 bg-transparent border-transparent`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {/* Rest of the Navbar component remains the same */}
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl text-black font-bold">
              <Image src={Logo} width={20} height={20} alt="CSE Logo" className="size-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex justify-center items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-2 rounded-2xl px-3 py-2 border ${pathname === item.href
                    ? "bg-white border-gray-500 font-medium text-black"
                    : "bg-gray-500 border-gray-400"
                    }`}
                >
                  <span className="text-sm">{item.name}</span>
                </Link>

              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute h-0.5 w-6 bg-black transform transition-all duration-300"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    translateY: isOpen ? 8 : 0
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-black top-2 transform transition-all duration-300"
                  animate={{
                    opacity: isOpen ? 0 : 1
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-black top-4 transform transition-all duration-300"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    translateY: isOpen ? -8 : 0
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base rounded bg-black ${pathname === item.href
                      ? "text-black font-medium bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}