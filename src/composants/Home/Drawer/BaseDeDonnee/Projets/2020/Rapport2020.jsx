import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Loading from '../../../../../Loading';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Rapport2020 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8081/projet2020')
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
                <TableCell>2020</TableCell>
                <TableCell>{projet.DISTRICTS}</TableCell>
                <TableCell>{projet.OBSERVATIONS_2}</TableCell>
                <TableCell>{projet.PK_DEBUT}</TableCell>
                <TableCell>{projet.PK_FIN}</TableCell>
                <TableCell>{projet.Geo_réferencement}</TableCell>
                <TableCell>{projet.Geo_r_f_rencement_Fin}</TableCell>
                <TableCell>{projet.ACTIVITES}</TableCell>
                <TableCell>{projet.Situation_actuelle}</TableCell>
                <TableCell>{projet.Observations}</TableCell>
                <TableCell align="right">{`${projet.Co_t_estimatif_Ar_}`}</TableCell>
            </TableRow>
            )
        })}
        {loading && <Box > <Loading/></Box>}
    </>
  )
}

export default Rapport2020