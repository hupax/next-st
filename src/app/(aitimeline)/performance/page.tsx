import React from 'react'
import Upage from '@/components/upage'
import performanceSrc from '/public/performance.jpeg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance',
  // description: 'Maximize your efficiency with Wrangler\'s AI-powered performance tracking — real-time insights, data-driven summaries, and actionable metrics at your fingertips.',
}

const Page = () => {

  const performanceContent = 'Maximize your efficiency with Wrangler\'s AI-powered performance tracking — real-time insights, data-driven summaries, and actionable metrics at your fingertips.'

  return (
      <Upage imgSrc={performanceSrc} altText="Performance" content={performanceContent} />
  )
}

export default Page
