import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import atsimoAndrefana from '../../assets/imgMap/atsimo_andrefana.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';


const AtsimoAndrefana = ({handleAtsimoAndrefanaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);

  const atsimoandrefanaCoordinates = [
    [-23.9000, 43.8000], // Point supérieur
    [-23.9000, 45.0000], // Point droit
    [-22.3000, 45.0000], // Point inférieur
    [-22.3000, 43.8000]  // Point gauche
];

const handleRN9Click = () => {
  const rn9MapURL = 'https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d3756528.136180358!2d42.17912856624014!3d-23.15251032492614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x1f5ff970d80b28f1%3A0xc5f9a868f29ff442!2sMandabe!3m2!1d-21.0390318!2d44.9300055!4m5!1s0x1f647c4652cc74c9%3A0xd1603ce8723654a5!2zVHVsw6lhcg!3m2!1d-23.3516191!2d43.6854936!4m5!1s0x1f7da85a87cb03d9%3A0xafaab4c8935d892!2sEjeda!3m2!1d-24.3498278!2d44.5195802!4m5!1s0x21d4030fff0290e3%3A0x238e02216ac63af7!2sAmbovombe!3m2!1d-25.1720132!2d46.089712399999996!5e0!3m2!1sfr!2smg!4v1714981488453!5m2!1sfr!2smg';
    if (iframeSrc === rn9MapURL) {
        setIframeSrc(null); 
    } else {
        setIframeSrc(rn9MapURL); 
    }
};

  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Alaotra Mangoro Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleAtsimoAndrefanaClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setAtsimoAndrefanaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[20].REGIONS_CONCERNEES);
           setNbTravaux(response.data[20].nbTravauxTermine);
           setAnnee(response.data[20].Annee)
           setEnCours(response.data[20].nbTravauxEnCours)
           setResilie(response.data[20].nbTravauxResilie)
           setPhasePPM(response.data[20].nbTravauxPhasePPM)
           setADemarrer(response.data[20].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={atsimoandrefanaCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN9Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                    title="RN9 Map"
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

export default AtsimoAndrefana