import React from 'react'
import ResponsiveAppBar from '../composants/ResponsiveAppBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from "../composants/Acceuil/Slider"
import Jumbotron from '../composants/Acceuil/Jumbotron'
import "bootstrap/dist/css/bootstrap.min.css"


const Acceuil = () => {
  return (
    <div className='mt-2'>
        <ResponsiveAppBar/>
        <Slider/>
        <Jumbotron/>
    </div>
  )
}

export default Acceuil