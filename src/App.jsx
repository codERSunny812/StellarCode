import React from 'react'
import Footer from './Componets/Footer/Footer'
import MainSection from './Componets/MainSection/MainSection'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Auth from './Auth/Auth'
import Signup from './Componets/Auth/Signup'
import Login from './Componets/Auth/Login'
import ForgetPassowrd from './Componets/Auth/ForgetPassowrd'

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
    element:<App/>
  },
  {
    path:'/auth',
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