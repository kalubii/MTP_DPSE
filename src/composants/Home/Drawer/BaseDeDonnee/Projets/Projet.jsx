import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Loading from '../../../../Loading'
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import VoirPlusPage from '../../../../../pages/VoirPlusPage';
import Modifier from '../CRUD/Modifier';
import { TextField } from '@mui/material';


const Projet = ({SetShowTableHead,dateSelectedIndex, regionSearch, axeSearch, pkDebutSearch, pkFinSearch}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState();
    const [pkDebutRef, setpkDebutRef] = useState();
    const [pkFinRef, setpkFinRef] = useState();
    const [voirPlusClicked,setVoirPlusClicked] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null);
    const navigate = useNavigate();


    const handleEdit = (index) => {
      setEditingIndex(index === editingIndex ? null : index);
    };

    const getReference = (id,pkDebut,pkFin)=>{
      console.log('id:',id,'pkDebut:',pkDebut,'pkFin:',pkFin)
      setVoirPlusClicked(true)
      setId(id)
      setpkDebutRef(pkDebut)
      setpkFinRef(pkFin)
      SetShowTableHead(false)
      // navigate('/voirPlus')
    }

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
            const response = await axios.get('http://localhost:8081/projet', {
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
            console.log(response.data)
            setLoading(false)
            setData(response.data);
          } catch (error) {
            setLoading(false)
            console.error('', error);
          }
        };
        // Effectuer la recherche uniquement si au moins un champ de recherche est rempli
        if (dateSelectedIndex || regionSearch || axeSearch || pkDebutSearch || pkFinSearch) {
          setLoading(false)
          fetchSearchResults();
        }
     }, [id,dateSelectedIndex,regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

     return (
      <>
        {voirPlusClicked ? (
          data.map((projet, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{projet.Programme_LF_}</TableCell>
                <TableCell>{projet.Convention_LF_}</TableCell>
                <TableCell>{projet.Convention_Libell_e_LF_}</TableCell>
                <TableCell>{projet.Directions}</TableCell>
                <TableCell>{projet.ACTIVITES}</TableCell>
                <TableCell>{projet.Natures}</TableCell>
                <TableCell>{projet.Financement}</TableCell>
                <TableCell>{projet.Bailleurs}</TableCell>
                <TableCell>{projet.Co_t_estimatif_Ar_}</TableCell>
                <TableCell>{projet.Responsable_du_Projet}</TableCell>
                <TableCell>{projet.Valeur_Cible_Unit_s_}</TableCell>
                <TableCell>{projet.Indicateur_PEM_PTA}</TableCell>
                <TableCell>{projet.Indicateur_ODD}</TableCell>
                <TableCell>{projet.Indicateur_de_Performance}</TableCell>
                <TableCell>{projet.AXE}</TableCell>
                <TableCell>{projet.Geo_r_f_rencement_D_but}</TableCell>
                <TableCell>{projet.Geo_r_f_rencement_Fin}</TableCell>
                <TableCell>{projet.PK_DEBUT}</TableCell>
                <TableCell>{projet.PK_FIN}</TableCell>
                <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                <TableCell>{projet.DISTRICTS}</TableCell>
                <TableCell>{projet.Communes}</TableCell>
                <TableCell>{projet.Population_touch_e}</TableCell>
                <TableCell>{projet.Nbre_d_emploi_cr_e}</TableCell>
                <TableCell>{projet.Date_envoi_Primature}</TableCell>
                <TableCell>{projet.Date_retour_Primature}</TableCell>
                <TableCell>{projet.Date_envoi_PRM}</TableCell>
                <TableCell>{projet.R_f_March_Conv_}</TableCell>
                <TableCell>{projet.D_signations}</TableCell>
                <TableCell>{projet.Co_t_Ar_}</TableCell>
                <TableCell>{projet.Date_PPM}</TableCell>
                <TableCell>{projet.Date_TEF}</TableCell>
                <TableCell>{projet.Montant_engag_}</TableCell>
                <TableCell>{projet.Date_OS}</TableCell>
                <TableCell>{projet.D_lai_d_ex_cution_jours_}</TableCell>
                <TableCell>{projet.Titulaire}</TableCell>
                <TableCell>{projet.Temporel}</TableCell>
                <TableCell>{projet.Financi_re}</TableCell>
                <TableCell>{projet.SITUATION}</TableCell>
                <TableCell>{projet.ETAT_D_AVANCEMENT}</TableCell>
                <TableCell>{projet.Observations}</TableCell>
                <TableCell>{projet.Date_lancement_AO}</TableCell>
                <TableCell>{projet.Date_Remise_AO}</TableCell>
                <TableCell>{projet.Unit_s}</TableCell>
                <TableCell>{projet.Somme_de_VC_Qt_}</TableCell>
                <TableCell>{projet.Somme_de_Physique}</TableCell>
                <TableCell>{projet.Somme_de_Av_Annuel_2021}</TableCell>
                <TableCell>{projet.Somme_de_S_1}</TableCell>
                <TableCell>{projet.Somme_de_S}</TableCell>
                <TableCell>{projet.Somme_de_Evolution_S_1_S}</TableCell>
                <TableCell>{projet.Somme_de_G_n_ral_Av_Annuel_2022_}</TableCell>
                <TableCell>{projet.Somme_de_Quantit_s_r_alis_es_En_2022}</TableCell>
              </TableRow>
            );
          })
        ) : (
          data.map((projet, index) => {
            return (
              <>
                {index === editingIndex ? (
                  <TableRow key={index}>
                      <TableCell>{projet.ACTIVITES}</TableCell>
                      <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                      <TableCell>{projet.AXE}</TableCell>
                      <TableCell>{projet.PK_DEBUT}</TableCell>
                      <TableCell>{projet.PK_FIN}</TableCell>
                      <TableCell><TextField value={projet.ETAT_D_AVANCEMENT} /></TableCell>
                      <TableCell>
                        <Modifier index={index + 1} id={projet.ID}
                          onEdit={() => handleEdit(index)}
                        />
                      </TableCell>
                  </TableRow>
                ) : (
                  <>
                    <TableRow key={index}>
                      <TableCell>{projet.ACTIVITES}</TableCell>
                      <TableCell>{projet.REGIONS_CONCERNEES}</TableCell>
                      <TableCell>{projet.AXE}</TableCell>
                      <TableCell>{projet.PK_DEBUT}</TableCell>
                      <TableCell>{projet.PK_FIN}</TableCell>
                      <TableCell>{projet.ETAT_D_AVANCEMENT}</TableCell>
                      <TableCell>
                        <Modifier index={index + 1} id={projet.ID}
                          onEdit={() => handleEdit(index)}
                        />
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </>
            )}))}
        <TableRow>
          <TableCell>{loading ? <Loading /> : <TableCell colSpan="11">Aucun autre résultat trouvé</TableCell>}</TableCell>
        </TableRow>
      </>
    );
}

export default Projet