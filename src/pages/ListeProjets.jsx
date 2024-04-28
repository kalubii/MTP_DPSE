import React, {useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import SearchBar from '../composants/Home/Drawer/BaseDeDonnee/SearchBar';
import Projet from '../composants/Home/Drawer/BaseDeDonnee/Projets/Projet';
import VoirPlusPage from './VoirPlusPage';
import Carte from '../composants/Map/Carte';
import AlaotraMangoro from '../composants/Map/AlaotraMangoro';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const ListeProjets = ({regionName,anneeTravaux}) => {
    const [dateSelectedIndex, setDateSelectedIndex] = useState("2024");
    const [regionSearch,setRegionSearch] = useState('')
    const [axeSearch,setAxeSearch] = useState('')
    const [pkDebutSearch,setpkDebutSearch] = useState('')
    const [pkFinSearch,setpkFinSearch] = useState('')
    const [showTableHead,setShowTableHead] = useState(true)
    const [showCarte, setShowCarte] = useState(true)
    const [showProjet,setShowProjet] = useState(false)

    const [alaotraMangoroClicked,setAlaotraMangoroClicked] = useState(false)
    const [amoronIManiaClicked,setAmoronIManiaClicked] = useState(false)
    const [analamangaClicked,setAnalamangaClicked] = useState(false)
    const [analanjirofoClicked,setAnalanjirofoClicked] = useState(false)
    const [androyClicked,setAndroyClicked] = useState(false)
    const [anosyClicked,setAnosyClicked] = useState(false)
    const [atsimoAtsinananaClicked,setAtsimoAtsinananaClicked] = useState(false)
    const [atsimoAndrefanaClicked,setAtsimoAndrefanaClicked] = useState(false)
    const [atsinananaClicked,setAtsinananaClicked] = useState(false)
    const [betsibokaClicked,setBetsibokaClicked] = useState(false)
    const [boenyClicked,setBoenyClicked] = useState(false)
    const [bongolavaClicked,setBongolavaClicked] = useState(false)
    const [dianaClicked,setDianaClicked] = useState(false)
    const [hauteMatsiatraClicked,setHauteMatsiatraClicked] = useState(false)
    const [ihorombeClicked,setIhorombeClicked] = useState(false)
    const [itasyClicked,setItasyClicked] = useState(false)
    const [melakyClicked,setMelakyClicked] = useState(false)
    const [MenabeClicked,setMenabeClicked] = useState(false)
    const [savaClicked,setSavaClicked] = useState(false)
    const [sofiaClicked,setSofiaClicked] = useState(false)
    const [vakinankaratraClicked,setVakinankaratraClicked] = useState(false)
    const [vatovavyFitovinanyClicked,setVatovavyFitovinanyClicked] = useState(false)

    const onDateClicked = (index) => {
        setDateSelectedIndex(index);
    };

    const onCarte =() =>{
      setShowCarte(true)
      setAlaotraMangoroClicked(false)
      setAmoronIManiaClicked(false)
      setAnalamangaClicked(false)
      setAnalanjirofoClicked(false)
      setAndroyClicked(false)
      setAnosyClicked(false)
      setAtsimoAtsinananaClicked(false)
      setAtsimoAndrefanaClicked(false)
      setAtsinananaClicked(false)
      setBetsibokaClicked(false)
      setBoenyClicked(false)
      setBongolavaClicked(false)
      setDianaClicked(false)
      setHauteMatsiatraClicked(false)
      setIhorombeClicked(false)
      setItasyClicked(false)
      setMelakyClicked(false)
      setMenabeClicked(false)
      setSavaClicked(false)
      setSofiaClicked(false)
      setVakinankaratraClicked(false)
      setVatovavyFitovinanyClicked(false)
    }

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
        
  <Button startIcon={<LocationOnOutlinedIcon/>} sx={{marginY:3}} onClick={onCarte}> afficher la Carte</Button>

  {showCarte?<Carte
      showCarte={showCarte}
      setShowCarte={setShowCarte}
      showProjet={showProjet}
      setShowProjet={setShowProjet}
      setAtsimoAtsinananaClicked={setAtsimoAtsinananaClicked}
      setDateSelectedIndex={setDateSelectedIndex}
      setAmoronIManiaClicked={setAmoronIManiaClicked}
      setAnalanjirofoClicked={setAnalanjirofoClicked}
      setAnalamangaClicked={setAnalamangaClicked} 
      setAndroyClicked={setAndroyClicked}
      setAnosyClicked={setAnosyClicked}
      setAlaotraMangoroClicked={setAlaotraMangoroClicked} 
      alaotraMangoroClicked={alaotraMangoroClicked}
      setAtsimoAndrefanaClicked={setAtsimoAndrefanaClicked}
      setAtsinananaClicked={setAtsinananaClicked}
      setBetsibokaClicked={setBetsibokaClicked}
      setBoenyClicked={setBoenyClicked}
      setBongolavaClicked={setBongolavaClicked}
      setDianaClicked={setDianaClicked}
      setHauteMatsiatraClicked={setHauteMatsiatraClicked}
      setIhorombeClicked={setIhorombeClicked}
      setItasyClicked={setItasyClicked}
      setMelakyClicked={setMelakyClicked}
      setMenabeClicked={setMenabeClicked}
      setSavaClicked={setSavaClicked}
      setSofiaClicked={setSofiaClicked}
      setVakinankaratraClicked={setVakinankaratraClicked}
      setVatovavyFitovinanyClicked={setVatovavyFitovinanyClicked}
      setRegionSearch={setRegionSearch}/>:null}
  
  {alaotraMangoroClicked ||amoronIManiaClicked ||analamangaClicked ||atsimoAtsinananaClicked|| analanjirofoClicked ||androyClicked ||anosyClicked ||atsimoAndrefanaClicked ||atsinananaClicked ||betsibokaClicked ||boenyClicked || bongolavaClicked||dianaClicked ||hauteMatsiatraClicked ||ihorombeClicked ||itasyClicked ||melakyClicked ||MenabeClicked ||savaClicked ||sofiaClicked ||vakinankaratraClicked ||vatovavyFitovinanyClicked ?
    <Box>
          <AlaotraMangoro/>
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