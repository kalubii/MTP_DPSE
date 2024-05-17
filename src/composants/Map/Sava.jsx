import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import sava from '../../assets/imgMap/sava.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Sava = ({handleSavaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const savaCoordinates = [
    [-14.0000, 50.0000], // Point supérieur
    [-15.6000, 50.5000], // Point droit
    [-14.8000, 49.5000], // Point inférieur
    [-14.7000, 49.0000]  // Point gauche
  ];
  const handleRN3bClick = () => {
    const rn3bMapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d991375.5441788911!2d49.207925409391436!3d-13.925185233986772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x2217b700896fa37b%3A0xa7d13af7be1d8e4f!2sDistrict%20d&#39;Andapa!3m2!1d-14.658228!2d49.6452092!4m5!1s0x22156e6d7f15c8af%3A0x422e726564a94af3!2sAmbilobe%2C%20Sava!3m2!1d-13.190481499999999!2d49.776709999999994!5e0!3m2!1sfr!2smg!4v1714984278605!5m2!1sfr!2smg';
    if (iframeSrc === rn3bMapURL) {
        setIframeSrc(null); 
    } else {
        setIframeSrc(rn3bMapURL);
    }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Sava Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleSavaClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setSavaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[47].REGIONS_CONCERNEES);
           setNbTravaux(response.data[47].nbTravauxTermine);
           setAnnee(response.data[47].Annee)
           setEnCours(response.data[47].nbTravauxEnCours)
           setResilie(response.data[47].nbTravauxResilie)
           setPhasePPM(response.data[47].nbTravauxPhasePPM)
           setADemarrer(response.data[47].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={savaCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN3bClick}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe
                title="RN3b Map"
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

export default Sava