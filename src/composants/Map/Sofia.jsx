import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import sofia from '../../assets/imgMap/sofia.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Sofia = ({handleSofiaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const sofiaCoordinates = [
    // Ajoutez les coordonnées pour la région Sofia
    [-15.0000, 49.0000], // Point supérieur
    [-16.1000, 49.4000], // Point droit
    [-14.0000, 48.0000], // Point inférieur
    [-16.5000, 47.5000]  // Point gauche
];
const handleRN31Click = () => {
  const rn31MapURL ='https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d985660.3776091511!2d47.786998791799235!3d-15.200254085348158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d-14.544988199999999!2d48.7383314!4m5!1s0x221966e0cc651e37%3A0x1e29abc08f94ce81!2sMandritsara!3m2!1d-15.8593096!2d48.829680599999996!5e0!3m2!1sfr!2smg!4v1714722656194!5m2!1sfr!2smg';
  if(iframeSrc === rn31MapURL){
    setIframeSrc(null);
  }else{
    setIframeSrc(rn31MapURL);
  }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Sofia Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleSofiaClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setSofiaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[48].REGIONS_CONCERNEES);
           setNbTravaux(response.data[48].nbTravauxTermine);
           setAnnee(response.data[48].Annee)
           setEnCours(response.data[48].nbTravauxEnCours)
           setResilie(response.data[48].nbTravauxResilie)
           setPhasePPM(response.data[48].nbTravauxPhasePPM)
           setADemarrer(response.data[48].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={sofiaCoordinates} pathOptions={{ color: 'transparent' }} 
               eventHandlers={{
                 click: (event) => {
                        handleClick();
                 }
              }}
           >
                 <Tooltip>
                   {`REGION: ${region}`}<br/>
                   {`TRAVAUX TERMINE: ${nbTravaux}`}
                 </Tooltip>
           </Polygon> : <>
          <h3 style={{textAlign:'center'}}>Situation des travaux : {region}</h3>
          <PieActiveArc nbTravaux={nbTravaux} enCours={enCours} resilie={resilie} phasePPM={phasePPM} aDemarrer={aDemarrer}/></>}
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN31Click}> Voir L'Axe</Button>
           {iframeSrc && (
                <iframe
                    title="RN31 Map"
                    src={iframeSrc}
                    width="100%"
                    height="400px"
                    frameBorder="0"
                ></iframe>
            )}
     </>
   )
}

export default Sofia