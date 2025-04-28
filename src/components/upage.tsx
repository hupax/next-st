import React from 'react'
import Image, { StaticImageData } from 'next/image'
import homeSrc from '/public/Home.jpeg'

interface UpageProps {
  imgSrc: StaticImageData
  altText: string
  content: string
}

const Upage = (props: UpageProps) => {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgSrc}
          alt={props.altText}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black/60"></div>
      </div>

      <div className="container mx-auto flex justify-center pt-96">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          {props.content}
        </h1>
      </div>
    </div>
  )
}

export default Upage
