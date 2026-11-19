import React, { SetStateAction, useState } from 'react'
import { TracingBeam } from './components/ui/traking-beem'
import About from './screens/about'
import ExperienceScreen from './screens/experienceScreen'
import EducationScreen from './screens/educationScreen'
import SkillsAndToolsScreen from './screens/skillsAndTools'
import Projects from './screens/projects'
import Navbar from './screens/navbar'
import FlotingSocialMedia from './screens/flotingSocialMedia'
import FlotingThemChanger from './components/navbar/floting-them-changer'
import { ContectForm } from './components/forms/contectUsForm'
import { motion } from 'framer-motion'

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const setmode = (val: SetStateAction<boolean>) => setIsDark(val)

  return (
    <div className={`w-full overflow-hidden text-white ${isDark ? 'bg-black dark' : 'bg-white'}`}>
      <FlotingThemChanger setIsDark={setmode} isDark={isDark} />
      <Navbar />
      <FlotingSocialMedia />

      <TracingBeam className="px-2 sm:px-4 lg:px-6">
        <About />
        <ExperienceScreen />
        <EducationScreen />
        <SkillsAndToolsScreen />
        <Projects />

        {/* Contact section */}
        <section className="w-full py-16 sm:py-24 px-4" id="contact-section">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="section-label">Get In Touch</span>
              <h2 className="section-heading">Contact</h2>
            </motion.div>
            <ContectForm />
          </div>
        </section>
      </TracingBeam>
    </div>
  )
}
