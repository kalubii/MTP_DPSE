import React, { useEffect, useState } from 'react'
import { Box, Button, MenuItem, TextField} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchBar from '../composants/Home/Drawer/BaseDeDonnee/SearchBar';
import Liste_RN from '../composants/Home/Drawer/BaseDeDonnee/Localites/Liste_RN';



function ListeLocalite() {

  const [dateSelectedIndex, setDateSelectedIndex] = useState(0);
  const [faritanySelectedIndex, setfaritanySelectedIndex] = useState('ANTANANARIVO');
  const [regionSearch,setRegionSearch] = useState('')
  const [axeSearch,setAxeSearch] = useState('')
  const [pkDebutSearch,setpkDebutSearch] = useState('')
  const [pkFinSearch,setpkFinSearch] = useState('')

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

  const onItemClicked = (index) => {
    setDateSelectedIndex(index);
   };

   const onFaritanyCliked = (name) => {
    setfaritanySelectedIndex(name)
    console.log(name)
   };


  return(<>  
  <Box sx={{marginBottom:4}}>      
        <Box noValidate  autoComplete="off" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, display:'flex', justifyContent:'center'}}>
            <TextField select label="Faritany" id="outlined-select-currency" defaultValue="ANTANANARIVO">

                  {Regions.map((option) => (
                    <MenuItem key={option.value} value={option.value} onClick={()=>{
                      return onFaritanyCliked(option.value)
                    }}>
                      {option.label}
                    </MenuItem>
                  ))}
            </TextField>
        </Box>
        
        <Box sx={{display:'flex',justifyContent:'center',margin:'auto'}}>

          <TextField label="Année" id="standard-select-currency" select defaultValue="2024" variant="standard">
                {annees.map((option,index) => (
                  <MenuItem key={option.value} value={option.value} onClick={() =>{
                    return onItemClicked(index)
                  }}>
                    {option.label}
                  </MenuItem>
                ))}
          </TextField>
            
          <Box sx={{marginLeft:3}}>
                <SearchBar  
                  handleRegionChange={(e) => setRegionSearch(e.target.value)}
                  handleAxeChange={(e) => setAxeSearch(e.target.value)}
                  handleDebutChange={(e) => setpkDebutSearch(e.target.value)}
                  handleFinChange={(e) => setpkFinSearch(e.target.value)}
                />
          </Box>

        </Box>
  </Box>

        <Box>
          <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell sx={{paddingRight:11}}>Regions</TableCell>
                    <TableCell sx={{paddingRight:10}}>Axes</TableCell>
                    <TableCell>Section</TableCell>
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

                  {
                    <Liste_RN  
                      faritanySelectedIndex = {faritanySelectedIndex}
                      regionSearch={regionSearch}
                      axeSearch={axeSearch} 
                      pkFinSearch={pkFinSearch} 
                      pkDebutSearch={pkDebutSearch}/>
                  }
                </TableBody>
              </Table>
            </React.Fragment>

          </Box>
      </>
    )
}


export default ListeLocalite