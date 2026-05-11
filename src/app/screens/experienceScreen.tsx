import React from 'react'
import { motion } from 'framer-motion'
import silverTouchLogo from '@/assets/compony-logo/silvertouchLogo.jpg'

const experiences = [
  {
    company: 'Tata Consultancy Services (TCS)',
    abbrev: 'TCS',
    year: '2024 – Present',
    location: 'Gandhinagar, India',
    role: 'System Engineer',
    logo: null,
    accentColor: 'blue',
    bullets: [
      'Engineered large-scale ETL pipelines on AWS (Glue, Lambda, Redshift, S3, Aurora), processing 125M+ HCP records with high reliability and fault tolerance.',
      'Optimized PySpark and SQL analytics workflows, improving pipeline throughput and reducing end-to-end data processing latency for faster downstream reporting.',
      'Drove cloud cost reduction by 10% (~₹1 lakh/month) via Redshift query tuning, S3 lifecycle policies, and Lambda cold-start optimization.',
      'Built internal analytics portals as FastAPI and Django microservices, enabling self-serve data access across business teams.',
    ],
    tech: ['AWS Glue', 'Lambda', 'Redshift', 'S3', 'PySpark', 'Python', 'FastAPI', 'Django'],
  },
  {
    company: 'Silver Touch Technologies Ltd.',
    abbrev: 'ST',
    year: 'Jan 2024 – Jul 2024',
    location: 'Ahmedabad, India',
    role: 'AI/ML & Software Developer Intern',
    logo: silverTouchLogo,
    accentColor: 'emerald',
    bullets: [
      'Built a CNN image processing model (TensorFlow, Keras, OpenCV) for foul detection in autonomous driving assessments; developed end-to-end ML pipeline from preprocessing to inference.',
      'Shipped production features using Java, Spring Boot, Python, and Flutter; integrated Odoo ERP modules.',
      'Delivered sprint milestones in an Agile environment across multiple live projects.',
    ],
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'Java', 'Spring Boot', 'Flutter', 'Odoo'],
  },
]

const accentMap: Record<string, { dot: string; tag: string; border: string; badge: string }> = {
  blue: {
    dot: 'bg-blue-500 border-blue-500',
    tag: 'tech-tag',
    border: 'hover:border-blue-500/30',
    badge: 'bg-gradient-to-br from-blue-600 to-blue-800',
  },
  emerald: {
    dot: 'bg-emerald-500 border-emerald-500',
    tag: 'tech-tag-green',
    border: 'hover:border-emerald-500/30',
    badge: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
  },
}

function ExperienceScreen() {
  return (
    <section className="w-full py-16 sm:py-24 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">Career</span>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const accent = accentMap[exp.accentColor] ?? accentMap.blue
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative sm:pl-14"
                >
                  {/* Timeline dot */}
                  <div className={`timeline-dot hidden sm:flex border-2 ${accent.dot}`}>
                    <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                  </div>

                  <div
                    className={`glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 ${accent.border}`}
                  >
                    {/* Card header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-4">
                        {exp.logo ? (
                          <img
                            src={exp.logo as unknown as string}
                            alt={exp.company}
                            className="w-12 h-12 rounded-xl object-cover border border-white/10 flex-shrink-0"
                          />
                        ) : (
                          <div
                            className={`w-12 h-12 rounded-xl ${accent.badge} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}
                          >
                            {exp.abbrev}
                          </div>
                        )}
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
                          <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="sm:text-right flex sm:flex-col gap-2 sm:gap-1 items-center sm:items-end flex-shrink-0">
                        <span className="text-xs text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                        <span className="text-xs text-gray-500">{exp.location}</span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                          <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, j) => (
                        <span key={j} className={accent.tag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceScreen
