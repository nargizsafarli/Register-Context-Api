import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

function App() {
  return (
    <div>
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