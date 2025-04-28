import React from 'react'
import homeSrc from '/public/Home.jpeg'
import Upage from '@/components/upage'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Wrangler — AI time line.',
}

const Page = () => {
  const homeContent = 'Welcome to Wrangler — AI time line.'
  return (
    <Upage imgSrc={homeSrc} altText='Home' content={homeContent}/>
  )
}

export default Page
