import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import anosy from '../../assets/imgMap/anosy.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';

const Anosy = ({handleAnosyClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const anosyCoordinates = [
    [-24.3000, 45.4000], // Point supérieur
    [-24.3000, 46.9000], // Point droit
    [-23.7000, 46.9000], // Point inférieur
    [-23.7000, 45.4000]  // Point gauche
];
const handleRN13Click = () => {
  const rn13MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1869395.3456525244!2d45.38957054113215!3d-23.77721695102919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x21de98c6502026db%3A0x92b037a42f518b07!2sIhosy!3m2!1d-22.400887299999997!2d46.127902!4m5!1s0x21d1bab73bbd2271%3A0xc248f47b6e3495eb!2stolanaro!3m2!1d-25.0225309!2d46.985368799999996!5e0!3m2!1sfr!2smg!4v1714717590618!5m2!1sfr!2smg';
  if(iframeSrc === rn13MapURL){
    setIframeSrc(null);
  }else{
    setIframeSrc(rn13MapURL);
  }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Anosy Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleAnosyClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setAnosyClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[17].REGIONS_CONCERNEES);
           setNbTravaux(response.data[17].nbTravauxTermine);
           setAnnee(response.data[17].Annee)
           setEnCours(response.data[17].nbTravauxEnCours)
           setResilie(response.data[17].nbTravauxResilie)
           setPhasePPM(response.data[17].nbTravauxPhasePPM)
           setADemarrer(response.data[17].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>
    {showCarte?
         <Polygon positions={anosyCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <PieActiveArc nbTravaux={nbTravaux} enCours={enCours} resilie={resilie} phasePPM={phasePPM} aDemarrer={aDemarrer}/></> }
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN13Click}> Voir L'Axe</Button>
           {iframeSrc && (
                <iframe
                    title="RN13 Map"
                    src={iframeSrc}
                    width="100%"
                    height="400px"
                    frameBorder="0"
                ></iframe>
            )}
     </>
   )
}

export default Anosy