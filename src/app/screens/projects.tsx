import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedPinCard } from '../components/cards/3dPinCard'

import chatAppImage          from '@/assets/photos/projectSS/appDevolopment/pChat.png'
import desisClassificationImg from '@/assets/photos/projectSS/ai-ml/desisClasification.png'
import crmDjangoImage        from '@/assets/photos/projectSS/webDevolopment/crm_django.jpg'
import chessImage            from '@/assets/photos/projectSS/gameDevolopment/chessWeb.jpg'
import quotesImage           from '@/assets/photos/projectSS/appDevolopment/quotes.jpg'
import snackGame             from '@/assets/photos/projectSS/gameDevolopment/snackWeb.jpg'
import ticTacGame            from '@/assets/photos/projectSS/gameDevolopment/tictactoeWeb.jpg'
import pPostAppImage         from '@/assets/photos/projectSS/appDevolopment/pPost.png'
import informaticaAppImage   from '@/assets/photos/projectSS/appDevolopment/informaticaApp.png'

/* ── Featured projects from resume ── */
const featuredProjects = [
  {
    linkTitle: 'GitHub',
    link: 'https://github.com/PRIPATEL2206/P-Chat-App',
    title: 'Scalable Real-Time Chat App',
    about:
      'Production-grade messaging system with persistent WebSocket connections, stateless FastAPI backend for horizontal scaling, JWT auth, and PostgreSQL message history.',
    image: chatAppImage,
    technologis: 'FastAPI · React · Tailwind CSS · WebSockets · PostgreSQL · JWT',
    badge: 'Backend',
  },
  {
    linkTitle: 'GitHub',
    link: 'https://github.com/PRIPATEL2206/st-django-cms-web',
    title: 'Trust Management System',
    about:
      'Multi-role SaaS platform for trust operations — donations, expenses, approvals, member management — with Stripe payments and downloadable analytics reports.',
    image: crmDjangoImage,
    technologis: 'Django · PostgreSQL · Tailwind CSS · Stripe',
    badge: 'Full-Stack',
  },
  {
    linkTitle: 'GitHub',
    link: 'https://github.com/PRIPATEL2206/plant_village_datase_decis_classification',
    title: 'Plant Disease Classification',
    about:
      'Trained a CNN on leaf images with data augmentation (rotation, flip, zoom) to reduce overfitting; deployed as a FastAPI REST inference endpoint.',
    image: desisClassificationImg,
    technologis: 'CNN · TensorFlow · Keras · FastAPI · JavaScript',
    badge: 'ML / AI',
  },
  {
    linkTitle: 'GitHub',
    link: 'https://github.com/PRIPATEL2206',
    title: 'Time-Series Dengue Forecasting',
    about:
      'LSTM model for multi-year dengue outbreak prediction with hyperparameter tuning (learning rate, dropout, layers) to improve forecast accuracy over statistical baselines.',
    image: desisClassificationImg,
    technologis: 'LSTM · TensorFlow · Pandas · NumPy · Matplotlib',
    badge: 'ML / AI',
  },
]

/* ── Additional / side projects ── */
const moreProjects = [
  {
    linkTitle: 'Play',
    link: 'https://pripatel2206.github.io/WebProjects/Games/Chass%20Game/index.html',
    title: 'Web Chess Game',
    about: 'Browser-based chess game with animations and move validation. Playable online.',
    image: chessImage,
    technologis: 'HTML · CSS · JavaScript',
    badge: 'Game',
  },
  {
    linkTitle: 'GitHub',
    link: 'https://github.com/PRIPATEL2206/quotes_app',
    title: 'Quotes App',
    about: 'Mobile app for discovering and saving quotes by author or keyword search.',
    image: quotesImage,
    technologis: 'Flutter',
    badge: 'Mobile',
  },
  {
    linkTitle: 'GitHub',
    link: 'https://github.com/PRIPATEL2206/ppost-mobile-app',
    title: 'PPost — API Client App',
    about: 'Mobile Postman-like app for testing REST APIs with JSON request body and response view.',
    image: pPostAppImage,
    technologis: 'Flutter',
    badge: 'Mobile',
  },
  {
    linkTitle: 'GitHub',
    link: 'https://github.com/PRIPATEL2206/Informatica_App',
    title: 'Yojana Kendra App',
    about:
      'SSIP Hackathon project — multi-language app for government scheme discovery with dark mode and search filters.',
    image: informaticaAppImage,
    technologis: 'Flutter',
    badge: 'Mobile',
  },
  {
    linkTitle: 'Play',
    link: 'https://pripatel2206.github.io/WebProjects/Games/Snack%20Game/index.html',
    title: 'Web Snake Game',
    about: 'Classic Nokia snake game in the browser with keyboard and on-screen controls.',
    image: snackGame,
    technologis: 'HTML · CSS · JavaScript',
    badge: 'Game',
  },
  {
    linkTitle: 'Play',
    link: 'https://pripatel2206.github.io/WebProjects/Games/Cross%20Circule%20Game/index.html',
    title: 'Web Tic-Tac-Toe',
    about: 'Two-player tic-tac-toe game built for the browser.',
    image: ticTacGame,
    technologis: 'HTML · CSS · JavaScript',
    badge: 'Game',
  },
]

const badgeColor: Record<string, string> = {
  'ML / AI':    'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Backend':    'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Full-Stack': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Game':       'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Mobile':     'bg-pink-500/20 text-pink-300 border-pink-500/30',
}

function Projects() {
  const [showMore, setShowMore] = useState(false)

  /* Pair items into rows of 2 for the pin card layout */
  const chunk = <T,>(arr: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    )

  return (
    <section className="w-full py-16 sm:py-24 px-4" id="projects">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Projects</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xl">
            Featured projects aligned with my ML / Data Engineering specialisation, plus side projects.
          </p>
        </motion.div>

        {/* Badge legend */}
        <div className="flex flex-wrap gap-2 mb-8 mt-4">
          {Object.entries(badgeColor).map(([label, cls]) => (
            <span key={label} className={`text-xs px-2 py-0.5 rounded-full border ${cls}`}>{label}</span>
          ))}
        </div>

        {/* Featured project grid */}
        {chunk(featuredProjects, 2).map((row, i) => (
          <div key={i} className="flex flex-col lg:flex-row">
            {row.map((project, j) => (
              <AnimatedPinCard project={project} key={`${i}-${j}`} />
            ))}
          </div>
        ))}

        {/* More projects toggle */}
        <div className="mt-4 mb-2">
          <button
            onClick={() => setShowMore(p => !p)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
          >
            <span>{showMore ? 'Hide extra projects' : 'Show more projects'}</span>
            <span className="text-xs group-hover:translate-y-0.5 transition-transform">{showMore ? '▲' : '▼'}</span>
          </button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {chunk(moreProjects, 2).map((row, i) => (
                <div key={i} className="flex flex-col lg:flex-row">
                  {row.map((project, j) => (
                    <AnimatedPinCard project={project} key={`more-${i}-${j}`} />
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
