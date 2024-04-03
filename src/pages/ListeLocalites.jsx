import React, { useEffect, useState } from 'react'
import { Box, Button, MenuItem, TextField} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchBar from '../composants/Home/Drawer/BaseDeDonnee/SearchBar';
import Liste_RN from '../composants/Home/Drawer/BaseDeDonnee/Localites/Liste_RN';
import Ajouter from '../composants/Home/Drawer/BaseDeDonnee/CRUD/Ajouter';

function ListeLocalite() {

  const [dateSelectedIndex, setDateSelectedIndex] = useState(0);
  const [regionSelectedIndex, setRegionSelectedIndex] = useState('ANTANANARIVO');
  const [axeSearch,setAxeSearch] = useState(null)
  const [pkDebutSearch,setpkDebutSearch] = useState(null)
  const [pkFinSearch,setpkFinSearch] = useState(null)

  const handleAxeChange =(e)=>{
    setAxeSearch(e.target.value)
  }
  const handleDebutChange =(e)=>{
    setpkDebutSearch(e.target.value)
  }
  const handleFinChange =(e)=>{
    setpkFinSearch(e.target.value)
  }

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
      value: 'ANTANANARIVO',
      label: 'ANTANANARIVO',
    },
    {
      value: 'ANTSIRANANA',
      label: 'ANTSIRANANA',
    },
    {
      value: 'MAHAJANGA',
      label: 'MAHAJANGA',
    },
    {
      value: 'FIANARANTSOA',
      label: 'FIANARANTSOA',
    },
    {
      value: 'TOAMASINA',
      label: 'TOAMASINA',
    },
    {
      value: 'TOLIARA',
      label: 'TOLIARA',
    },
  ];

  return(<>  
  <Ajouter/>
  <Box sx={{marginBottom:4}}>      
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
                  label="Regions"
                  defaultValue="ANTANANARIVO"
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
            <Box sx={{marginLeft:3}}>
                <SearchBar/>
            </Box>
        </Box>
  </Box>

        <Box>
          <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Regions</TableCell>
                    <TableCell>Axes</TableCell>
                    <TableCell>PK Début</TableCell>
                    <TableCell>Localité Début</TableCell>
                    <TableCell>PK Fin</TableCell>
                    <TableCell>Localité Fin</TableCell>
                    <TableCell>Longueur (km)</TableCell>
                    <TableCell>Longueur traitée (km)</TableCell>
                    <TableCell>Nature Surface</TableCell>
                    <TableCell>Trafic</TableCell>
                    <TableCell>District</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { regionSelectedIndex == "ANTANANARIVO"?<Liste_RN region={regionSelectedIndex} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>: 
                    regionSelectedIndex == "ANTSIRANANA"?<Liste_RN region={regionSelectedIndex} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>:
                    regionSelectedIndex == "MAHAJANGA"?<Liste_RN region={regionSelectedIndex} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>:
                    regionSelectedIndex == "FIANARANTSOA"?<Liste_RN region={regionSelectedIndex} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>:
                    regionSelectedIndex == "TOAMASINA"?<Liste_RN region={regionSelectedIndex} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>:
                    regionSelectedIndex == "TOLIARA"?<Liste_RN region={regionSelectedIndex} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>: null
                  }
                </TableBody>
              </Table>
            </React.Fragment>

          </Box>
      </>
    )
}


export default ListeLocalite