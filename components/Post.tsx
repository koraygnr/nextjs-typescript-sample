import React from 'react'
import { postType } from '@/types/types'

type PostPropsTypes = {
    post: postType
}

function Post({ post }:PostPropsTypes ) {
    
    return (
        <div className='flex bg-gray-100 w-96 rounded-xl p-3 m-3 gap-4 cursor-pointe'>
            <div className='text-2xl'>
                📌
            </div>
            <div>
                <div className='flex items-center gap-2 '>
                    <h3 className='font-medium'>{post.title}</h3>
                </div>
                <p className='text-sm text-gray-600'>{post.body}</p>
            </div>
        </div>
    )
}

export default Post