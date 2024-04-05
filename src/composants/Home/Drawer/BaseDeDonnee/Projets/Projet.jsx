import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Box } from '@mui/material';
import Loading from '../../../../Loading'


const Projet = ({date, regionSearch, axeSearch, pkDebutSearch, pkFinSearch}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
          try {
            const response = await axios.get('http://localhost:8081/projet', {
              params: {
                region: regionSearch,
                axe: axeSearch,
                pkDebut: pkDebutSearch,
                pkFin: pkFinSearch,
              },
            });
            console.log(response.data)
            setLoading(false)
            setData(response.data);
          } catch (error) {
            setLoading(false)
            console.error('', error);
          }
        };
        // Effectuer la recherche uniquement si au moins un champ de recherche est rempli
        if (regionSearch || axeSearch || pkDebutSearch || pkFinSearch) {
          setLoading(false)
          fetchSearchResults();
        }
     }, [regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

  return (<>
    {data.map((projet) => {
         return (
            <TableRow>
                <TableCell>{projet._date}</TableCell>
                <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                <TableCell>{projet.AXE}</TableCell>
                <TableCell>{projet.PK_DEBUT}</TableCell>
                <TableCell>{projet.PK_FIN}</TableCell>
                <TableCell>{projet.Geo_r_f_rencement_D_but}</TableCell>
                <TableCell>{projet.Geo_r_f_rencement_Fin}</TableCell>
                <TableCell>{projet.ACTIVITES}</TableCell>
                {/* <TableCell>{projet.ETAT_D_AVANCEMENT}</TableCell>
                <TableCell>{projet.Observations}</TableCell>
                <TableCell align="right">{`${projet.Co_t_estimatif_Ar_}`}</TableCell> */}
            </TableRow>
            )
        })}
        <TableRow><TableCell>{loading?<Loading/> : <TableCell colSpan="11">Aucun résultat trouvé</TableCell>}</TableCell></TableRow>
    </>
  )
}

export default Projet