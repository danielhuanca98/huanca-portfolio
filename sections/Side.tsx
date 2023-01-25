import React from 'react'

import GithubIcon from 'components/GithubIcon'
import BehanceIcon from 'components/BehanceIcon'
import LinkedinIcon from 'components/LinkedinIcon'

type Props = {}

const Side = (props: Props) => {
  return (
    <aside className='flex flex-col my-auto mr-24 gap-5'>
      <a>
        <GithubIcon fill={'currentColor'} stroke={'none'} width="2em"  height="2em"/>
      </a>
      <a>
        <BehanceIcon fill={'currentColor'} stroke={'none'} width="2em"  height="2em"/>
      </a>
      <a>
        <LinkedinIcon fill={'currentColor'} stroke={'none'} width="2em"  height="2em"/>
      </a>
    </aside>
  )
}

export default Side