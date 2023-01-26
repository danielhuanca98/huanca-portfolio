import Image from 'next/image'
import React from 'react'
import avatar from '../public/avatar.png'
import GithubIcon from 'components/GithubIcon'
import BehanceIcon from 'components/BehanceIcon'
import LinkedinIcon from 'components/LinkedinIcon'
import GmailIcon from 'components/GmailIcon'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='mt-8'>
      <div className='flex flex-row'>
        <div>
          <div className='flex flex-col shadow-xl p-8 gap-4 rounded-2xl bg-[#0F0E17] text-white'>
            <div className='box-content rounded-full [&>*]:rounded-full w-40 bg-gray-500'>
              <Image
                src={avatar}
                alt="avatar"
              />
            </div>
            <div className='flex flex-col text-sm gap-3'>
              <h1>Daniel P. Huanca</h1>
              <h2>React Developer</h2>
              <h2>UI/UX Designer</h2>
              <p>24 anos</p>
              <p>Botucatu, SP - Brasil</p>            
            </div>            
          </div>  
          <div className='flex flex-col mt-4 gap-4 text-sm font-medium'>
            <button className='flex items-center justify-left gap-2 py-3 px-4 pl-[30%] rounded-xl shadow-md'><GithubIcon fill='#4078c0' width={25} height={25}/>github</button>  
            <button className='flex items-center justify-left gap-2 py-3 px-4 pl-[30%] rounded-xl shadow-md'><LinkedinIcon fill="#0077b5" width={25} height={25}/>linkedin</button>  
            <button className='flex items-center justify-left gap-2 py-3 px-4 pl-[30%] rounded-xl shadow-md'><BehanceIcon fill="black" width={25} height={25}/>behance</button>     
            <button className='flex items-center justify-left gap-2 py-3 px-4 pl-[30%] rounded-xl shadow-md'><GmailIcon width={25} height={25}/>gmail</button>  
          </div>            
        </div>
        <div className='px-8 mx-4'> 
          <h1 className='font-semibold text-xl mb-4'>⛄ About me</h1>
          <p className='font-light text-sm'>I'm a front-end developer living in Brazil. I'm studying Software Engineering at Unicesumar University and learning Web Development. I have been programming for 1 year, working in freelance projects and personal projects building web and mobile applications using React.js, Firebase, Figma, and other technologies. Currently looking for opportunities as a developer or designer.</p>
          <h1 className='font-semibold text-xl mb-4 mt-8'>🚀 My Stack</h1>
          <p className='font-light text-sm my-3'>
            Front End:
              <button className='bg-[#222222] text-[#00D8FF] ml-4 py-1 px-3 mx-1 font-medium rounded-tr-xl'>React.js</button>
              <button className='bg-[#00D8FF] text-[#222222] py-1 px-3 mx-1 font-medium rounded-tr-xl'>React Native</button>
              <button className='bg-[black] text-[white] py-1 px-3 mx-1 font-medium rounded-tr-xl'>Next.js</button>
              <button className='bg-[#3178c6] text-[#FFF] py-1 px-3 mx-1 font-medium rounded-tr-xl'>Typescript</button>
          </p>
          <p className='font-light text-sm my-3'>
            Back End:
              <button className='bg-[#44883e] text-[white] py-1 ml-4 px-3 mx-1 font-medium rounded-tr-xl'>Node.js</button>
              <button className='bg-[#FFCA28] text-[#2C384A] py-1 px-3 mx-1 font-medium rounded-tr-xl'>Firebase</button>
              <button className='bg-[#5A67D8] text-[white] py-1 px-3 mx-1 font-medium rounded-tr-xl'>Prisma</button>
          </p>
          <h1 className='font-semibold text-xl mb-4 mt-8'>📚 Exploring</h1>
          <p className='font-light text-sm mb-3'>Here are some subjects I keep exploring in the React framework</p>
          <ul className='list-disc'>
            <li className='font-light text-sm'>Hooks API and stateful logic in functional components</li>
            <li className='font-light text-sm'>Complex components and reducers.</li>
            <li className='font-light text-sm'>Portals and event bubbling</li>
          </ul>
        </div>
      </div>      
    </div>
  )
}

export default About