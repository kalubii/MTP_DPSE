import { Button } from '@mui/material'
import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const Ajouter = () => {
  return (<>
    <Button variant='outlined' color='success' startIcon={<AddRoundedIcon/>}> Insérer </Button>
  </>
  )
}
export default Ajouter