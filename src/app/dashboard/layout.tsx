'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const linkData = [
  { name: 'About', href: '/dashboard/about' },
  { name: 'Settings', href: '/dashboard/settings'}
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()
  return (
    <div
    className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10"
    >
      <div className="flex gap-4 font-bold text-lg  mb-4 ">
       {/*  <Link className={pathname === '/dashboard/about' ? 'text-purple-500':''} href="/dashboard/about"> About</Link>
        <Link className={pathname === '/dashboard/settings' ? 'text-purple-500':''} href="/dashboard/settings"> Settings</Link> */}
        {
          linkData.map((link) => (
            <Link key={link.name} className={ pathname === link.href ?
              'text-purple-500' : 'text-black'
            } href={link.href}>{link.name}</Link>
          ))
        }
      </div>
      <div>
        <h2>Dashboard Layout {count}</h2>
        <button className="bg-black my-4 rounded-md text-white p-2" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      {children}
    </div>
  )
}
