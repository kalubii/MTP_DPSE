import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const LocaliteFianarantsoa2023 = () => {
  const [Fianarantsoa,setFianarantsoa] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/localiteFianarantsoa')
    .then(res => setFianarantsoa(res.data))
    .catch(err => console.log(err));
  },[]) 

  return (<>
            {Fianarantsoa.map((localite)=>{
                    return(
                    <TableRow key={localite.id_tana} >
                      <TableCell>Fianarantsoa</TableCell>
                      <TableCell>{localite.Axes}</TableCell>
                      <TableCell>{localite.Section}</TableCell>
                      <TableCell>{localite.PK_debut}</TableCell>
                      <TableCell>{localite.Localite_debut}</TableCell>
                      <TableCell>{localite.PK_fin}</TableCell>
                      <TableCell>{localite.Localite_fin}</TableCell>
                      <TableCell>{localite.Longueur}</TableCell>
                      <TableCell>{localite.Longueur_traitee}</TableCell>
                      <TableCell>{localite.Nature_Surface}</TableCell>
                      <TableCell>{localite.Region}</TableCell>
                      <TableCell>{localite.Gestionnaire_de_axe}</TableCell>
                    </TableRow>
        )})}
    </>
  )
}
export default LocaliteFianarantsoa2023