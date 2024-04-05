import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'

const SearchBar = ({handleRegionChange,handleAxeChange,handleDebutChange,handleFinChange}) => {

  return (<>
       <Box sx={{display:'flex'}}>   
        <TextField id="standard-search" onChange={handleRegionChange} sx={{marginX:4}} label="Region" type="search" variant="standard"/>    
        <TextField id="standard-search" onChange={handleAxeChange} label="Axes" type="search" variant="standard"/>
        <TextField id="standard-search" onChange={handleDebutChange} sx={{marginX:4}} label="PK Début" type="search" variant="standard"/>
        <TextField id="standard-search" onChange={handleFinChange} label="PK Fin" type="search" variant="standard"/>
    </Box>

    
</>
  )
}

export default SearchBar