import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div>      
      <div
        className='font-light text-sm text-center p-8 mt-32 italic max-w-2xl mx-auto'
      >
        "Some people, when confronted with a problem, think 'I know, I'll use regular expressions.' Now they have two problems." -Jamie Zawinski
      </div>
      
      <div className='bg-black h-6 w-full absolute left-0'></div>
    </div>
  )
}