import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkData = [
  { name: 'Performance', href: '/performance' },
  { name: 'Reliability', href: '/reliability' },
  { name: 'Scale', href: '/scale' },
]


export default function Header() {
  const pathname = usePathname()

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8 text-white items-center">
        <Link
          className={`text-3xl font-bold ${
            pathname === '/' ? 'text-purple-500' : ''
          }`}
          href="/"
        >
          Home
        </Link>
        <div className="flex text-xl space-x-4">
          {linkData.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname === link.href ? 'text-purple-500' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
