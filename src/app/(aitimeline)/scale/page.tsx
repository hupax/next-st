import React from 'react'
import Upage from '@/components/upage'
import scaleSrc from '/public/scale.jpeg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale',
  // description: 'Scale your operations with Wrangler\'s AI-powered scaling tools — real-time insights, data-driven summaries, and actionable metrics at your fingertips.',
}


const Page = () => {
  const scaleContent = 'Scale your operations with Wrangler\'s AI-powered scaling tools — real-time insights, data-driven summaries, and actionable metrics at your fingertips.'
  return <Upage imgSrc={scaleSrc} altText="Scale" content={scaleContent} />
}

export default Page
