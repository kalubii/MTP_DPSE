import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Acceuil from '../src/pages/Acceuil'
import Login from '../src/pages/Login'
import AuthProvider from '../src/providers/AuthProviders'
import Home from '../src/pages/Home'
import Dashboard from '../src/composants/Home/Dashboard/Dashboard'

function App() {

  return (
    <>
     <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Acceuil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
