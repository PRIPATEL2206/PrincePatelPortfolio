import React from 'react'
import { motion } from 'framer-motion'
import InfiniteMovingCard from '../components/cards/infinite-moing-animation'

const educationData = [
  {
    quote:
      'Completed secondary education at I.M.J. Sarva Vidhyalay, Balol. Chosen science with mathematics for higher studies.',
    name: '10th Grade',
    title: 'Percentage: 72.16%',
    title2: 'Percentile Rank: 88.54',
    year: '2018',
  },
  {
    quote:
      'Completed 12th Science with Mathematics at I.M.J. Sarva Vidhyalay. Secured 1st rank in school.',
    name: '12th Science',
    title: 'Percentage: 76.83%',
    title2: 'Percentile Rank: 96.85',
    year: '2020',
  },
  {
    quote:
      'Earned admission to Government Engineering College Gandhinagar for B.E. in Information Technology through strong 12th & GUJCET scores. Graduated with a job offer from Silver Touch Technologies.',
    name: 'B.E. — Information Technology',
    title: 'CGPA: 8.65 / 10',
    title2: 'GEC Gandhinagar',
    year: '2024',
  },
]

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    color: 'from-orange-500 to-yellow-500',
    icon: '☁',
    year: '2024',
  },
]

function EducationScreen() {
  return (
    <section className="w-full py-16 sm:py-24 px-4" id="education">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">Background</span>
          <h2 className="section-heading">Education & Certification</h2>
        </motion.div>

        {/* Moving education cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCard items={educationData} speed="slow" />
        </motion.div>

        {/* Certifications */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Certifications</h3>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 glass-card rounded-2xl p-4 sm:p-5 w-full sm:w-auto sm:min-w-[340px] hover:border-orange-500/30 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}
                >
                  {cert.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                    {cert.title}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{cert.issuer}</p>
                </div>
                <span className="ml-auto text-xs text-gray-500 flex-shrink-0">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationScreen
