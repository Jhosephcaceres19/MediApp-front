import React from 'react'
import { Article } from './Article'
import { Header } from './Header'

export const App = () => {
  return (
    <div className="bg-sky-600/50 min-h-screen sm:bg-sky-600/50 md:bg-sky-600/50 lg:bg-sky-600/50">
      <Header />
      <Article />
    </div>
  )
}
