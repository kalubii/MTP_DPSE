import React, {useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, MenuItem, TextField } from '@mui/material';
import SearchBar from '../composants/Home/Drawer/BaseDeDonnee/SearchBar';
import Projet from '../composants/Home/Drawer/BaseDeDonnee/Projets/Projet';


const ListeProjets = () => {
    const [dateSelectedIndex, setDateSelectedIndex] = useState(0);
    const [axeSearch,setAxeSearch] = useState('')
    const [pkDebutSearch,setpkDebutSearch] = useState('')
    const [pkFinSearch,setpkFinSearch] = useState('')

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

  return (<>
    <Box sx={{marginBottom:4}}>
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

            {/* Barre de recherche */}
            <Box sx={{display:'flex'}}>       
                <TextField id="standard-search" label="Axes" type="search" variant="standard" onChange={handleAxeChange}/>
                <TextField id="standard-search" sx={{marginX:4}} label="PK Début" type="search" variant="standard" onChange={handleDebutChange}/>
                <TextField id="standard-search" label="PK Fin" type="search" variant="standard" onChange={handleFinChange}/>
            </Box>


            </Box>
        </Box>
    </Box>
            <Box>
                <React.Fragment>
                    <Table size="small">
                        <TableHead>
                        <TableRow>
                            <TableCell>Année</TableCell>
                            <TableCell>District</TableCell>
                            <TableCell>Axes</TableCell>
                            <TableCell>PK Début</TableCell>
                            <TableCell>PK Fin</TableCell>
                            <TableCell>Localisation Début</TableCell>
                            <TableCell>Localisation Fin</TableCell>
                            <TableCell>Travaux</TableCell>
                            <TableCell>Avancement</TableCell>
                            <TableCell>Observation</TableCell>
                            <TableCell align="right">Coût Estimatif (Ar)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                                {dateSelectedIndex === 0? <Projet date={"2020"} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch} />:
                                dateSelectedIndex === 1? <Projet date={"2021"} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>: 
                                dateSelectedIndex === 2? <Projet date={"2022"} axeSearch={axeSearch} pkFinSearch={pkFinSearch} pkDebutSearch={pkDebutSearch}/>:null}
                        </TableBody>
                    </Table>
                    </React.Fragment>
            </Box>
        </>
  )
}

export default ListeProjets