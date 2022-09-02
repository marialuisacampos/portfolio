import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <aside className='ml-8 md:ml-32 min-h-scren fixed'>
      <ul className='flex flex-col gap-8'>
        <li><a href="https://www.linkedin.com/in/marialuisacampos">
          <FaLinkedin size={30} />
        </a></li>
        <li><a href="https://www.github.com/marialuisacampos">
          <FaGithub size={30} />
        </a></li>
        <li><a href="mailto:mluisa.cfl@gmail.com">
          <FaEnvelope size={30} />
        </a></li>
      </ul>
    </aside>
  )
}

export default SocialMedia