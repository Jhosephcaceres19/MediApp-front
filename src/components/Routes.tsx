import React from 'react'
import { App } from '../App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { User } from '../page/user/User'
import { Doctor } from '../page/doctor/Doctor'

export const Routes = () => {
    const routesForPublic = [
        {
            path: "/",
            element:<App/>
        },
        {
          path:"/user",
          element:<User/>
        },
        {
          path: "/doctor",
          element:<Doctor/>
        }
    ]

    const router = createBrowserRouter([
        ...routesForPublic,
    ])
  return (
    <RouterProvider router={router}/>
  )
}
