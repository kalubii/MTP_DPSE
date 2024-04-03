import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Box } from '@mui/material';
import Loading from '../../../../Loading'


const Projet = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState(props.date);

    useEffect(() => {
        let axeSearch= "null"
        let pkDebutSearch= "null"
        let pkFinSearch= "null"

        if(props.axeSearch ==="" || !props.axeSearch){
            axeSearch= "null"
        }else{
            axeSearch = props.axeSearch
        }
        if(props.pkDebutSearch ==="" || !props.pkDebutSearch){
            pkDebutSearch="null"
        }else{
            pkDebutSearch = props.pkDebutSearch
        }
        if(props.pkFinSearch ==="" || !props.pkFinSearch){
            pkFinSearch="null"
        }else{
            pkFinSearch = props.pkFinSearch
        }
        axios.get('http://localhost:8081/projet/'+props.date+"/"+axeSearch+"/"+pkDebutSearch+"/"+pkFinSearch)
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }, [props.date]);

  return (<>
    
    {data.map((projet) => {
         return (
            <TableRow>
                <TableCell>{date}</TableCell>
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

export default Projet