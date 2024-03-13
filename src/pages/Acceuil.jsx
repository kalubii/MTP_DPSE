import React from 'react'
import ResponsiveAppBar from '../composants/ResponsiveAppBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from "../composants/Acceuil/Slider"
import Jumbotron from '../composants/Acceuil/Jumbotron'
import "bootstrap/dist/css/bootstrap.min.css"
import TypeWriter from '../composants/Acceuil/TypeWriter'


const Acceuil = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <div className='d-flex m-auto justify-content-center mb-4'>
         <TypeWriter/>
        </div>
        <Slider/>
        <Jumbotron/>
    </div>
  )
}

export default Acceuil