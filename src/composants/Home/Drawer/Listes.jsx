import React, { useState } from 'react'
import { Box, Button, MenuItem, TextField } from '@mui/material'
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

  const currencies = [
    {
      value: '2020',
      label: '2020',
    },
    {
      value: '2021',
      label: '2021',
    },
    {
      value: '2022',
      label: '2022',
    },
    {
      value: '2023',
      label: '2023',
    },
    {
      value: '2024',
      label: '2024',
    },
  ];

  function preventDefault(event) {
    event.preventDefault();
  }

  return (<>
    <Box sx={{ marginY:4}}>
        <Button onClick={onLocalite}>Voir liste Localités</Button>
        <Button onClick={onProjet}>Voir liste des projets</Button>

        <Box sx={{display:'flex',justifyContent:'center',margin:'auto'}}>
          <TextField
          id="standard-select-currency"
          select
          label="Année"
          defaultValue="2024"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>

        <Box sx={{ marginTop:3}}>
            {viewLocalite && <ListeLocalite/>}
            {viewProjet && <ListeProjets/>}
        </Box>
    </Box>
  </>
  )
}

export default Listes