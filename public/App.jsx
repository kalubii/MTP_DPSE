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
import Carte from '../src/composants/Map/Carte'
import googleMapReact from '../src/pages/SimpleMap'
import SimpleMap from '../src/pages/SimpleMap'
import MapGoogle from '../src/pages/MapGoogle'
import PieActiveArc from '../src/composants/Home/Drawer/BaseDeDonnee/Projets/PieActiveArc'
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
            <Route path="/map" element={<Carte />} />
            <Route path="/simpleMap" element={<SimpleMap />} />
            <Route path="/mapGoogle" element={<MapGoogle />} />
            <Route path="/pieActive" element={<PieActiveArc />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
