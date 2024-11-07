import React from 'react'
import { Article } from './Article'
import { Header } from './Header'

export const App = () => {
  return (
    <div className='bg-sky-600/50 h-screen'>
      <Header/>
      <Article/>
    </div>
  )
}
