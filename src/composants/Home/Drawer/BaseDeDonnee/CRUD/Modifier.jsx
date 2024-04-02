import { Box, Button } from '@mui/material'
import React from 'react'

const Modifier = ({onUpdate, showInput}) => {

    const handleClick = () =>{
        onUpdate()
    }

  return (
    <Box><Button onClick={handleClick} >{showInput?"Annuler":"Modifier"}</Button></Box>
  )
}

export default Modifier