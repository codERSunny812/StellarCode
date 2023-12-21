import React from 'react'
import Footer from './Componets/Footer/Footer'
import MainSection from './Componets/MainSection/MainSection'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Signup from './Componets/Auth/Signup'
import Login from './Componets/Auth/Login'
import ForgetPassowrd from './Componets/Auth/ForgetPassowrd'
import Auth from './Componets/Auth/Auth'

const App = () => {
  return (
    <div>
    {/* <Header/>
    <Body/> */}
    <MainSection/>
    <Footer/>
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/status',
    element:<Auth/>
  },
  {
     path:'/signUp',
     element:<Signup/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path:'/forgotpassword',
    element: <ForgetPassowrd />
  }
])

export default AppRouter;