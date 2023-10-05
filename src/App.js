import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx"

import Notfound from "./components/Notfound/Notfound.jsx"



import jwtDecode from 'jwt-decode'
import Home from './components/Home/Home.jsx'






export default function App() {







// eslint-disable-next-line no-undef





let routers=createBrowserRouter([
  {path:"",element:<Layout />,children:[
    {path:"home",element: <Home/>},

    {index:true,element: <Home/>},

      {path:"*",element: <Notfound/>}
  ]}
])


  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  </>
}
