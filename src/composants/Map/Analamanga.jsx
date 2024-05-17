import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import analamanga from '../../assets/imgMap/analamanga.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';

const Analamanga = ({handleAnalamangaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);

  const analamangaCoordinates = [
    [-17.9100, 47.2000],
    [-18.6000, 47.2000],
    [-18.8000, 47.4000],
    [-18.9000, 47.9100],
    [-18.8000, 47.9000]
];

const handleRN2Click = () => {
  const rn2MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d966202.5168486846!2d47.412464229195635!3d-18.921273836060312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x21f07de34f1f4eb3%3A0xdf110608bcc082f9!2sTananarive!3m2!1d-18.9184607!2d47.5211293!4m5!1s0x21f166bd2c7cfda1%3A0xfa88ec51102da46b!2sMarozevo!3m2!1d-18.9711875!2d48.623853!5e0!3m2!1sfr!2smg!4v1714737222828!5m2!1sfr!2smg';
    if (iframeSrc === rn2MapURL) {
        setIframeSrc(null); 
    } else {
        setIframeSrc(rn2MapURL); 
    }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Analamanga Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleAnalamangaClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setAnalamangaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[3].REGIONS_CONCERNEES);
           setNbTravaux(response.data[3].nbTravauxTermine);
           setAnnee(response.data[3].Annee)
           setEnCours(response.data[3].nbTravauxEnCours)
           setResilie(response.data[3].nbTravauxResilie)
           setPhasePPM(response.data[3].nbTravauxPhasePPM)
           setADemarrer(response.data[3].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={analamangaCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN2Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                title="RN5 Map"
                    src={iframeSrc}
                    width="100%"
                    height="500px"
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

export default Analamanga