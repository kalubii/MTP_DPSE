import React, { useState } from 'react'
import { Box, Button} from '@mui/material'
import ListeLocalite from '../../../pages/ListeLocalites'
import ListeProjets from '../../../pages/ListeProjets'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';

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
        <Button startIcon={<LocationOnOutlinedIcon/>} onClick={onLocalite}>Voir liste Localités</Button>
        <Button startIcon={<ListAltIcon/>} onClick={onProjet}>Voir liste des projets</Button>
    </Box>


        <Box sx={{ marginTop:3}}>
            {viewLocalite && <ListeLocalite/>}
            {viewProjet && <ListeProjets/>}
        </Box>
  
  </>
  )
}

export default Listes