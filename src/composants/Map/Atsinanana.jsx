import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import atsinanana from '../../assets/imgMap/atsinanana.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Atsinanana = ({handleAtsinananaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);

  const atsinananaCoordinates = [
    [-18.0000, 49.5000],
    [-18.0000, 48.7000],
    [-20.0000, 48.7000],
    [-20.0000, 49.5000]
];
const handleRN2Click = () => {
  const rn2MapURL = 'https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d1931383.9779982632!2d47.13765461212203!3d-19.009393126950293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x21f07de34f1f4eb3%3A0xdf110608bcc082f9!2sTananarive!3m2!1d-18.9184607!2d47.5211293!4m5!1s0x21f5004877b03b39%3A0xdd4a6822e32e1e71!2sToamasina!3m2!1d-18.1442811!2d49.395783599999994!4m5!1s0x21edf8cda40874b5%3A0xc565333e76ca8841!2sMahanoro!3m2!1d-19.894468!2d48.8070527!5e0!3m2!1sfr!2smg!4v1714738800052!5m2!1sfr!2smg';
    if (iframeSrc === rn2MapURL) {
        setIframeSrc(null); 
    } else {
        setIframeSrc(rn2MapURL); 
    }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Atsinana Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleAtsinananaClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setAtsinananaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[24].REGIONS_CONCERNEES);
           setNbTravaux(response.data[24].nbTravauxTermine);
           setAnnee(response.data[24].Annee)
           setEnCours(response.data[24].nbTravauxEnCours)
           setResilie(response.data[24].nbTravauxResilie)
           setPhasePPM(response.data[24].nbTravauxPhasePPM)
           setADemarrer(response.data[24].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={atsinananaCoordinates} pathOptions={{ color: 'transparent' }} 
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
                title="RN2 Map"
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

export default Atsinanana