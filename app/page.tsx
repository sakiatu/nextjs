'use client'
import { useState } from 'react'

export default function HomePage() {
  const [items, setItems] = useState(Object())

  const fetchTimes = async (e: any) => {
    e.preventDefault()
    const location = document.querySelector('input')?.value
    setItems({
      'loading...': `${location}`,
    })
    try {
      const res = await fetch('/api/config', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', location: `${location}` },
      })
      const data = await res.json()
      const times = data.items[0] || {}

      setItems(times)
    } catch (error) {
      setItems('error')
      console.log(error)
    }
  }

  return (
    <div className={'flex items-center flex-col'}>
      <div className={'p-2 border-2 rounded-2xl'}>
        <form onSubmit={fetchTimes}>
          <input
            id={'search'}
            type="text"
            name={'location'}
            placeholder="Location..."
            className={'text-5xl focus:outline-none '}
          />
          <button
            type={'submit'}
            className={'text-5xl px-8 py-4 items-end bg-blue-500 text-white rounded-2xl'}
          >
            Search
          </button>
        </form>
      </div>
      <div className={''}>
        <div className={'p-16 m-12 max-w-2xl bg-green-100 rounded-2xl'}>
          <div className={'text-4xl py-6'}>
            {Object.keys(items).map((key) => (
              <div key={key}>
                <div className={'columns-2 py-3'}>
                  <div className={'text-green-500 min-w-20'}>{key.toUpperCase()}</div>
                  <div className={'text-green-700 font-medium ml-12'}>{items[key].toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
