import React, { useState } from 'react'
import { Box, Button} from '@mui/material'
import ListeLocalite from '../../../pages/ListeLocalites'
import ListeProjets from '../../../pages/ListeProjets'

const Listes = () => {

  const [viewLocalite,setViewLocalite] = useState(true)
  const [viewProjet,setViewProjet] = useState(false)

  const onLocalite = () =>{
    setViewLocalite(true)
    setViewProjet(false)
  }
  const onProjet = () =>{
    setViewLocalite(false)
    setViewProjet(true)
  }


  return (<>
    <Box sx={{ marginY:4}}>
        <Button onClick={onLocalite}>Voir liste Localités</Button>
        <Button onClick={onProjet}>Voir liste des projets</Button>
    </Box>


        <Box sx={{ marginTop:3}}>
            {viewLocalite && <ListeLocalite/>}
            {viewProjet && <ListeProjets/>}
        </Box>
  
  </>
  )
}

export default Listes