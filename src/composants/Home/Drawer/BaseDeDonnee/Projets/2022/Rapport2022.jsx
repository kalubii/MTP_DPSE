import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Loading from '../../../../../Loading';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Rapport2022 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8081/projet2022')
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
                <TableCell>2022</TableCell>
                <TableCell>{projet.DISTRICTS}</TableCell>
                <TableCell>{projet.AXE}</TableCell>
                <TableCell>{projet.PK_DEBUT}</TableCell>
                <TableCell>{projet.PK_FIN}</TableCell>
                <TableCell>{projet.Geo_r_f_rencement_D_but}</TableCell>
                <TableCell>{projet.Geo_r_f_rencement_Fin}</TableCell>
                <TableCell>{projet.ACTIVITES}</TableCell>
                <TableCell>{projet.ETAT_D_AVANCEMENT}</TableCell>
                <TableCell>{projet.Observations}</TableCell>
                <TableCell align="right">{`${projet.Co_t_estimatif_Ar_}`}</TableCell>
            </TableRow>
            )
        })}
        {loading && <Box > <Loading/></Box>}
    </>
  )
}

export default Rapport2022