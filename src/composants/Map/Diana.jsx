import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import diana from '../../assets/imgMap/diana.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Diana = ({handleDianaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const dianaCoordinates = [
    [-14.0000, 48.2000], // Point supérieur
    [-12.6000, 50.5000], // Point droit
    [-11.9000, 50.0000], // Point inférieur
    [-11.1000, 49.8000]  // Point gauche
];
const handleRN6Click = () => {
  const rn6MapURL ='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3958037.8679868532!2d45.65278718814013!3d-14.353701755293509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x220320c382079b17%3A0xdabe9416ddcf784c!2sAmbondromamy!3m2!1d-16.379982599999998!2d47.1947232!4m5!1s0x226b1c7c768dd035%3A0xb13ed1ea4f98cc0a!2sAntisiranana!3m2!1d-12.3231349!2d49.2942833!5e0!3m2!1sfr!2smg!4v1714722053207!5m2!1sfr!2smg';
  if(iframeSrc === rn6MapURL){
    setIframeSrc(null);
  }else{
    setIframeSrc(rn6MapURL);
  }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Diana Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleDianaClick();
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setDianaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[32].REGIONS_CONCERNEES);
           setNbTravaux(response.data[32].nbTravauxTermine);
           setAnnee(response.data[32].Annee)
           setEnCours(response.data[32].nbTravauxEnCours)
           setResilie(response.data[32].nbTravauxResilie)
           setPhasePPM(response.data[32].nbTravauxPhasePPM)
           setADemarrer(response.data[32].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={dianaCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN6Click}> Voir L'Axe</Button>
           {iframeSrc && (
                <iframe
                    title="RN6 Map"
                    src={iframeSrc}
                    width="100%"
                    height="400px"
                    frameBorder="0"
                ></iframe>
            )}
     </>
   )
}
export default Diana