'use client'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 my-auto ">
      <div>
        <h2>Dashboard Template {count}</h2>
        <button
          className="bg-black my-4 rounded-md text-white p-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      {children}
    </div>
  )
}
