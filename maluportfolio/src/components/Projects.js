import Image from 'next/image'
import React from 'react'
import recoveryTrial from '../../public/recoverytrial.png'
import api from '../../public/api.png'
import { AiOutlineArrowRight } from "react-icons/ai"

const Projects = () => {
  return (
    <section id='projects' className='px-8 md:pr-36 md:pl-56 pl-12'>
      <h2 className='font-bold text-3xl pl-8 md:pl-0 py-8 md:pb-4 md:text-left'>Projects</h2>

      <div className='md:flex gap-4'>
        <div className='bg-white-100 mx-8 md:mx-0 rounded-xl border border-gray-200 px-6 md:px-4 py-4 mb-4 md:inline-block flex flex-col gap-2 w-[248px]'>
          <Image className='rounded-xl' src={recoveryTrial} alt="Showing the website on the computer and on the cellphone" />
          <h4 className='text-sm font-extrabold'>Recovery Trial</h4>
          <p className='text-xs text-gray-600'>A platform wich describes physical exercises based on the post-covid 19 sequelaes of each user. </p>
          <div className='flex flex-wrap justify-between'>
            <a className='flex items-center text-xs gap-1 underline' href="https://recoverytrial.com.br">Demo <AiOutlineArrowRight size={10} /></a>
          </div>
        </div>

        <div className='bg-white-100 mx-8 md:mx-0 rounded-xl border border-gray-200 px-6 md:px-4 py-4 mb-4 md:inline-block flex flex-col gap-2 w-[248px]'>
          <Image className='rounded-xl' src={api} alt="Showing the website on the computer and on the cellphone" />
          <h4 className='text-sm font-extrabold'>Magacare API</h4>
          <p className='text-xs text-gray-600'>APIRest for skin care e-commerce wishlists, integrating with customer and product modules.</p>
          <div className='flex flex-wrap justify-between'>
            <a className='flex items-center text-xs gap-1 underline' href="https://github.com/marialuisacampos/magacare-api">Repo <AiOutlineArrowRight size={10} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects