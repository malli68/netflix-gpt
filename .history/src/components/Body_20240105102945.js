import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react';

const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Body/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
       
    ])
  return (
    <div>
  <RouterProvider router={appRouter}>

  </RouterProvider>
    </div>
  )
}

export default Body