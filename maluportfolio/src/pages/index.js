import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Photo from '../components/Photo'
import SocialMedia from '../components/SocialMedia'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className='flex flex-1'>
        <SocialMedia />
        <Profile />
        <div className="hidden md:inline mr-32">
          <Photo />
        </div>
      </header>
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}
