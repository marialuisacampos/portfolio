import React from 'react'
import Photo from './Photo'

const About = () => {
  return (
    <section className='px-8 md:pr-36 md:pl-56 pl-20'>
      <h2 className='font-bold text-3xl py-8 md:pb-4 md:text-left'>About me</h2>
      <div className="md:hidden md:mr-32 flex justify-center">
        <Photo />
      </div>
      <p className='mt-4 text-gray-600 text-sm md:text-base md:text-left md:mt-2'>Junior Frontend Developer majoring in Information Systems at the UFRPE. I see myself as a curious, with an ease of learning, communicative and organized professional. I love learning and developing inovative systems. </p>
    </section>
  )
}

export default About