import React from 'react'
import Image from 'next/image'
import profile from '@/public/profile.jpg'

export default function ProfilePage() {
  return (
    <div className={'size-full flex justify-center flex-col items-center'}>
      <div
        className={
          'max-w-4xl p-6 bg-gray-50 drop-shadow-md size-3/4 rounded-2xl flex flex-col justify-center items-center'
        }
      >
        <Image
          placeholder={'blur'}
          className={'rounded-full size-1/2'}
          src={profile}
          alt={'Profile Picture'}
        />
        <div className={'pt-2 font-medium text-2xl text-blue-500'}>Sakib Ahmed Tushar</div>
      </div>
      <div
        className={
          'max-w-4xl mt-6 p-6 bg-gray-50 gap-4 drop-shadow-md size-3/4 rounded-2xl flex flex-col justify-center'
        }
      >
        <div className={'text-xl font-medium text-gray-900'}>Frontend and Backend Expert</div>
        <div className={'text-lg text-gray-700'}>Frontend With Flutter and Nextjs</div>
        <div className={'text-lg text-gray-700'}>Backend with Nextjs and Hasura</div>
      </div>
    </div>
  )
}
