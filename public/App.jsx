import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/pages/Login'
import AuthProvider from '../src/providers/AuthProviders'
import Home from '../src/pages/Home'
import Loading from '../src/composants/Loading'
import Demarrage from '../src/pages/Demarrage'

function App() {

  return (
    <>
     <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Demarrage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
