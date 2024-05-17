import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import boeny from '../../assets/imgMap/Boeny.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Boeny = ({handleBoenyClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);

  const boenyCoordinates = [
    [-17.1000, 45.5000], // Point supérieur
    [-17.0000, 46.6000], // Point droit
    [-15.7000, 47.0000], // Point inférieur
    [-16.0000, 44.5000]  // Point gauche
];
const handleRN4Click = () => {
  const rn4bMapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d490755.20948490076!2d46.41917172129455!3d-16.064188588461455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x2202de39117fd303%3A0x7ff1e03ee8436ec8!2sAntanambazaha!3m2!1d-16.438052199999998!2d47.1654595!4m5!1s0x2203fb37df3f3697%3A0xa1f591bdaf3111e0!2sMajunga!3m2!1d-15.6921494!2d46.3336857!5e0!3m2!1sfr!2smg!4v1714732962821!5m2!1sfr!2smg';

  if (iframeSrc === rn4bMapURL) {
      setIframeSrc(null);
  } else {
      setIframeSrc(rn4bMapURL);
  }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Boeny Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleBoenyClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setBoenyClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[29].REGIONS_CONCERNEES);
           setNbTravaux(response.data[29].nbTravauxTermine);
           setAnnee(response.data[29].Annee)
           setEnCours(response.data[29].nbTravauxEnCours)
           setResilie(response.data[29].nbTravauxResilie)
           setPhasePPM(response.data[29].nbTravauxPhasePPM)
           setADemarrer(response.data[29].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={boenyCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN4Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe
                title="RN4 Map"
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


export default Boeny