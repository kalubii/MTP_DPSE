import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Modifier from '../../CRUD/Modifier';
import Loading from '../../../../../Loading'
import { Box } from '@mui/material';

const LocaliteToamasina2023 = () => {
  const [Toamasina,setToamasina] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    axios.get('http://localhost:8081/localiteToamasina')
    .then(res => setToamasina(res.data),
    setLoading(false))
    .catch(err => console.log(err),
    setLoading(false));
  },[])

  return (<>
            {Toamasina.map((localite)=>{
                    return(
                    <TableRow key={localite.id_tana} >
                      <TableCell>Toamasina</TableCell>
                      <TableCell>{localite.Axes}</TableCell>
                      <TableCell>{localite.Section}</TableCell>
                      <TableCell>{localite.PK_debut}</TableCell>
                      <TableCell>{localite.Localite_debut}</TableCell>
                      <TableCell>{localite.PK_fin}</TableCell>
                      <TableCell>{localite.Localite_fin}</TableCell>
                      <TableCell>{localite.Longueur}</TableCell>
                      <TableCell>{localite.Longueur_traitee}</TableCell>
                      <TableCell>{localite.Nature_surface}</TableCell>
                      <TableCell>{localite.Region}</TableCell>
                      <TableCell>{localite.Gestionnaire_de_axe}</TableCell>
                      <TableCell><Modifier/></TableCell>
                    </TableRow>
        )})}
        {loading && <Box > <Loading/></Box>}
    </>
  )
}
export default LocaliteToamasina2023