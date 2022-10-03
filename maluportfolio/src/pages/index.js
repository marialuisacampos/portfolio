import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Photo from '../components/Photo'
import SocialMedia from '../components/SocialMedia'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='md:mx-32'>
      <Head>
        <title>Maria Luísa Campos</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Navbar />
      <header className='flex flex-1'>
        <SocialMedia />
        <Profile />
        <div className="hidden md:inline mr-36">
          <Photo />
        </div>
      </header>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}
