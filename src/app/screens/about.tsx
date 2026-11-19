import React, { useEffect, useState } from 'react'
import { TypewriterEffectSmooth } from '../components/ui/smooth-type-writer-efect'
import { motion } from 'framer-motion'
import profilePhoto from '@/assets/photos/profilePhoto.jpg'

const stats = [
  { value: '125M+', label: 'Records Processed' },
  { value: '800+',  label: 'LeetCode Solved' },
  { value: 'AWS',   label: 'Certified SA' },
  { value: '2+',  label: 'Years Experience' },
]

const nameWords = [
  { text: 'Prince', className: 'text-blue-600 dark:text-blue-400' },
  { text: 'Patel',  className: 'text-blue-600 dark:text-blue-400' },
]

const roleWords = [
  { text: 'Software' },
  { text: 'Engineer' },
]

function About() {
  const [showRole, setShowRole] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowRole(true), 3600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 py-24 sm:py-28 px-4"
      id="home"
    >
      {/* ── Text side ── */}
      <div className="flex-1 max-w-2xl w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label block mb-3"
        >
          Software Engineer · Python · FastAPI · Django · AWS Certified SA
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-xl sm:text-2xl mb-1"
        >
          Hey, I'm
        </motion.p>

        <TypewriterEffectSmooth words={nameWords} className="!my-2" />

        {showRole && (
          <TypewriterEffectSmooth words={roleWords} isDissApear={false} className="!my-2" />
        )}

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 dark:text-neutral-400 text-base sm:text-lg max-w-xl mt-4 leading-relaxed"
        >
          Software Engineer at TCS with 2+ years building high-throughput distributed
          systems, scalable microservices, and{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">ML pipelines processing 125M+ records on AWS</span>.
          Designs cloud-native architectures with Python, FastAPI, and Django.{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">800+ LeetCode problems solved</span>.
          AWS Certified Solutions Architect.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="stat-card"
            >
              <span className="text-xl sm:text-2xl font-bold text-gradient-blue">{s.value}</span>
              <span className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-500 mt-1 text-center leading-tight">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <a
            href={`${import.meta.env.BASE_URL}Prince_Patel_Resume.pdf`}
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-white/20 hover:border-blue-500/60 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* ── Photo side ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex-shrink-0"
      >
        {/* Glowing rings */}
        <div className="absolute inset-0 rounded-full bg-blue-500/10 scale-[1.18] animate-pulse-ring" />
        <div className="absolute inset-0 rounded-full bg-blue-500/5 scale-[1.35] animate-pulse-ring" style={{ animationDelay: '1s' }} />

        <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-2xl shadow-blue-500/20">
          <img
            src={profilePhoto as unknown as string}
            alt="Prince Patel"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* AWS badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
        >
          AWS Certified
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
