import React, { useState } from 'react'
import { Box, Button} from '@mui/material'
import ListeLocalite from '../../../pages/ListeLocalites'
import ListeProjets from '../../../pages/ListeProjets'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Listes = () => {

  const [Map,setMap] = useState(true)
  const [viewProjet,setViewProjet] = useState(false)

  const onMap = () =>{
    setMap(true)
    setViewProjet(false)
  }
  const onProjet = () =>{
    setMap(false)
    setViewProjet(true)
  }


  return (<>
    <Box sx={{ marginY:4}}>
        {/* <Button startIcon={<LocationOnOutlinedIcon/>} onClick={onMap}>Carte</Button> */}
        {/* <Button startIcon={<ListAltIcon/>} onClick={onProjet}>projets</Button> */}
    </Box>


        <Box sx={{ marginTop:3}}>
            {Map && <ListeLocalite/>}
            {viewProjet && <ListeProjets/>}
        </Box>
  
  </>
  )
}

export default Listes