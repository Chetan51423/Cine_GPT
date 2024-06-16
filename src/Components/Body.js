import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Browser from './Browser'

const Body = () => {

  const AppRouter = createBrowserRouter([
    {
      path:"/",
      element:<Browser/>
    },
    {
      path:"/login",
      element:<Login/>
    },
  ])
  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body
