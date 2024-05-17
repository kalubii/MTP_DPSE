import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import menabe from '../../assets/imgMap/menabe.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Menabe = ({handleMenabeClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const menabeCoordinates = [
    [-20.9000, 44.5000], // Point supérieur
    [-20.9000, 45.7000], // Point droit
    [-19.3000, 45.7000], // Point inférieur
    [-19.3000, 44.5000]  // Point gauche
  ];

  const handleRN8Click = () => {
    const rn8MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d479887.5078360786!2d44.12919249001586!3d-20.003429194989362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x1f5ed04dc1075db1%3A0x93687cf04b296d45!2sMorondava!3m2!1d-20.2904186!2d44.2999955!4m5!1s0x1f58e8d4c5e3cadf%3A0xac72d50728757dcd!2sPort%20Bac%20Tsimafana%2C%20Belon&#39;i%20Tsiribihina!3m2!1d-19.710465!2d44.584618999999996!5e0!3m2!1sfr!2smg!4v1714740935481!5m2!1sfr!2smg';
      if (iframeSrc === rn8MapURL) {
          setIframeSrc(null); 
      } else {
          setIframeSrc(rn8MapURL); 
      }
  };
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Menabe Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleMenabeClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setMenabeClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[46].REGIONS_CONCERNEES);
           setNbTravaux(response.data[46].nbTravauxTermine);
           setAnnee(response.data[46].Annee)
           setEnCours(response.data[46].nbTravauxEnCours)
           setResilie(response.data[46].nbTravauxResilie)
           setPhasePPM(response.data[46].nbTravauxPhasePPM)
           setADemarrer(response.data[46].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={menabeCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN8Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                    title="RN8 Map"
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

export default Menabe