import useFetch from '@/customHooks/useFetch'
import { postType } from '@/types/types'
import React from 'react'
import Post from '@/components/Post'
import Spinner from '@/components/Spinner'

interface IUseFetch {
  data: postType[],
  isLoading: boolean
}

function posts() {
  // customHooks (useFetch)
  const { data, isLoading }: IUseFetch = useFetch("posts")

  return (
    <div className='flex flex-wrap justify-center'>
      {
        isLoading
          ? <Spinner />
          : data.map( post => (
            <Post
              key={post.id}
              post={post}
            />
          ))
      }
    </div>
  )
}

export default posts