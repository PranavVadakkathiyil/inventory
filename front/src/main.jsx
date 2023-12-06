import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Adding from './Components/Adding/Adding.jsx'
import Home from './Components/Home/Home.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Signup from './Components/Landing/Signup/Signup.jsx'
import Login from './Components/Landing/Login/Login.jsx'
import Update from './Components/Update/Update.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
      <Route path='/'></Route>
      <Route path='Home' element={<Home/>}></Route>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Adding' element={<Adding/>}/>
      <Route path='Update/:id' element={<Update/>}></Route>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
