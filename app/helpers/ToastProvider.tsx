"use client"
import React, { Children, FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

interface ToastProviderProps {
  children: React.ReactNode
}

const ToastProvider: FC<ToastProviderProps> = ({children}) => {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    {children}
    </>
  )
}

export default ToastProvider