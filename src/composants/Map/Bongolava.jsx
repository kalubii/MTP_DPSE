import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import bongolava from '../../assets/imgMap/bongolava.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Bongolava = ({handleBongolavaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const bongolavaCoordinates = [
    [-19.0000, 46.1000], // Point supérieur
    [-18.4000, 47.0000], // Point droit
    [-17.8000, 46.0000], // Point inférieur
    [-17.8000, 46.0000]  // Point gauche
];
const handleRN1Click = () => {
  const rn1MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d966335.8905369183!2d46.12565136716192!3d-18.898187764456345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x21fc97fab8930ad9%3A0x124a8ccc2ddb91d4!2sTsiroanomandidy!3m2!1d-18.7705908!2d46.0486776!4m5!1s0x21f07de34f1f4eb3%3A0xdf110608bcc082f9!2sTananarive!3m2!1d-18.9184607!2d47.5211293!5e0!3m2!1sfr!2smg!4v1714736700417!5m2!1sfr!2smg';
    if (iframeSrc === rn1MapURL) {
        setIframeSrc(null); 
    } else {
        setIframeSrc(rn1MapURL); 
    }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Bongolava Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleBongolavaClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setBongolavaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[30].REGIONS_CONCERNEES);
           setNbTravaux(response.data[30].nbTravauxTermine);
           setAnnee(response.data[30].Annee)
           setEnCours(response.data[30].nbTravauxEnCours)
           setResilie(response.data[30].nbTravauxResilie)
           setPhasePPM(response.data[30].nbTravauxPhasePPM)
           setADemarrer(response.data[30].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={bongolavaCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN1Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                title="RN5 Map"
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

export default Bongolava