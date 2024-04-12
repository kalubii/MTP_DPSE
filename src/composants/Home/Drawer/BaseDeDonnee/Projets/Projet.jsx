import React, { useEffect, useMemo, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Loading from '../../../../Loading';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import VoirPlusPage from '../../../../../pages/VoirPlusPage';
import Modifier from '../CRUD/Modifier';
import { Button, TextField } from '@mui/material';
import VoirPlus from './VoirPlus';


const Projet = ({SetShowTableHead,dateSelectedIndex, regionSearch, axeSearch, pkDebutSearch, pkFinSearch}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState();
    const [pkDebutRef, setpkDebutRef] = useState();
    const [pkFinRef, setpkFinRef] = useState();
    const [voirPlusClicked,setVoirPlusClicked] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null);
    // const navigate = useNavigate();

    const handleClickOpen = (id) => {
      console.log('id Selectionner:',id)
      setId(id)
      setVoirPlusClicked(true);
    };


    const handleEdit = (index) => {
      setEditingIndex(index === editingIndex ? null : index);
    };

    // const getReference = (id)=>{
    //   console.log('id Selectionner:',id)
    //   // setVoirPlusClicked(true)
    //   setId(id)
    //   // setpkDebutRef(pkDebut)
    //   // setpkFinRef(pkFin)
    //   // setShowVoirPlus(show=> !show)
    //   // SetShowTableHead(false)
    //   // navigate('/voirPlus')
    // }

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:8081/projet');
    //       setData(response.data);
    //       setLoading(false);
    //     } catch (error) {
    //       console.error('', error);
    //     }
    //   };
    //   fetchData();
    // }, [])
    console.log(dateSelectedIndex)
    console.log(regionSearch)
    console.log(voirPlusClicked)

    useEffect(() => {
      const fetchSearchResults = async () => {
        try {
          if (dateSelectedIndex || regionSearch || axeSearch || pkDebutSearch || pkFinSearch) {
            const response = await axios.get('http://localhost:8081/projet2022', {
              params: {
               idRef : id,
               pkDebutRef : pkDebutRef,
               pkFinRef : pkFinRef,
               date : dateSelectedIndex,
               region: regionSearch,
               axe: axeSearch,
               pkDebut: pkDebutSearch,
               pkFin: pkFinSearch,
              },
            });
            setLoading(false);
            setData(response.data);
          }
        } catch (error) {
          setLoading(false);
          console.error('', error);
        }
      };
      fetchSearchResults();
   }, [id,dateSelectedIndex,regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

   const memoizedData = useMemo(() => data, [data]);

     return (
      <>
        {voirPlusClicked == false ?
          memoizedData.map((projet, index) => {
            return (
              <React.Fragment key={index}>
                {index === editingIndex ? (
                  <TableRow>
                   <TableCell>{projet.ACTIVITES}</TableCell>
                   <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                   <TableCell>{projet.AXE}</TableCell>
                   <TableCell>{projet.PK_DEBUT}</TableCell>
                   <TableCell>{projet.PK_FIN}</TableCell>
                   <TableCell>
                      <TextField value={projet.ETAT_D_AVANCEMENT} />
                   </TableCell>
                   <TableCell>
                      <Modifier
                        index={index + 1}
                        id={projet.ID}
                        onEdit={() => handleEdit(index)}
                      />
                   </TableCell>
                  </TableRow>
                ) : (
                  <React.Fragment>
                   <TableRow key={index}>
                      <TableCell>{projet.ACTIVITES}</TableCell>
                      <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                      <TableCell>{projet.AXE}</TableCell>
                      <TableCell>{projet.PK_DEBUT}</TableCell>
                      <TableCell>{projet.PK_FIN}</TableCell>
                      <TableCell>{projet.ETAT_D_AVANCEMENT}</TableCell>
                      <TableCell>
                        <Modifier
                          index={index + 1}
                          id={projet.ID}
                          onEdit={() => handleEdit(index)}
                        />
                      </TableCell>
                      <TableCell>
                        <Button variant="text" onClick={() => handleClickOpen(index + 1)}>
                          Détail
                        </Button>
                      </TableCell>
                   </TableRow>
                  </React.Fragment>
                )}
              </React.Fragment>
            );
          }) : <VoirPlus
            open={voirPlusClicked}
            setOpen={setVoirPlusClicked}
            resetId={() => setId()}
            indexSelectionner={id}
            data={memoizedData}
          />
        }
        <TableRow>
          <TableCell>
            {loading ? <Loading /> : <TableCell colSpan="11">Aucun autre résultat trouvé</TableCell>}
          </TableCell>
        </TableRow>
      </>
   );
  };
  
  export default Projet;