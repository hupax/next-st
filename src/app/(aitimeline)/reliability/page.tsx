import React from 'react'
import Upage from '@/components/upage'
import reliabilitySrc from '/public/reliability.jpeg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliability',
  // description: 'Ensure your operations are always up and running with Wrangler\'s AI-powered reliability tools — real-time insights, data-driven summaries, and actionable metrics at your fingertips.',
}

const Page = () => {

  const reliabilityContent = 'Ensure your operations are always up and running with Wrangler\'s AI-powered reliability tools — real-time insights, data-driven summaries, and actionable metrics at your fingertips.'

  return (
  <Upage imgSrc={reliabilitySrc} altText="Reliability" content={reliabilityContent} />
)
}

export default Page
