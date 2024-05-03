import React, { useEffect, useState } from 'react'
import { Box, Button, MenuItem, TextField} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchBar from '../composants/Home/Drawer/BaseDeDonnee/SearchBar';
import Liste_RN from '../composants/Home/Drawer/BaseDeDonnee/Localites/Liste_RN';
import { useMemo } from 'react';
import axios from 'axios';
import Loading from '../composants/Loading'



function ListeLocalite() {

  const [dateSelectedIndex, setDateSelectedIndex] = useState(0);
  const [faritanySelectedIndex, setfaritanySelectedIndex] = useState('ANTANANARIVO');
  const [regionSearch,setRegionSearch] = useState('')
  const [axeSearch,setAxeSearch] = useState('')
  const [pkDebutSearch,setpkDebutSearch] = useState('')
  const [pkFinSearch,setpkFinSearch] = useState('') 
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const nbrPageAfficher = 10;
  const lastIndex = currentPage*nbrPageAfficher
  const firstIndex = lastIndex - nbrPageAfficher
  const donnees = data.slice(firstIndex,lastIndex)
  const npage = Math.ceil(data.length/nbrPageAfficher)
  const numbresPagination = [...Array(npage+1).keys()].slice(1)

  const handleEdit = (index) => {
      setEditingIndex(index === editingIndex ? null : index);
  };

  function prePage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }


  console.log(faritanySelectedIndex)
  
     useEffect(() => {
      const fetchSearchResults = async () => {
        try {
          if(faritanySelectedIndex || regionSearch || axeSearch || pkDebutSearch || pkFinSearch){
          const response = await axios.get('http://localhost:8081/localisation', {
            params: {
              faritany : faritanySelectedIndex,
              region: regionSearch || undefined,
              axe: axeSearch || undefined,
              pkDebut: pkDebutSearch || undefined,
              pkFin: pkFinSearch || undefined,
            },
          });
          setLoading(false)
          // console.log(response.data)
          setData(response.data);
        }
        } catch (error) {
          setLoading(false)
          console.error('', error);
        }
      };
      fetchSearchResults();
   }, [faritanySelectedIndex,regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

   const memoizedData = useMemo(() => donnees, [donnees]);

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
        {/* <Box noValidate  autoComplete="off" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, display:'flex', justifyContent:'center'}}>
            <TextField select label="Faritany" id="outlined-select-currency" defaultValue="ANTANANARIVO">

                  {Regions.map((option) => (
                    <MenuItem key={option.value} value={option.value} onClick={()=>{
                      return onFaritanyCliked(option.value)
                    }}>
                      {option.label}
                    </MenuItem>
                  ))}
            </TextField>
        </Box> */}
        
        <Box sx={{display:'flex',justifyContent:'center',margin:'auto'}}>

          {/* <TextField label="Année" id="standard-select-currency" select defaultValue="2024" variant="standard">
                {annees.map((option,index) => (
                  <MenuItem key={option.value} value={option.value} onClick={() =>{
                    return onItemClicked(index)
                  }}>
                    {option.label}
                  </MenuItem>
                ))}
          </TextField> */}
            
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
                <Table size="small" sx={{marginBottom:3}}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{paddingRight:11}}>Regions</TableCell>
                            <TableCell sx={{paddingRight:10}}>Axes</TableCell>
                            <TableCell>PK Début</TableCell>
                            <TableCell>PK Fin</TableCell>
                            <TableCell>Géo_Refercement Début</TableCell>
                            <TableCell>Géo_Refercement Fin</TableCell>
                            <TableCell>Trafic</TableCell>
                            <TableCell>District</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {memoizedData && memoizedData.length > 0 ? (
                            memoizedData.map((projet, index) => (
                                <TableRow key={index}>
                                    <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                                    <TableCell>{projet.AXE}</TableCell>
                                    <TableCell>{projet.PK_DEBUT}</TableCell>
                                    <TableCell>{projet.PK_FIN}</TableCell>
                                    <TableCell>{projet.Geo_r_f_rencement_D_but}</TableCell>
                                    <TableCell>{projet.Geo_r_f_rencement_Fin}</TableCell>
                                    <TableCell>{projet.TRAFIC}</TableCell>
                                    <TableCell>{projet.DISTRICTS}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="8">{loading ? <Loading /> : <TableCell colSpan="8">Aucun résultat trouvé</TableCell>}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <nav className='justify-content-center margin-auto d-flex'>
                      <ul className='pagination'>
                        <li className='page-item'>
                          <a href="#" className='page-link' onClick={prePage}>Prev</a>
                        </li>
                        {
                          numbresPagination.map((n,i)=>(
                            <li className={`page-item ${currentPage === n ? 'active':''}`} key={i}>
                              <a href="#" onClick={()=>changeCPage(n)}></a>
                            </li>
                          ))
                        }

                        <li className='page-item'>
                          <a href="#" className='page-link' onClick={nextPage}>Next</a>
                        </li>
                      </ul>
                </nav>
            </React.Fragment>
        </Box>
      </>
    )
}


export default ListeLocalite