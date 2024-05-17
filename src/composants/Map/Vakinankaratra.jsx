import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import vakinankaratra from '../../assets/imgMap/vakinankaratra.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Vakinankaratra = ({handleVakinankaratraClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const vakinakaratraCoordinates = [
    [-20.0000, 46.0000], // Point supérieur
    [-20.0000, 47.7000], // Point droit
    [-19.4000, 47.7000], // Point inférieur
    [-19.4000, 46.0000]  // Point gauche
];
const handleRN34Click = () => {
  const rn34MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d959175.6774966232!2d45.692307234757905!3d-20.10148176866348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x21e19df17e90f4b3%3A0x933342e02ab7fcf3!2sMalaimbandy!3m2!1d-20.349423599999998!2d45.5983492!4m5!1s0x21e50ef0d3abe42d%3A0xec5cb6c1e49c837e!2sAntsirab%C3%A9!3m2!1d-19.8730077!2d47.0291162!5e0!3m2!1sfr!2smg!4v1714740497030!5m2!1sfr!2smg';
    if (iframeSrc === rn34MapURL) {
        setIframeSrc(null); 
    } else {
        setIframeSrc(rn34MapURL); 
    }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Vakinankaratra Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleVakinankaratraClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setVakinankaratraClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[52].REGIONS_CONCERNEES);
           setNbTravaux(response.data[52].nbTravauxTermine);
           setAnnee(response.data[52].Annee)
           setEnCours(response.data[52].nbTravauxEnCours)
           setResilie(response.data[52].nbTravauxResilie)
           setPhasePPM(response.data[52].nbTravauxPhasePPM)
           setADemarrer(response.data[52].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={vakinakaratraCoordinates} pathOptions={{ color: 'transparent' }} 
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
           </Polygon> :<>
          <h3 style={{textAlign:'center'}}>Situation des travaux : {region}</h3>
          <PieActiveArc nbTravaux={nbTravaux} enCours={enCours} resilie={resilie} phasePPM={phasePPM} aDemarrer={aDemarrer}/></>}
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN34Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                    title="RN1b Map"
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

export default Vakinankaratra