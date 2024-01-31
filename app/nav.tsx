'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  return (
    <nav
      className={`w-full bg-gray-50 h-20 p-4 gap-10 flex justify-center items-center shadow-md no-underline`}
    >
      <NavLink link="/">Home</NavLink>
      <NavLink link="/dashboard">Dashboard</NavLink>
      <NavLink link="/profile">Profile</NavLink>
    </nav>
  )
}

function NavLink({ link, children }: { link: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const active = pathname === link
  return (
    <Link
      href={link}
      className={`flex justify-center items-center px-4 py-2 rounded-xl text-xl text-blue-500 h-full text-center font-semibold ${active ? 'bg-blue-50' : ''}`}
    >
      {children}
    </Link>
  )
}
