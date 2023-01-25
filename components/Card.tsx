import React from 'react'
import { userType } from '@/types/types';
import { useRouter } from 'next/router'

type CardPropsTypes = {
  user: userType
}

function Card({ user }:CardPropsTypes) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/users/${user.id}`)}
      className='flex bg-gray-100 w-96 rounded-xl p-3 m-3 gap-4 cursor-pointer hover:bg-gray-200'>
      <div className='text-2xl'>
        🦖
      </div>
      <div>
        <div className='flex items-center gap-2 '>
          <h3 className='font-medium'>{user.name}</h3>
          <p className='font-extralight text-xs'>@{user.username}</p>
        </div>
        <p className='text-sm text-gray-600'>Email: {user.email}</p>
        <p className='text-sm text-gray-600'>Company: {user.company.name}</p>
      </div>
    </div>

  )
}

export default Card

