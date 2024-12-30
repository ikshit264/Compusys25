'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)

  useEffect(() => {
    setPrevPathname(pathname)
  }, [pathname])

  const getDirection = () => {
    const paths = ['/', '/members', '/sponsors']
    const prevIndex = paths.indexOf(prevPathname)
    const currentIndex = paths.indexOf(pathname)
    return currentIndex > prevIndex ? 1 : -1
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: 300 * getDirection(), opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300 * getDirection(), opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition

