import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutPropsTypes = {
  children: JSX.Element
}

function Layout({ children }: LayoutPropsTypes) {
  return (
    <>
      <Navbar />
      <main className='max-w-4xl mx-auto'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout