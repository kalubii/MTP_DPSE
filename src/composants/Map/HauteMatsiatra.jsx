import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import hauteMatsiatra from '../../assets/imgMap/haute_matsiatra.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const HauteMatsiatra = ({handleHauteMatsiatraClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const matsiatraambonyCoordinates = [
    [-21.9000, 46.0000], // Point supérieur
    [-21.9000, 47.0000], // Point droit
    [-21.0000, 47.0000], // Point inférieur
    [-21.0000, 46.0000]  // Point gauche
];
const handleRN7Click = () => {
  const rn7MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3823410.9516748996!2d44.197078807040455!3d-20.63701728198457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x21f07de34f1f4eb3%3A0xdf110608bcc082f9!2sTananarive!3m2!1d-18.9184607!2d47.5211293!4m5!1s0x21de98c6502026db%3A0x92b037a42f518b07!2sIhosy!3m2!1d-22.400887299999997!2d46.127902!5e0!3m2!1sfr!2smg!4v1714987683592!5m2!1sfr!2smg';
  if (iframeSrc === rn7MapURL) {
      setIframeSrc(null); 
  } else {
      setIframeSrc(rn7MapURL);
  }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("HauteMatsiatra Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleHauteMatsiatraClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setHauteMatsiatraClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[37].REGIONS_CONCERNEES);
           setNbTravaux(response.data[37].nbTravauxTermine);
           setAnnee(response.data[37].Annee)
           setEnCours(response.data[37].nbTravauxEnCours)
           setResilie(response.data[37].nbTravauxResilie)
           setPhasePPM(response.data[37].nbTravauxPhasePPM)
           setADemarrer(response.data[37].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={matsiatraambonyCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN7Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe
                title="RN7 Map"
                    src={iframeSrc}
                    width="100%"
                    height="400px"
                    frameBorder="0"
                    style={{ border: 'none', marginTop: '10px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        )}
     </>
   )
}

export default HauteMatsiatra