import React, { useEffect, useMemo, useState } from 'react';
import { Box, TableCell, TableRow,TextField } from '@mui/material';
import Modifier from '../CRUD/Modifier';
import axios from 'axios';
import Loading from '../../../../../composants/Loading'
import PaginationOutlined from './Pagination';

const Liste_RN = ({faritanySelectedIndex, regionSearch, axeSearch, pkDebutSearch, pkFinSearch}) => {

    const [data, setData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleEdit = (index) => {
        setEditingIndex(index === editingIndex ? null : index);
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:8081/localite_RN');
    //         setData(response.data);
    //         setLoading(false);
    //       } catch (error) {
    //         console.error('', error);
    //       }
    //     };
    //     fetchData();
    //   }, [])

    console.log(faritanySelectedIndex)
    
       useEffect(() => {
        const fetchSearchResults = async () => {
          try {
            if(faritanySelectedIndex || regionSearch || axeSearch || pkDebutSearch || pkFinSearch){
            const response = await axios.get('http://localhost:8081/projet2022', {
              params: {
                faritany : faritanySelectedIndex,
                region: regionSearch || undefined,
                axe: axeSearch || undefined,
                pkDebut: pkDebutSearch || undefined,
                pkFin: pkFinSearch || undefined,
              },
            });
            setLoading(false)
            // console.log(response.data)
            setData(response.data);
          }
          } catch (error) {
            setLoading(false)
            console.error('', error);
          }
        };
        fetchSearchResults();
     }, [faritanySelectedIndex,regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

     const memoizedData = useMemo(() => data, [data]);

    return (
        <>
            {memoizedData && memoizedData.length > 0 ? (
              memoizedData.map((projet, index) => (
                        <TableRow key={index}>
                                    <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                                    <TableCell>{projet.AXE}</TableCell>
                                    <TableCell>{projet.PK_DEBUT}</TableCell>
                                    <TableCell>{projet.PK_FIN}</TableCell>
                                    <TableCell>{projet.Geo_r_f_rencement_D_but}</TableCell>
                                    <TableCell>{projet.Geo_r_f_rencement_Fin}</TableCell>
                                    <TableCell>{projet.TRAFIC}</TableCell>
                                    <TableCell>{projet.DISTRICTS}</TableCell>

                        </TableRow>
        ))
                            ) : (
        <TableRow><TableCell>{loading?<Loading/> : <TableCell colSpan="11">Aucun résultat trouvé</TableCell>}</TableCell></TableRow>
        
    )}
            <PaginationOutlined/>
        </>
    );
};

export default Liste_RN;