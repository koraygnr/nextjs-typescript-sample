import React from 'react'
import Card from '@/components/Card';
import { useContext } from 'react';
import UsersContext from '@/contexts/UsersContext';
import Spinner from '@/components/Spinner';

function users() {
  const { users, isLoading } = useContext(UsersContext)

  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {
          isLoading
            ? <Spinner />
            : users.map(user => (
              <Card
                key={user.id} 
                user={user}
              />
            ))
        }
      </div>
    </>
  )
}

export default users