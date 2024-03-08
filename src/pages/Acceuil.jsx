import React from 'react'
import ResponsiveAppBar from '../composants/ResponsiveAppBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contenu from '../composants/Acceuil/Contenu'

const Acceuil = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Contenu/>
    </div>
  )
}

export default Acceuil