import React, {useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, MenuItem, TextField } from '@mui/material';
import SearchBar from '../composants/Home/Drawer/BaseDeDonnee/SearchBar';
import Projet from '../composants/Home/Drawer/BaseDeDonnee/Projets/Projet';
import VoirPlusPage from './VoirPlusPage';
import Carte from '../composants/Map/Carte';


const ListeProjets = ({regionName,anneeTravaux}) => {
    const [dateSelectedIndex, setDateSelectedIndex] = useState("2024");
    const [regionSearch,setRegionSearch] = useState('')
    const [axeSearch,setAxeSearch] = useState('')
    const [pkDebutSearch,setpkDebutSearch] = useState('')
    const [pkFinSearch,setpkFinSearch] = useState('')
    const [showTableHead,setShowTableHead] = useState(true)
    const [alaotraMangoroClicked,setAlaotraMangoroClicked] = useState(false)

    const onDateClicked = (index) => {
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

    <Carte setDateSelectedIndex={setDateSelectedIndex} setAlaotraMangoroClicked={setAlaotraMangoroClicked} setRegionSearch={setRegionSearch}/>
  
  {alaotraMangoroClicked?
  <Box>
    <Box sx={{marginBottom:4}}>
        <Box sx={{display:'flex',justifyContent:'center',margin:'auto'}}>
            <TextField
            id="standard-select-currency"
            select
            label="Année"
            // defaultValue="2024"
              variant="standard"
            >
              {annees.map((option,index) => (
                <MenuItem key={option.value} value={option.value} onClick={() =>{
                  return onDateClicked(option.value)
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
            {showTableHead? 
              <Box>
                <React.Fragment>
                    <Table size="small">
                        <TableHead>
                        <TableRow>
                            <TableCell>Année</TableCell>
                            <TableCell>Travaux</TableCell>
                            <TableCell>Regions</TableCell>
                            <TableCell>Axes</TableCell>
                            <TableCell>PK Début</TableCell>
                            <TableCell>PK Fin</TableCell>
                            <TableCell>Avancement</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                          <Projet
                          SetShowTableHead={setShowTableHead}
                          dateSelectedIndex={dateSelectedIndex}
                          regionSearch={regionSearch}
                          axeSearch={axeSearch} 
                          pkFinSearch={pkFinSearch} 
                          pkDebutSearch={pkDebutSearch} />

                        </TableBody>
                    </Table>
                    </React.Fragment>

            </Box>: <><VoirPlusPage/><Box> <Projet
                          SetShowTableHead={setShowTableHead}
                          dateSelectedIndex={dateSelectedIndex}
                          regionSearch={regionSearch}
                          axeSearch={axeSearch} 
                          pkFinSearch={pkFinSearch} 
                          pkDebutSearch={pkDebutSearch} />
            </Box></>}

  </Box>:null}
        </>
  )
}

export default ListeProjets