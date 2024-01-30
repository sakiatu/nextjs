import { Metadata } from 'next'

export const metadata= {
  title: 'Dashboard',
}
export default function Page() {
  return <Alhamdulillah />
}

function Alhamdulillah() {
  return <div className='p-6 text-3xl '>Alhamdulillah, I can show Dashboard!</div>
}

