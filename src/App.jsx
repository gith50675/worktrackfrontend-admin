import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      errorElement:<ErrorPage/>,
      element:"",

      children:[
        {
          index:true,
          element:<SignupPage/>
        },
        {
          path:"/login",
          element:<LoginPage/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
