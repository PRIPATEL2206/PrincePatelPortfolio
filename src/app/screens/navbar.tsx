import React from 'react'
import { FloatingNav } from '../components/navbar/flotingNavBarUi'

function Navbar() {
  const navItems = [
    { name: 'Home',       link: '#home' },
    { name: 'Experience', link: '#experience' },
    { name: 'Education',  link: '#education' },
    { name: 'Skills',     link: '#skills' },
    { name: 'Projects',   link: '#projects' },
    { name: 'Contact',    link: '#contact' },
  ]

  return <FloatingNav className="w-full" navItems={navItems} />
}

export default Navbar
