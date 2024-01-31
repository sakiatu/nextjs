import './globals.css'
import favicon from '@/app/favicon.ico'
import Nav from '@/app/nav'

export const metadata = {
  title: 'Home',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href={'@/app/favicon.icon'} />
        <Nav />
        <div className={'p-6'}>{children}</div>
      </body>
    </html>
  )
}
