import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Modifier from '../../CRUD/Modifier';
import { Box, TextField } from '@mui/material';
import Loading from '../../../../../Loading'

const LocaliteTana2023 = () => {
    const [Tana,setTana] = useState([])
    const[showInput,setShowInput] = React.useState(false)
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      axios.get('http://localhost:8081/localiteTana')
      .then(res => setTana(res.data),
      setLoading(false))
      .catch(err => console.log(err),
      setLoading(false));
    },[])

    const onUpdate = () => {
      setShowInput(!showInput)
    }

    const handleChange =(e) => {
      setNameValue(e.target.value)
    }

    const handleUp = (e) => {
      console.log(t.name)
      if(e.key == "Enter"){
          list.name = update(t.id, e.target.value)
          onUpdate()
          console.log(t.name)
      }
 
    }

  return (<>
            {Tana.map((localite)=>{
                    return(
                    <TableRow key={localite.id_tana} >
                      <TableCell>Antananarivo</TableCell>
                      {showInput?<TextField value={localite.Axes} onChange={handleChange} onKeyUp={handleUp}/>:<TableCell>{localite.Axes}</TableCell>}
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
                      <TableCell><Modifier onUpdate={onUpdate} showInput={showInput}/></TableCell>
                    </TableRow>
        )})}
        {loading && <Box > <Loading/></Box>}
    </>
  )
}

export default LocaliteTana2023