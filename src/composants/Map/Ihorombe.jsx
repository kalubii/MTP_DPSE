import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ihorombe from '../../assets/imgMap/ihorombe.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Ihorombe = ({handleIhorombeClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const ihorombeCoordinates = [
    [-22.9000, 45.4000], // Point supérieur
    [-22.9000, 46.9000], // Point droit
    [-22.0000, 46.9000], // Point inférieur
    [-22.0000, 45.4000]  // Point gauche
  ];
  const handleRN27Click = () => {
    const rn27MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1885768.6400301019!2d45.65350849272353!3d-22.611176610646687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x21de98c6502026db%3A0x92b037a42f518b07!2sIhosy!3m2!1d-22.400887299999997!2d46.127902!4m5!1s0x21c319c24ea8f705%3A0xaa6824d908bff4f7!2sFarafangana!3m2!1d-22.817411999999997!2d47.818038!5e0!3m2!1sfr!2smg!4v1714983539749!5m2!1sfr!2smg';
      if (iframeSrc === rn27MapURL) {
          setIframeSrc(null); 
      } else {
          setIframeSrc(rn27MapURL); 
      }
  };
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Ihorombe Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleIhorombeClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setIhorombeClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[39].REGIONS_CONCERNEES);
           setNbTravaux(response.data[39].nbTravauxTermine);
           setAnnee(response.data[39].Annee)
           setEnCours(response.data[39].nbTravauxEnCours)
           setResilie(response.data[39].nbTravauxResilie)
           setPhasePPM(response.data[39].nbTravauxPhasePPM)
           setADemarrer(response.data[39].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={ihorombeCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN27Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                    title="RN27 Map"
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
export default Ihorombe