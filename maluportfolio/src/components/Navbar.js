import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between my-8 mx-8 md:my-12 md:mx-32">
      <h1 className='font-extrabold md:font-normal'>Malu</h1>
      <ul className='flex gap-4 md:gap-12 list-none'>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
      </ul>
    </nav>
  )
}

export default Navbar