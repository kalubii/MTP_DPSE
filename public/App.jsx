import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/pages/Login'
import AuthProvider from '../src/providers/AuthProviders'
import Home from '../src/pages/Home'
import Loading from '../src/composants/Loading'
import Demarrage from '../src/pages/Demarrage'
import ListeProjets from '../src/pages/ListeProjets'
import Listes from '../src/composants/Home/Drawer/Listes'
import VoirPlusPage from '../src/pages/VoirPlusPage'
import DataGridPremiumDemo from '../src/composants/Home/Drawer/BaseDeDonnee/Projets/DataGrid'

function App() {

  return (
    <>
     <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Demarrage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listeLocalite" element={<Listes />} />
            <Route path="/listeProjet" element={<ListeProjets />} />
            <Route path="/voirPlus" element={<DataGridPremiumDemo />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
