import Image from 'next/image'
import React from 'react'
import avatar from '../public/avatar.png'
import GithubIcon from 'components/GithubIcon'
import BehanceIcon from 'components/BehanceIcon'
import LinkedinIcon from 'components/LinkedinIcon'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col my-24'>
      <h1 className='font-semibold text-4xl my-8'>About</h1>
      <div className='flex'>
        <div className='flex flex-col shadow-xl p-8 gap-4 rounded-2xl bg-[#0F0E17] text-white'>
          <div className='box-content rounded-full [&>*]:rounded-full w-40 bg-gray-500'>
            <Image
              src={avatar}
              alt="avatar"
            />
          </div>
          <div>
            <h1>Daniel P. Huanca</h1>
            <h2>Front-end Developer</h2>
            <h2>UI/UX Designer</h2>
            <p>24 anos</p>
            <p>Botucatu, SP - Brasil</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 shadow-xl p-8 mx-4'>
          <div className='flex items-center gap-3'><GithubIcon width={30} height={30}/>github.com/danielhuanca98</div>
          <div className='flex items-center gap-3'><BehanceIcon width={30} height={30}/>behance.net/danielhuanca98</div>
          <div className='flex items-center gap-3'><LinkedinIcon width={30} height={30}/>linkedin.com/in/daniel-huanca/</div>
          <div className='flex items-center gap-3'><LinkedinIcon width={30} height={30}/>huancadev@gmail.com</div>
        </div>
      </div>      
    </div>
  )
}

export default About