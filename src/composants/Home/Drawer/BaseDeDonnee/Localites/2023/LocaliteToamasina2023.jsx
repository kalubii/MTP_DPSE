import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const LocaliteToamasina2023 = () => {
  const [Toamasina,setToamasina] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/localiteToamasina')
    .then(res => setToamasina(res.data))
    .catch(err => console.log(err));
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
                    </TableRow>
        )})}
    </>
  )
}
export default LocaliteToamasina2023