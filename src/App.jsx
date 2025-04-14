import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
    <ToastContainer  position="top-right" autoClose={3000}></ToastContainer>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App