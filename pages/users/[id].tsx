import React from 'react'
import { useRouter } from 'next/router'
import useFetch from '@/customHooks/useFetch'
import { postType } from '@/types/types'
import Post from '@/components/Post'
import Card from '@/components/Card'
import { useContext } from 'react'
import UsersContext from '@/contexts/UsersContext'
import Spinner from '@/components/Spinner'

interface IFetch {
    data: postType[],
    isLoading: boolean
}

function userDetail() {
    const router = useRouter()
    const { id } = router.query
    const { data, isLoading }: IFetch = useFetch("posts")
    const filteredPost = data.filter(post => post.userId === Number(id))
    const { users } = useContext(UsersContext)
    const currentUser = users.find(user => user.id === Number(id))

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                {
                    currentUser && <Card user={currentUser} key={currentUser.id} />
                }
                <p className='border-b-2 mb-2'>All posts from the user;</p>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    isLoading
                        ? <Spinner />
                        : filteredPost.map(post => (
                            <Post post={post} key={post.id} />
                        ))
                }
            </div>
        </>

    )
}

export default userDetail