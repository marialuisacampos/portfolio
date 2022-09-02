import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="flex justify-between my-8 mx-8 md:my-12 md:mx-32">
      <h1 className='font-extrabold md:font-normal'>Malu</h1>
      <ul className='flex gap-4 md:gap-12 list-none'>
        <li className='cursor-pointer'><Link to='skills' spy={true} smooth={true} offset={0} duration={500}>Skills</Link></li>

        <li className='cursor-pointer'><Link to='projects' spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>

        <li className='cursor-pointer'><Link to='experience' spy={true} smooth={true} offset={50} duration={500}>Experience</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar