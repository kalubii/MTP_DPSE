import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import Loading from '../../../../Loading';
import { Box, TableCell, TableRow,TextField } from '@mui/material';
import Modifier from '../CRUD/Modifier';

const Liste_RN = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {
        setEditingIndex(index === editingIndex ? null : index);
    };


    useEffect(() => {
        const fetchData = async () => {
            const { region, axeSearch, pkFinSearch, pkDebutSearch } = props;
            const url = new URL("http://localhost:8081/localite_RN");

            if (region) url.searchParams.append('region', region);
            if (axeSearch) url.searchParams.append('axe', axeSearch);
            if (pkFinSearch) url.searchParams.append('pkFin', pkFinSearch);
            if (pkDebutSearch) url.searchParams.append('pkDebut', pkDebutSearch);

            try {
                const response = await axios.get(url.toString());
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [props]);

    const tableRows = useMemo(() => {
        return data.map((projet, index) => (
            <TableRow key={projet.ID}>
                <TableCell>
                    <Modifier index={index + 1} id={projet.ID} onEdit={() => handleEdit(index)} />
                </TableCell>
                
                {index === editingIndex ? (
                    <>
                        <TableCell><TextField value={projet.REGION} /></TableCell>
                        <TableCell><TextField value={projet.AXES} /></TableCell>
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
        ));
    }, [data, editingIndex]);

    return (
        <>
            {tableRows}
            {loading && <Box><Loading/></Box>}
        </>
    );
};

export default Liste_RN;
