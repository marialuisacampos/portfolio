import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai"

const Skills = () => {
  const frontEndSkills = ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "TypeScript", "Tailwind", "MaterialUI"];
  const backEndSkills = ["NodeJS", "ExpressJS", "MySQL", "PostgreSQL", "MongoDB"];

  return (
    <section className='px-8 md:pr-36 md:pl-56 pl-12'>
      <h2 className='font-bold text-3xl pl-8 md:pl-0 py-8 md:pb-4 md:text-left'>Skills</h2>
      <div className='md:flex gap-4'>
        <div className='bg-white-100 mx-8 md:mx-0 rounded-xl border border-gray-200 px-6 md:px-4 py-4 mb-4 w-[248px] md:inline-block h-[150px]'>
          <h3 className='font-extrabold text-sm text-center mb-4'>FrontEnd Development</h3>
          <ul className='grid grid-cols-2'>
            {
              frontEndSkills.map((skill) => (
                <li className='text-xs flex items-center gap-1' key={skill}><AiFillCheckCircle /> {skill}</li>
              ))
            }
          </ul>
        </div>


        <div className='bg-white-100 mx-8 rounded-xl border border-gray-200 px-6 md:px-4 py-4 w-[248px] md:inline-block h-[150px] md:mx-0'>
          <h3 className='font-extrabold text-sm text-center mb-4'>BackEnd Development</h3>
          <ul className='grid grid-cols-2'>
            {
              backEndSkills.map((skill) => (
                <li className='text-xs flex items-center gap-1' key={skill}> <AiFillCheckCircle /> {skill}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills