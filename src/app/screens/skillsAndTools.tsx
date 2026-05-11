import React from 'react'
import { motion } from 'framer-motion'
import { InfiniteMovingAnimation } from '../components/ui/infinite-moving-animation'
import { AnimatedTooltip } from '../components/ui/animated-tooltip'

import pythonIcon     from '@/assets/photos/programing/python.png'
import javaIcon       from '@/assets/photos/programing/java.png'
import jsIcon         from '@/assets/photos/programing/jsIcon.png'
import reactIcon      from '@/assets/photos/webDevelopment/react.png'
import djangoIcon     from '@/assets/photos/webDevelopment/django.png'
import springbootIcon from '@/assets/photos/webDevelopment/springboot.png'
import numpyIcon      from '@/assets/photos/frameWorks/numpyIcon.png'
import pandasIcon     from '@/assets/photos/frameWorks/pandas.png'
import tensorflowIcon from '@/assets/photos/frameWorks/tensoreflowIcon.png'
import dockerIcon     from '@/assets/photos/frameWorks/dockerIcon.png'
import githubIcon     from '@/assets/photos/icons/gitHubIcon.png'
import flutterIcon    from '@/assets/photos/appDevelopment/flutter.png'

/* ── Categories shown as tag lists (no icon needed) ── */
const skillCategories = [
  {
    label: 'Languages',
    color: 'blue',
    skills: ['Python', 'SQL', 'Java', 'JavaScript'],
  },
  {
    label: 'ML / AI',
    color: 'purple',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    label: 'Big Data & ETL',
    color: 'orange',
    skills: ['PySpark', 'AWS Glue', 'Apache Spark', 'Airflow'],
  },
  {
    label: 'Cloud — AWS',
    color: 'orange',
    skills: ['Lambda', 'Redshift', 'S3', 'Aurora', 'Glue', 'EC2', 'IAM', 'CloudWatch'],
  },
  {
    label: 'Backend',
    color: 'green',
    skills: ['FastAPI', 'Django', 'Flask', 'REST APIs', 'Microservices'],
  },
  {
    label: 'Databases',
    color: 'blue',
    skills: ['PostgreSQL', 'Amazon Redshift', 'MySQL'],
  },
  {
    label: 'DevOps & Tools',
    color: 'purple',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Jupyter', 'VS Code'],
  },
  {
    label: 'Frontend',
    color: 'green',
    skills: ['React', 'Tailwind CSS', 'WebSockets', 'HTML', 'CSS'],
  },
]

const tagClassMap: Record<string, string> = {
  blue: 'tech-tag',
  purple: 'tech-tag-purple',
  orange: 'tech-tag-orange',
  green: 'tech-tag-green',
}

const iconSkills = [
  { id: 1,  name: 'Python',      designation: 'Language',    image: pythonIcon },
  { id: 2,  name: 'Java',        designation: 'Language',    image: javaIcon },
  { id: 3,  name: 'JavaScript',  designation: 'Language',    image: jsIcon },
  { id: 4,  name: 'React',       designation: 'Frontend',    image: reactIcon },
  { id: 5,  name: 'Django',      designation: 'Backend',     image: djangoIcon },
  { id: 6,  name: 'Spring Boot', designation: 'Backend',     image: springbootIcon },
]

const iconTools = [
  { id: 1,  name: 'TensorFlow',  designation: 'ML Framework', image: tensorflowIcon },
  { id: 2,  name: 'NumPy',       designation: 'ML Library',   image: numpyIcon },
  { id: 3,  name: 'Pandas',      designation: 'Data Library', image: pandasIcon },
  { id: 4,  name: 'Docker',      designation: 'DevOps',       image: dockerIcon },
  { id: 5,  name: 'GitHub',      designation: 'Version Ctrl', image: githubIcon },
  { id: 6,  name: 'Flutter',     designation: 'Mobile',       image: flutterIcon },
]

function SkillsAndToolsScreen() {
  return (
    <section className="w-full py-16 sm:py-24 px-4" id="skills">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-heading">Skills & Tools</h2>
        </motion.div>

        {/* Categorized skill tags grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="skill-category"
            >
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                {cat.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((sk) => (
                  <span key={sk} className={tagClassMap[cat.color] ?? 'tech-tag'}>{sk}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated icon rows */}
        <div className="space-y-2">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Core Tech Icons</p>

          <InfiniteMovingAnimation direction="left">
            {iconSkills.map((skill) => (
              <div className="mt-16" key={skill.id}>
                <AnimatedTooltip items={[skill]} />
              </div>
            ))}
          </InfiniteMovingAnimation>

          <InfiniteMovingAnimation direction="right">
            {iconTools.map((tool) => (
              <div className="mt-16" key={tool.id}>
                <AnimatedTooltip items={[tool]} />
              </div>
            ))}
          </InfiniteMovingAnimation>
        </div>
      </div>
    </section>
  )
}

export default SkillsAndToolsScreen
