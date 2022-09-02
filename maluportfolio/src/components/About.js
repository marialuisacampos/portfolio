import React from 'react'
import Photo from './Photo'

const About = () => {
  return (
    <section className='px-8 md:pr-36 md:pl-56 pl-20'>
      <h2 className='font-bold text-3xl py-8 md:pb-4 md:text-left'>About me</h2>
      <div className="md:hidden md:mr-32 flex justify-center">
        <Photo />
      </div>
      <p className='mt-4 text-gray-600 text-sm md:text-base md:text-left md:mt-2 md:mr-28'>Junior Frontend Developer majoring in Information Systems at the UFRPE. I see myself as a curious, with an ease of learning, communicative and organized professional. I love learning and developing inovative systems.</p>
      <p className='mt-4 text-gray-600 text-sm md:text-base md:text-left md:mt-2 md:mr-28 italic'>My studies and experiences are focused on the JavaScript stack, but at the end of the day I&apos;m a developer who accepts and loves new chalenges.</p>
      <p className='mt-4 text-gray-600 text-sm md:text-base md:text-left md:mt-2 md:mr-28'>During my free times I&apos;m an aerial acrobat, artisan and voracious book reader. Also a great admirer of genius horror movies and cat lover!</p>
      <p className='mt-4 text-gray-600 text-sm md:text-base md:text-left md:mt-2 md:mr-28'>Oh, and the biggest fan of Coldplay you will ever met :)</p>
    </section>
  )
}

export default About