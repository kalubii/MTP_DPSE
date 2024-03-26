import React, { useEffect, useState } from 'react'
import { Box, Button, MenuItem, TextField} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import LocaliteTana2023 from '../composants/Home/Drawer/BaseDeDonnee/Localites/2023/LocaliteTana2023';
import LocaliteAntsiranana2023 from '../composants/Home/Drawer/BaseDeDonnee/Localites/2023/LocaliteAntsiranana2023';
import LocaliteMahajanga2023 from '../composants/Home/Drawer/BaseDeDonnee/Localites/2023/LocaliteMahajanga2023';
import LocaliteFianarantsoa2023 from '../composants/Home/Drawer/BaseDeDonnee/Localites/2023/LocaliteFianarantsoa2023';
import LocaliteToamasina2023 from '../composants/Home/Drawer/BaseDeDonnee/Localites/2023/LocaliteToamasina2023';
import LocaliteToliara2023 from '../composants/Home/Drawer/BaseDeDonnee/Localites/2023/LocaliteToliara2023';

function ListeLocalite() {

  const [dateSelectedIndex, setDateSelectedIndex] = useState(0);
  const [regionSelectedIndex, setRegionSelectedIndex] = useState('Antananarivo');

  const onItemClicked = (index) => {
    setDateSelectedIndex(index);
   };

   const onRegionClicked = (name) => {
    setRegionSelectedIndex(name)
   };

  const annees = [
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

  const Regions = [
    {
      id: 1,
      value: 'Antananarivo',
      label: 'Antananarivo',
    },
    {
      id: 2,
      value: 'Antsiranana',
      label: 'Antsiranana',
    },
    {
      id: 3,
      value: 'Mahajanga',
      label: 'Mahajanga',
    },
    {
      id: 4,
      value: 'Fianarantsoa',
      label: 'Fianarantsoa',
    },
    {
      id: 5,
      value: 'Toamasina',
      label: 'Toamasina',
    },
    {
      id: 6,
      value: 'Toliara',
      label: 'Toliara',
    },
  ];






  return(<>        
        <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display:'flex',
                justifyContent:'center'
              }}
              noValidate
              autoComplete="off">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Region"
                  defaultValue="Antananarivo"
                >
                  {Regions.map((option) => (
                    <MenuItem key={option.value} value={option.value} onClick={()=>{
                      return onRegionClicked(option.value)
                    }}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
        </Box>

      <Box sx={{display:'flex',justifyContent:'center',margin:'auto'}}>
            <TextField
            id="standard-select-currency"
            select
            label="Année"
            defaultValue="2024"
              variant="standard"
            >
              {annees.map((option,index) => (
                <MenuItem key={option.value} value={option.value} onClick={() =>{
                  return onItemClicked(index)
                }}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
        </Box>
        <Box>
          <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Provinces</TableCell>
                    <TableCell>Axes</TableCell>
                    <TableCell>Section</TableCell>
                    <TableCell>PK Début</TableCell>
                    <TableCell>Localité Début</TableCell>
                    <TableCell>PK Fin</TableCell>
                    <TableCell>Localité Fin</TableCell>
                    <TableCell>Longueur (km)</TableCell>
                    <TableCell>Longueur traitée (km)</TableCell>
                    <TableCell>Nature Surface</TableCell>
                    <TableCell>Région</TableCell>
                    <TableCell>Gestionnaire de l'axe</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { dateSelectedIndex === 3 && regionSelectedIndex == "Antananarivo"?<LocaliteTana2023/>: 
                    dateSelectedIndex === 3 && regionSelectedIndex == "Antsiranana"?<LocaliteAntsiranana2023/>:
                    dateSelectedIndex === 3 && regionSelectedIndex == "Mahajanga"?<LocaliteMahajanga2023/>:
                    dateSelectedIndex === 3 && regionSelectedIndex == "Fianarantsoa"?<LocaliteFianarantsoa2023/>:
                    dateSelectedIndex === 3 && regionSelectedIndex == "Toamasina"?<LocaliteToamasina2023/>:
                    dateSelectedIndex === 3 && regionSelectedIndex == "Toliara"?<LocaliteToliara2023/>: null
                  }
                </TableBody>
              </Table>
            </React.Fragment>
          </Box>
      </>
    )
}


export default ListeLocalite