import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Side from './Side'

type Props = {}

const Main = (props: Props) => {
  const { theme } = useTheme()

  return (
    <div className='grid grid-flow-col auto-cols-auto flex-row flex-grow'>
      <Side/>
      <section>
        <Image
          src={theme === 'dark' ? "/typingDark.svg" : "typing.svg"}
          alt="programming"
          width={360}
          height={311}
          priority
        />
        <h2 className='font-normal text-2xl mt-10'>Hi, I’m</h2>
        <h1 className='font-semibold text-4xl my-2'>Daniel Huanca</h1>
        <h2 className='font-normal text-2xl'>Web developer and UX designer</h2>
        <p className='font-light text-base max-w-lg my-10'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
      </section>
    </div>
  )
}

export default Main