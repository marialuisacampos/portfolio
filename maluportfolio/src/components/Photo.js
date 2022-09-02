import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/malu.png'

const Photo = () => {
  return (
    <div className='max-w-[250px] md:max-w-[600px]'>
      <Image className='rounded-full' src={profilePic} alt="Picture of a woman with glasses smiling. She's wearing white shirt, sitting on a table and with a green wall behind her." />
    </div>
  )
}

export default Photo