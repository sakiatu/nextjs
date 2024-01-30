import './globals.css'
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

function Navigation() {
  return (
    <nav
      className={
        `w-full bg-gray-50 h-20 flex justify-center items-center gap-10 shadow-md no-underline`
      }
    >
      <NavLink link="/">Home</NavLink>
      <NavLink link="/dashboard">Dashboard</NavLink>
    </nav>
  )
}

function NavLink({ link, children }: { link: string; children: React.ReactNode }) {
  return <Link href={link} className='text-xl text-blue-500 font-semibold'>{children}</Link>
}
