'use client'
import '@/app/globals.css'
import Header from '@/components/header'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

// 更高级的过渡动画变体
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 0.3,
            }}
            className="min-h-screen"
          >
            <Header />
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  )
}
