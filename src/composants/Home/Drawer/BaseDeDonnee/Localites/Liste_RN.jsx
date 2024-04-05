import React, { useEffect, useState } from 'react';
import { Box, TableCell, TableRow,TextField } from '@mui/material';
import Modifier from '../CRUD/Modifier';
import axios from 'axios';
import Loading from '../../../../../composants/Loading'

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
            const response = await axios.get('http://localhost:8081/localite_RN', {
              params: {
                faritany : faritanySelectedIndex,
                region: regionSearch || undefined,
                axe: axeSearch || undefined,
                pkDebut: pkDebutSearch || undefined,
                pkFin: pkFinSearch || undefined,
              },
            });
            setLoading(false)
            console.log(response.data)
            setData(response.data);
          } catch (error) {
            setLoading(false)
            console.error('', error);
          }
        };

        if (faritanySelectedIndex || regionSearch || axeSearch || pkDebutSearch || pkFinSearch) {
          fetchSearchResults();
        }

     }, [faritanySelectedIndex,regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

    return (
        <>
            {data && data.length > 0 ? (
                    data.map((projet, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Modifier index={index + 1} id={projet.ID} onEdit={() => handleEdit(index)} />
                            </TableCell>

                            {index === editingIndex ? (
                                <>
                                    <TableCell><TextField value={projet.REGION} /></TableCell>
                                    <TableCell><TextField value={projet.AXES} /></TableCell>
                                    <TableCell><TextField value={projet.SECTION} /></TableCell>
                                    <TableCell><TextField value={projet.PK_DEBUT} /></TableCell>
                                    <TableCell><TextField value={projet.LOC_DEBUT} /></TableCell>
                                    <TableCell><TextField value={projet.PK_FIN} /></TableCell>
                                    <TableCell><TextField value={projet.LOC_FIN} /></TableCell>
                                    <TableCell><TextField value={projet.LONGUEUR} /></TableCell>
                                    <TableCell><TextField value={projet.LONGUEUR_TRAITEE} /></TableCell>
                                    <TableCell><TextField value={projet.NATURE_SURFACE} /></TableCell>
                                    <TableCell><TextField value={projet.TRAFIC} /></TableCell>
                                    <TableCell><TextField value={projet.DISTRICT} /></TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell>{projet.REGION}</TableCell>
                                    <TableCell>{projet.AXES}</TableCell>
                                    <TableCell>{projet.PK_DEBUT}</TableCell>
                                    <TableCell>{projet.LOC_DEBUT}</TableCell>
                                    <TableCell>{projet.PK_FIN}</TableCell>
                                    <TableCell>{projet.LOC_FIN}</TableCell>
                                    <TableCell>{projet.LONGUEUR}</TableCell>
                                    <TableCell>{projet.LONGUEUR_TRAITEE}</TableCell>
                                    <TableCell>{projet.NATURE_SURFACE}</TableCell>
                                    <TableCell>{projet.TRAFIC}</TableCell>
                                    <TableCell>{projet.DISTRICT}</TableCell>
                                </>
                            )}

            </TableRow>
        ))
                            ) : (
        <TableRow><TableCell>{loading?<Loading/> : <TableCell colSpan="11">Aucun résultat trouvé</TableCell>}</TableCell></TableRow>
        
    )}
        </>
    );
};

export default Liste_RN;
