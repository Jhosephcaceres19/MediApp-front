import { App } from '../App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { User } from '../page/user/User'
import { Doctor } from '../page/doctor/Doctor'
import { FormDoctor } from './FormDoctor'

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
        },
        {
          path:"/formdoctor",
          element: <FormDoctor/>
        }
    ]

    const router = createBrowserRouter([
        ...routesForPublic,
    ])
  return (
    <RouterProvider router={router}/>
  )
}
