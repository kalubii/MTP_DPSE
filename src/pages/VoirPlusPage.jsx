import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import VoirPlus from '../composants/Home/Drawer/BaseDeDonnee/Projets/VoirPlus'

const VoirPlusPage = () => {
  return (
    <Box>
                <React.Fragment>
                    <Table size="small">
                        <TableHead>
                        <TableRow>
                        <TableCell></TableCell>
                            <TableCell>Programme_LF_</TableCell>
                            <TableCell>Convention_LF_</TableCell>
                            <TableCell>Convention_Libell_e_LF_"</TableCell>
                            <TableCell>Directions</TableCell>
                            <TableCell>ACTIVITES</TableCell>
                            <TableCell>Natures</TableCell>
                            <TableCell>Financement"</TableCell>
                            <TableCell>Bailleurs</TableCell>
                            <TableCell>Co_t_estimatif_Ar_</TableCell>
                            <TableCell>Responsable_du_Projet</TableCell>
                            <TableCell>Valeur_Cible_Unit_s_</TableCell>
                            <TableCell>Indicateur_PEM_PTA</TableCell>
                            <TableCell>Indicateur_ODD</TableCell>
                            <TableCell>Indicateur_de_Performance</TableCell>
                            <TableCell>AXE</TableCell>
                            <TableCell>Geo_r_f_rencement_D_but</TableCell>
                            <TableCell>Geo_r_f_rencement_Fin</TableCell>
                            <TableCell>PK_DEBUT</TableCell>
                            <TableCell>PK_FIN</TableCell>
                            <TableCell>REGIONS_CONCERNEES</TableCell>
                            <TableCell>DISTRICTS</TableCell>
                            <TableCell>Communes</TableCell>
                            <TableCell>Population_touch_e</TableCell>
                            <TableCell>Nbre_d_emploi_cr_e</TableCell>
                            <TableCell>Date_envoi_Primature</TableCell>
                            <TableCell>Date_retour_Primature</TableCell>
                            <TableCell>Date_envoi_PRM</TableCell>
                            <TableCell>R_f_March_Conv_</TableCell>
                            <TableCell>D_signations</TableCell>
                            <TableCell>Co_t_Ar_</TableCell>
                            <TableCell>Date_PPM</TableCell>
                            <TableCell>Date_TEF</TableCell>
                            <TableCell>Montant_engag_</TableCell>
                            <TableCell>Date_OS</TableCell>
                            <TableCell>D_lai_d_ex_cution_jours_</TableCell>
                            <TableCell>Titulaire</TableCell>
                            <TableCell>Temporel</TableCell>
                            <TableCell>Financi_re</TableCell>
                            <TableCell>SITUATION</TableCell>
                            <TableCell>ETAT_D_AVANCEMENT</TableCell>
                            <TableCell>Observations</TableCell>
                            <TableCell>Date_lancement_AO</TableCell>
                            <TableCell>Date_Remise_AO</TableCell>
                            <TableCell>Unit_s</TableCell>
                            <TableCell>Somme_de_VC_Qt_</TableCell>
                            <TableCell>Somme_de_Physique</TableCell>
                            <TableCell>Somme_de_Av_Annuel_2021</TableCell>
                            <TableCell>Somme_de_S_1</TableCell>
                            <TableCell>Somme_de_S</TableCell>
                            <TableCell>Somme_de_Evolution_S_1_S</TableCell>
                            <TableCell>Somme_de_G_n_ral_Av_Annuel_2022_</TableCell>
                            <TableCell>Somme_de_Quantit_s_r_alis_es_En_2022</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* <Projet
                          dateSelectedIndex={dateSelectedIndex}
                          regionSearch={regionSearch}
                          axeSearch={axeSearch} 
                          pkFinSearch={pkFinSearch} 
                          pkDebutSearch={pkDebutSearch} /> */}
                          <VoirPlus/>

                        </TableBody>
                    </Table>
                    </React.Fragment>
    </Box>
  )
}

export default VoirPlusPage