import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import melaky from '../../assets/imgMap/melaky.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const Melaky = ({handleMelakyClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const melakyCoordinates = [
    [-17.5000, 44.0000],
    [-17.5000, 45.9000],
    [-18.0000, 45.9000],
    [-18.0000, 44.0000]
  ];
  const handleRN1bClick = () => {
    const rn1bMapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1937958.9148005554!2d44.0579696054559!3d-18.434857876130113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x1f56bc6b76f40cb9%3A0xf288ef726b06d286!2sMaintirano!3m2!1d-18.0524283!2d44.034196099999996!4m5!1s0x21fb227e91d8b08d%3A0x71c610a2da7b19a3!2sAnalavory!3m2!1d-18.9749354!2d46.7212587!5e0!3m2!1sfr!2smg!4v1714739239034!5m2!1sfr!2smg';
      if (iframeSrc === rn1bMapURL) {
          setIframeSrc(null); 
      } else {
          setIframeSrc(rn1bMapURL); 
      }
  };
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Melaky Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleMelakyClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setMelakyClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[44].REGIONS_CONCERNEES);
           setNbTravaux(response.data[44].nbTravauxTermine);
           setAnnee(response.data[44].Annee)
           setEnCours(response.data[44].nbTravauxEnCours)
           setResilie(response.data[44].nbTravauxResilie)
           setPhasePPM(response.data[44].nbTravauxPhasePPM)
           setADemarrer(response.data[44].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={melakyCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN1bClick}> Voir L'Axe</Button>
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

export default Melaky