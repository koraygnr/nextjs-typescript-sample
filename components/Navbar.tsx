import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex justify-center sticky top-0 bg-green-600 py-6 '>
        <ul className='flex justify-center gap-6 text-white font-medium'>
          <Link href="/users"><li>Users</li></Link>
          <Link href="/posts"><li>All Posts</li></Link>
        </ul>     
    </nav>
  )
}

export default Navbar