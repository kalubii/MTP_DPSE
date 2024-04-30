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

function VoirPlus({alaotraMangoroClicked ,amoronIManiaClicked ,analamangaClicked ,atsimoAtsinananaClicked, analanjirofoClicked ,androyClicked ,anosyClicked ,atsimoAndrefanaClicked ,atsinananaClicked ,betsibokaClicked ,boenyClicked, bongolavaClicked, dianaClicked ,hauteMatsiatraClicked ,ihorombeClicked ,itasyClicked ,melakyClicked ,MenabeClicked ,savaClicked ,sofiaClicked ,vakinankaratraClicked ,vatovavyFitovinanyClicked,open, setOpen,resetId,data}) {

  const [loader, setLoader] = useState(false)
  const componentPDF = useRef() 

  console.log('ALAOTRACLIKDE',alaotraMangoroClicked)

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

        <div style={{display:'flex'}}>
          <div style={{justifyContent:'center',margin:'auto'}}>
          {dianaClicked?
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989606.545415955!2d47.39262299484472!3d-13.102336098945186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213665530b707fb%3A0x62940ed9ff11f616!2sR%C3%A9gion%20Diana!5e0!3m2!1sfr!2smg!4v1714466221559!5m2!1sfr!2smg" width="500" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>:alaotraMangoroClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942594.1583421782!2d46.996075646374365!3d-18.019205934042525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f6f33c4b6c8a27%3A0xed99a4cf090db6a5!2sAlaotra-Mangoro!5e0!3m2!1sfr!2smg!4v1714485594271!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          amoronIManiaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1914222.968768064!2d44.229818890812545!3d-20.43573479485404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e600606ce5c2d5%3A0x1e94baa3b1813107!2sAmoron&#39;i%20Mania!5e0!3m2!1sfr!2smg!4v1714485645448!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          analamangaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967865.5119662374!2d46.606348913048436!3d-18.631450349055743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fa6e478818aebf%3A0x7057f99db9dc0f43!2sAnalamanga!5e0!3m2!1sfr!2smg!4v1714485678976!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          atsimoAtsinananaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877476.88530027!2d45.823798642901274!3d-23.208600528341815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21dacb0bc55a1b65%3A0x4de40fe3aad45226!2sAtsimo-Atsinanana!5e0!3m2!1sfr!2smg!4v1714485711537!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          analanjirofoClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960818.4054194156!2d48.0553699667697!3d-16.28593836941747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x221f2a7592f51b85%3A0xd1fb91e2f2d215ba!2sAnalanjirofo!5e0!3m2!1sfr!2smg!4v1714485745326!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          androyClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928088.0442843856!2d44.7333578459536!3d-24.68070140134492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21d5a4ec2ce2e81d%3A0xf43881845075b36e!2sAndroy!5e0!3m2!1sfr!2smg!4v1714485775833!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          anosyClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867157.7204206001!2d44.98810692327227!3d-23.93240347400086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21d00c8606f091bd%3A0xc12d873d60a6859!2sAnosy!5e0!3m2!1sfr!2smg!4v1714485802916!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          atsimoAndrefanaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758778.864733878!2d41.84457343688642!3d-23.07209946369372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f7e6c5cb500378f%3A0xc77c2de793d287e2!2sAtsimo-Andrefana!5e0!3m2!1sfr!2smg!4v1714485828595!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          atsinananaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931508.1475907245!2d47.27318975793877!3d-18.998698051753557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21ee725db20c4b4d%3A0x65edd4ce763aa425!2sAtsinanana!5e0!3m2!1sfr!2smg!4v1714485855250!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          betsibokaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976046.007237402!2d46.22351584757449!3d-17.13711557941253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f862d0cce9aae7%3A0xd2c897ff8efbaefe!2sBetsiboka!5e0!3m2!1sfr!2smg!4v1714485881988!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          boenyClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960916.85264022!2d44.833228719467726!3d-16.276089087726323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22018446ccc9d515%3A0x3b17b192e8956acb!2sBoeny!5e0!3m2!1sfr!2smg!4v1714485907565!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          bongolavaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968069.1279364805!2d45.61952048100333!3d-18.595665362032257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fb78ff04de71b5%3A0x2bef0b290368e3d1!2sBongolava!5e0!3m2!1sfr!2smg!4v1714485931784!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          hauteMatsiatraClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950630.080202593!2d45.82635623431176!3d-21.452865249807502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21dd61069572418d%3A0x94747f3d34d59c7!2sHaute%20Matsiatra!5e0!3m2!1sfr!2smg!4v1714485961829!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          ihorombeClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885495.9119592726!2d44.78199353956997!3d-22.63106409745707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21dbad5a9cf3d199%3A0xa49d5a7f1c0bc6af!2sIhorombe!5e0!3m2!1sfr!2smg!4v1714485987898!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          itasyClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482767.3052369397!2d46.48774170764701!3d-19.03647810815913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fadf7933ad3043%3A0xa27209696b8ad918!2sItasy!5e0!3m2!1sfr!2smg!4v1714486012037!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          melakyClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945669.096252949!2d43.63084334693257!3d-17.738279279084495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f5604eba25de633%3A0x82faeb85866dcb6a!2sMelaky!5e0!3m2!1sfr!2smg!4v1714486036655!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          MenabeClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919114.2695210506!2d43.37187635028063!3d-20.039128040438477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f5de3ef2071f3a3%3A0x69c5bb3bdae81b02!2sMenabe!5e0!3m2!1sfr!2smg!4v1714486061429!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          savaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978950.2158593186!2d48.47511634098306!3d-14.361474363602309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x221646f8c6cb27b3%3A0x6d8803c84287a395!2sSava!5e0!3m2!1sfr!2smg!4v1714486087213!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          sofiaClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970618.9668569844!2d46.94002858722822!3d-15.275146969531852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x221a5212e9d355cd%3A0x7961917802735aed!2sSofia!5e0!3m2!1sfr!2smg!4v1714486115533!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          vakinankaratraClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d961645.7050442612!2d46.17260115875001!3d-19.694371350947062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e4e1d8aec7d851%3A0x5be94ee0bfc8b2e2!2sVakinankaratra!5e0!3m2!1sfr!2smg!4v1714486142080!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          vatovavyFitovinanyClicked?
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902603.0846826546!2d46.527655130084476!3d-21.349641254570898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21c2946da9ff1539%3A0x2594c93e66a3efdf!2sVatovavy-Fitovinany!5e0!3m2!1sfr!2smg!4v1714486169287!5m2!1sfr!2smg" width="500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>:
          null}
          </div>
        <div ref={componentPDF} style={{width:'100%'}}>
          <table className='table table-bordered' style={{width:'min-content', margin:'auto',justifyContent:'center'}}>
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
        </div>
      </Dialog>
    </React.Fragment>
)
}



export default VoirPlus