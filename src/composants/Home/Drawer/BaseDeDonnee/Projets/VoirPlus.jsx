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
import { TableCell } from '@mui/material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function VoirPlus({open, setOpen,resetId,data}) {

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
              Detail
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Imprimer
            </Button>
          </Toolbar>
        </AppBar>
        <List>

        {data.map((projet,index)=>{
          return <React.Fragment key={index}>
              <TableCell>
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
                  <ListItemText primary="Natures" secondary={projet.Natures}/>
                  <ListItemText primary="Financement" secondary={projet.Financement}/>
                  <ListItemText primary="Bailleurs" secondary={projet.Bailleurs}/>
                  <ListItemText primary="Co_t_estimatif_Ar_" secondary={projet.Co_t_estimatif_Ar_}/>
                  <ListItemText primary="Responsable_du_Projet" secondary={projet.Responsable_du_Projet}/>
                  <ListItemText primary="Valeur_Cible_Unit_s_" secondary={projet.Valeur_Cible_Unit_s_}/>
                  <ListItemText primary="Indicateur_PEM_PTA" secondary={projet.Indicateur_PEM_PTA}/>
                  <ListItemText primary="Indicateur_ODD" secondary={projet.Indicateur_ODD}/>
          </TableCell>
            <TableCell>
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
            </TableCell>
            <TableCell>
              <ListItemText primary="ETAT_D_AVANCEMENT" secondary={projet.ETAT_D_AVANCEMENT}/>
              <ListItemText primary="Observations" secondary={projet.Observations}/>
              <ListItemText primary="Somme_de_VC_Qt_" secondary={projet.Somme_de_VC_Qt_}/>
              <ListItemText primary="Somme_de_Physique" secondary={projet.Somme_de_Physique}/>
              <ListItemText primary="Somme_de_Av_Annuel" secondary={projet.Somme_de_Av_Annuel_2021}/>
              <ListItemText primary="Somme_de_S_1" secondary={projet.Somme_de_S_1}/>
              <ListItemText primary="Somme_de_S" secondary={projet.Somme_de_S}/>
              <ListItemText primary="Somme_de_Evolution_S_1_S" secondary={projet.Somme_de_Evolution_S_1_S}/>
              <ListItemText primary="Somme_de_G_n_ral" secondary={projet.Somme_de_G_n_ral}/>
              <ListItemText primary="Somme_de_Quantit_s_r_alis_es" secondary={projet.Somme_de_Quantit_s_r_alis_es}/>

            </TableCell>
          </React.Fragment>
        })}

        </List>
        {/* <VoirPlusPage/> */}

      </Dialog>
    </React.Fragment>
  );
}


export default VoirPlus