import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './App.jsx'
import { SessionContextProvider } from './Context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <SessionContextProvider>
        <RouterProvider router={AppRouter} />
      </SessionContextProvider>
    </ChakraProvider>
   
  </React.StrictMode>,
)
