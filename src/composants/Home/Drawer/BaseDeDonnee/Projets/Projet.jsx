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
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


const Projet = ({dianaClicked,
  alaotraMangoroClicked, 
  amoronIManiaClicked,
analamangaClicked ,
atsimoAtsinananaClicked,
analanjirofoClicked,
androyClicked ,
anosyClicked ,
atsimoAndrefanaClicked, 
atsinananaClicked ,
betsibokaClicked ,
boenyClicked,
 bongolavaClicked,
  hauteMatsiatraClicked, 
  ihorombeClicked, 
  itasyClicked ,
  melakyClicked ,
  MenabeClicked, 
  savaClicked ,
  sofiaClicked ,
  vakinankaratraClicked,
  vatovavyFitovinanyClicked,SetShowTableHead,dateSelectedIndex, regionSearch, axeSearch, pkDebutSearch, pkFinSearch}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState();
    const [pkDebutRef, setpkDebutRef] = useState();
    const [pkFinRef, setpkFinRef] = useState();
    const [voirPlusClicked,setVoirPlusClicked] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null);
    const [etatAvancement, setEtatAvancement] = useState({ ID: null, ETAT_D_AVANCEMENT: '' });
    const [avancementChange, setAvancementChange] = useState('');
    const [stateBtnModifier,setStateBtnModifier] = useState(false);

    

    // const navigate = useNavigate();
    console.log(avancementChange)

    const handleClickOpen = (id) => {
      console.log(id)
      setLoading(true)
      console.log('id Selectionner:',id)
      setId(id)
      setVoirPlusClicked(true);
    };


    const handleEdit = (index) => {
      setStateBtnModifier(true)
      setEditingIndex(index === editingIndex ? null : index);
    };

    const handleUp = (e) => {
      if(e.key == "Enter"){
        console.log('ENTRER')
        setStateBtnModifier(s => !s)
        setEditingIndex(null)
        const newList = data.map(li => (
          li.id_avancement === index?{...li, [e.target.name] : e.target.value} : li
        ))
        setData(newList)
      }
      
  }

    console.log(dateSelectedIndex)
    console.log(regionSearch)
    console.log(voirPlusClicked)

    useEffect(() => {
      setEtatAvancement({ ...etatAvancement, ETAT_D_AVANCEMENT: avancementChange });
    }, [avancementChange]);

    const handleChangeAvancement = (e, id) => {
      setAvancementChange(e.target.value);
      setEtatAvancement({ ID: id, ETAT_D_AVANCEMENT: e.target.value });
    };
    

    useEffect(() => {
      const fetchSearchResults = async () => {
        setLoading(true)
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
                    <TableCell>{projet.Annee}</TableCell>
                    <TableCell>{projet.ACTIVITES}</TableCell>
                    <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                    <TableCell>{projet.AXE}</TableCell>
                    <TableCell>{projet.PK_DEBUT}</TableCell>
                    <TableCell>{projet.PK_FIN}</TableCell>
                    <TableCell>
                        <TextField onKeyUp={handleUp} onChange={(e) => handleChangeAvancement(e, projet.id_avancement)} value={etatAvancement.ID === projet.id_avancement ? etatAvancement.ETAT_D_AVANCEMENT : projet.ETAT_D_AVANCEMENT} />
                    </TableCell>
                    <TableCell>
                        <Modifier
                          stateBtnModifier={stateBtnModifier}
                          setStateBtnModifier={setStateBtnModifier}
                          index={index + 1}
                          id={projet.ID}
                          onEdit={() => handleEdit(index)}
                        />
                    </TableCell>
                    </TableRow>
                  
                ) : (
                   <TableRow key={index}>
                      <TableCell>{projet.Annee}</TableCell>
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
                        <Button startIcon={<VisibilityOutlinedIcon/>} variant="text" onClick={() => handleClickOpen(projet.id_avancement)} disabled={!(loading===false)}>
                        {loading?(
                          <span>Chargement...</span>
                        ):(<span>Detail</span>)}
                        </Button>
                      </TableCell>
                   </TableRow>
               
                )}
              </React.Fragment>
            );
          }) : <VoirPlus
          alaotraMangoroClicked ={alaotraMangoroClicked}
          amoronIManiaClicked={amoronIManiaClicked}
        analamangaClicked ={analamangaClicked}
        atsimoAtsinananaClicked={atsimoAtsinananaClicked}
        analanjirofoClicked={analanjirofoClicked}
        androyClicked ={androyClicked}
        anosyClicked ={anosyClicked}
        atsimoAndrefanaClicked= {atsimoAndrefanaClicked}
        atsinananaClicked= {atsinananaClicked}
        betsibokaClicked= {betsibokaClicked}
        boenyClicked={boenyClicked}
         bongolavaClicked={bongolavaClicked}
          hauteMatsiatraClicked ={hauteMatsiatraClicked}
          ihorombeClicked ={ihorombeClicked}
          itasyClicked ={itasyClicked}
          melakyClicked ={melakyClicked}
          MenabeClicked= {MenabeClicked}
          savaClicked ={savaClicked}
          sofiaClicked ={sofiaClicked}
          vakinankaratraClicked={vakinankaratraClicked}
          vatovavyFitovinanyClicked={vatovavyFitovinanyClicked}
          dianaClicked={dianaClicked}
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