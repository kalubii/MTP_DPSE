import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import VoirPlusPage from '../../../../../pages/VoirPlusPage';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import 'bootstrap/dist/css/bootstrap.min.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function VoirPlus({open, setOpen,resetId,data}) {

  const [loader, setLoader] = useState(false)
  const componentPDF = useRef() 

  const downloadPDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Rapport de Travaux",
    // onAfterPrint:()=>alert("Fichier exporter avec succès!"),
  })


  const handleClose = () => {
    resetId();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Détail sur le projet
            </Typography>
            <Button autoFocus color="inherit" onClick={downloadPDF} startIcon={<PictureAsPdfIcon />}
            disabled={!(loader===false)}>
              {loader?(
                <span>Exportation...</span>
              ):(<span>Exporter</span>)}
            </Button>
          </Toolbar>
        </AppBar>
        
        <div ref={componentPDF} style={{width:'100%'}}>
          <table className='table table-bordered' style={{width:'min-content'}}>
              <thead className='thead-light'>
                <tr>
                  <th>REGIONS_CONCERNEES</th>
                  <th>AXE</th>
                  <th>PK_DEBUT</th>
                  <th>PK_FIN</th>
                  <th>DISTRICTS</th>
                  <th>Communes</th>
                  <th>Population_touch_e</th>
                </tr>
              </thead>
              <tbody>
              {data.map((projet,index)=>{
                return (
                  <tr key={index}>
                    <td>{projet.REGIONS_CONCERNEES}</td>
                    <td>{projet.AXE}</td>
                    <td>{projet.PK_DEBUT}</td>
                    <td>{projet.PK_FIN}</td>
                    <td>{projet.DISTRICTS}</td>
                    <td>{projet.Communes}</td>
                    <td>{projet.Population_touch_e}</td>
                  </tr> )
                })}
              </tbody>
              <thead>
                <tr>
                  <th>Convention_Libell_e_LF_</th>
                  <th>Directions</th>
                  <th>ACTIVITES</th>
                  <th>Co_t_estimatif_Ar_</th>
                  <th>Responsable_du_Projet</th>
                  <th>Valeur_Cible_Unit_s_</th>
                  <th>Indicateur_PEM_PTA</th>
                </tr>
              </thead>
              <tbody>
              {data.map((projet,index)=>{
                return (
                  <tr key={index}>
                    <td>{projet.Convention_Libell_e_LF_}</td>
                    <td>{projet.Directions}</td>
                    <td>{projet.ACTIVITES}</td>
                    <td>{projet.Co_t_estimatif_Ar_}</td>
                    <td>{projet.Responsable_du_Projet}</td>
                    <td>{projet.Valeur_Cible_Unit_s_}</td>
                    <td>{projet.Indicateur_PEM_PTA}</td>
                  </tr> )
                })}
              </tbody>
              <thead>
                <tr>
                  <th>Indicateur_ODD</th>
                  <th>Natures</th>
                  <th>Financement</th>
                  <th>D_signations</th>
                  <th>Co_t_Ar_</th>
                  <th>Indicateur_ODD</th>
                  <th>Unit_s</th>
                </tr>
              </thead>
              <tbody>
              {data.map((projet,index)=>{
                return (
                  <tr key={index}>
                    <td>{projet.Indicateur_ODD}</td>
                    <td>{projet.Natures}</td>
                    <td>{projet.Financement}</td>
                    <td>{projet.D_signations}</td>
                    <td>{projet.Co_t_Ar_}</td>
                    <td>{projet.Indicateur_ODD}</td>
                    <td>{projet.Unit_s}</td>
                  </tr> )
                })}
              </tbody>
              <thead>
                <tr>
                  <th>Date_PPM</th>
                  <th>Date_TEF</th>
                  <th>Bailleurs</th>
                  <th>Indicateur_de_Performance</th>
                  <th>Date_envoi_Primature</th>
                  <th>Date_retour_Primature</th>
                  <th>R_f_March_Conv_</th>
                </tr>
              </thead>
              <tbody>
              {data.map((projet,index)=>{
                return (
                  <tr key={index}>
                    <td>{projet.Date_PPM}</td>
                    <td>{projet.Date_TEF}</td>
                    <td>{projet.Bailleurs}</td>
                    <td>{projet.Indicateur_de_Performance}</td>
                    <td>{projet.Date_envoi_Primature}</td>
                    <td>{projet.Date_retour_Primature}</td>
                    <td>{projet.R_f_March_Conv_}</td>
                  </tr> )
                })}
              </tbody>
              <thead>
                <tr>
                  <th>Montant_engag_</th>
                  <th>Date_OS</th>
                  <th>D_lai_d_ex_cution_jours_</th>
                  <th>Titulaire</th>
                  <th>Temporel</th>
                  <th>Financi_re</th>
                  <th>Date_lancement_AO</th>
                  {/* <th>Date_Remise_AO</th> */}
                </tr>
              </thead>
              <tbody>
              {data.map((projet,index)=>{
                return (
                  <tr key={index}>
                    <td>{projet.Montant_engag_}</td>
                    <td>{projet.Date_OS}</td>
                    <td>{projet.D_lai_d_ex_cution_jours_}</td>
                    <td>{projet.Titulaire}</td>
                    <td>{projet.Temporel}</td>
                    <td>{projet.Financi_re}</td>
                    <td>{projet.Date_lancement_AO}</td>
                    {/* <td>{projet.Date_Remise_AO}</td> */}
                  </tr> )
                })}
              </tbody>
              <thead>
                <tr>
                  <th>Physique</th>
                  <th>SITUATION</th>
                  <th>ETAT_D_AVANCEMENT</th>
                  <th>Observations</th>
                  <th>Nbre_d_emploi_cr_e</th>
                  <th>Programme_LF_</th>
                  <th>Convention_LF_</th>
                </tr>
              </thead>
              <tbody>
              {data.map((projet,index)=>{
                return (
                  <tr key={index}>
                    <td>{projet.Physique}</td>
                    <td>{projet.SITUATION}</td>
                    <td>{projet.ETAT_D_AVANCEMENT}</td>
                    <td>{projet.Observations}</td>
                    <td>{projet.Nbre_d_emploi_cr_e}</td>
                    <td>{projet.Programme_LF_}</td>
                    <td>{projet.Convention_LF_}</td>
                  </tr> )
                })}
              </tbody>
            </table>
          </div>
        {/* <List>
        {data.map((projet,index)=>{
          return <table key={index} className='actual-receipt'>
          <tbody>
                  <td>
                      <ListItemText primary="REGION" secondary={projet.REGIONS_CONCERNEES} />
                      <ListItemText primary="AXE" secondary={projet.AXE}/>
                      <ListItemText primary="PK_DEBUT" secondary={projet.PK_DEBUT}/>
                      <ListItemText primary="PK_FIN" secondary={projet.PK_FIN}/>
                      <ListItemText primary="DISTRICTS" secondary={projet.DISTRICTS}/>
                      <ListItemText primary="Communes" secondary={projet.Communes}/>
                      <ListItemText primary="Population_touch_e" secondary={projet.Population_touch_e}/>
                      <ListItemText primary="Nbre_d_emploi_cr_e" secondary={projet.Nbre_d_emploi_cr_e}/>
                      <ListItemText primary="Programme_LF_" secondary={projet.Programme_LF_}/>
                      <ListItemText primary="Convention_LF_" secondary={projet.Convention_LF_}/>
                      <ListItemText primary="Convention_Libell_e_LF_" secondary={projet.Convention_Libell_e_LF_}/>
                      <ListItemText primary="Directions" secondary={projet.Directions}/>
                      <ListItemText primary="ACTIVITES" secondary={projet.ACTIVITES}/>
                      <ListItemText primary="Co_t_estimatif_Ar_" secondary={projet.Co_t_estimatif_Ar_}/>
                      <ListItemText primary="Responsable_du_Projet" secondary={projet.Responsable_du_Projet}/>
                      <ListItemText primary="Valeur_Cible_Unit_s_" secondary={projet.Valeur_Cible_Unit_s_}/>
                      <ListItemText primary="Indicateur_PEM_PTA" secondary={projet.Indicateur_PEM_PTA}/>
                      <ListItemText primary="Indicateur_ODD" secondary={projet.Indicateur_ODD}/>
                  </td>
                <td>
                  <ListItemText primary="Natures" secondary={projet.Natures}/>
                  <ListItemText primary="Financement" secondary={projet.Financement}/>
                  <ListItemText primary="Bailleurs" secondary={projet.Bailleurs}/>
                  <ListItemText primary="Indicateur_de_Performance" secondary={projet.Indicateur_de_Performance}/>
                  <ListItemText primary="Date_envoi_Primature" secondary={projet.Date_envoi_Primature}/>
                  <ListItemText primary="Date_retour_Primature" secondary={projet.Date_retour_Primature}/>
                  <ListItemText primary="Date_envoi_PRM" secondary={projet.Date_envoi_PRM}/>
                  <ListItemText primary="Date_Retour_PRM" secondary={projet.Date_Retour_PRM}/>
                  <ListItemText primary="R_f_March_Conv_" secondary={projet.R_f_March_Conv_}/>
                  <ListItemText primary="D_signations" secondary={projet.D_signations}/>
                  <ListItemText primary="Co_t_Ar_" secondary={projet.Co_t_Ar_}/>
                  <ListItemText primary="Date_PPM" secondary={projet.Date_PPM}/>
                  <ListItemText primary="Date_TEF" secondary={projet.Date_TEF}/>
                </td>
                <td>
                  <ListItemText primary="Montant_engag_" secondary={projet.Montant_engag_}/>
                  <ListItemText primary="Date_OS" secondary={projet.Date_OS}/>
                  <ListItemText primary="D_lai_d_ex_cution_jours_" secondary={projet.D_lai_d_ex_cution_jours_}/>
                  <ListItemText primary="Titulaire" secondary={projet.Titulaire}/>
                  <ListItemText primary="Temporel" secondary={projet.Temporel}/>
                  <ListItemText primary="Financi_re" secondary={projet.Financi_re}/>
                  <ListItemText primary="Date_lancement_AO" secondary={projet.Date_lancement_AO}/>
                  <ListItemText primary="Date_Remise_AO" secondary={projet.Date_Remise_AO}/>
                  <ListItemText primary="Unit_s" secondary={projet.Unit_s}/>
                  <ListItemText primary="Physique" secondary={projet.Physique}/>
                  <ListItemText primary="SITUATION" secondary={projet.SITUATION}/>
                  <ListItemText primary="ETAT_D_AVANCEMENT" secondary={projet.ETAT_D_AVANCEMENT}/>
                  <ListItemText primary="Observations" secondary={projet.Observations}/>
                </td>
            </tbody>
          </table>
        })}
        </List> */}
      </Dialog>
    </React.Fragment>
)
}



export default VoirPlus