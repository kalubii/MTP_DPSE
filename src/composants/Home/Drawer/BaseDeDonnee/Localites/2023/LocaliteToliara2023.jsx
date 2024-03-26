import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const LocaliteToliara2023 = () => {
  
  const [Toliara,setToliara] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/localiteToliara')
    .then(res => setToliara(res.data))
    .catch(err => console.log(err));
  },[])

  return (<>
            {Toliara.map((localite)=>{
                    return(
                    <TableRow key={localite.id_tana} >
                      <TableCell>Toliara</TableCell>
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
                    </TableRow>
        )})}
    </>
  )
}
export default LocaliteToliara2023