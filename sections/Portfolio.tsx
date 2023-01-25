import React from 'react'
import GithubIcon from 'components/GithubIcon'
import Image from 'next/image'

import habistPic from '../public/habits.png'
import spotifyPic from '../public/spotify.png'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <div>
      <h1 className='font-semibold text-4xl my-16'>Portfolio</h1>
      <section>
        <div className='grid grid-cols-2 auto-cols-max gap-10'>
          <div className='box-content [&>*]:shadow-lg [&>*]:rounded-xl'>
            <Image 
              alt="habits app" 
              src={habistPic} 
              style={{objectFit: "contain"}}
            />
          </div>
          <div className='flex flex-col justify-between p-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-4 mb-6'>
                <label className='py-1 px-3 bg-blue-300 rounded-3xl text-black text-xs'>React</label>
                <label className='py-1 px-3 bg-blue-700 rounded-3xl text-white text-xs'>Typescript</label>
                <label className='py-1 px-3 bg-red-300 rounded-3xl text-white text-xs'>Tailwind</label>
                <label className='py-1 px-3 bg-green-500 rounded-3xl text-white text-xs'>Prisma</label>
              </div>
              <h2 className='font-semibold text-3xl mb-4'>Habits App</h2>
              <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-4'>                
                <GithubIcon fill={'currentColor'} stroke={'none'} width="2em"  height="2em"/>
                <GithubIcon fill={'currentColor'} stroke={'none'} width="2em"  height="2em"/>
              </div>
              <button className='bg-[#22252E] text-white py-2 px-6 rounded-lg shadow-lg'>
                Saiba mais
              </button>
            </div>
          </div>
          <div className='box-content [&>*]:shadow-lg [&>*]:rounded-xl'>
            <Image 
              alt="spotify browser" 
              src={spotifyPic} 
            />
          </div>
          <div className='box-content [&>*]:shadow-lg [&>*]:rounded-xl'>
            <Image 
              alt="spotify browser" 
              src={spotifyPic} 
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio