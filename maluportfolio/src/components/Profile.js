import React from 'react'
import { HiDownload } from "react-icons/hi";

const Header = () => {
  return (
    <div className='flex flex-col gap-4 ml-20 md:ml-56 pr-10 md:pr-8'>
      <h1 className='font-bold text-4xl md:text-6xl'>Hi! I&apos;m Maria Luísa</h1>
      <span className='text-sm md:text-base'>FrontEnd Developer</span>
      <p className='text-gray-400 text-sm md:text-base'>Based in Recife, Brazil. Motivated by improving inclusion and diversity and impacting people&apos;s lives through technology.</p>
      <a className='text-sm md:text-base bg-black max-w-[130px] text-white-100 flex justify-center gap-2 rounded-lg py-2 md:py-4' href="https://docs.google.com/document/d/1q0b7GcFmviTE9Bq8bU432fRx_eEMndKW/edit?usp=sharing&ouid=108857821590890426663&rtpof=true&sd=true">Resume <HiDownload className='self-center' /></a>
    </ div>
  )
}

export default Header