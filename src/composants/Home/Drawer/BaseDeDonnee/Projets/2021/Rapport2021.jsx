import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Loading from '../../../../../Loading';
import { Box } from '@mui/material';

const Rapport2021 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8081/projet2021')
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }, []);

  return (<>
    
    {data.map((projet) => {
         return (
            <TableRow>
                <TableCell>2021</TableCell>
                <TableCell>{projet.DISTRICTS}</TableCell>
                <TableCell>{projet.AXE}</TableCell>
                <TableCell>{projet.pk_debut}</TableCell>
                <TableCell>{projet.pk_fin}</TableCell>
                <TableCell>{projet.Geo_referencement_debut}</TableCell>
                <TableCell>{projet.Geo_referencement_fin}</TableCell>
                <TableCell>{projet.Activites}</TableCell>
                <TableCell>{projet.ETAT_D_AVANCEMENT}</TableCell>
                <TableCell>{projet.Observations}</TableCell>
                <TableCell align="right">{`${projet.Cout}`}</TableCell>
            </TableRow>
            )
        })}
        {loading && <Box > <Loading/></Box>}
    </>
  )
}

export default Rapport2021