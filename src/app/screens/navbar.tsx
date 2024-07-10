import React from 'react'
import { FloatingNav } from '../components/navbar/flotingNavBarUi'

function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "#",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Experience",
            link: "#experience",
        },
        {
            name: "Skill & Tools",
            link: "#skill&tools",
        },
        {
            name: "Projects",
            link: "#projects",
        },


    ];
    return (
        <FloatingNav navItems={navItems} />
    )
}

export default Navbar
