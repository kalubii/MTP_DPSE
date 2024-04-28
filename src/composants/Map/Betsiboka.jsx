import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import betsiboka from '../../assets/imgMap/betsiboka.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Betsiboka = ({setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])

  const betsibokaCoordinates = [
    [-16.5000, 47.0000], // Point supérieur
    [-16.9000, 47.8000], // Point droit
    [-17.9000, 47.8000], // Point inférieur
    [-17.9000, 47.0000]  // Point gauche
];

  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Alaotra Mangoro Cliquer!")
    regionName = region
    anneeTravaux = annee
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setBetsibokaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  // useEffect(() => {
  //     const fetchSearchResults = async () => {
  //        try {
  //          const response = await axios.get('http://localhost:8081/travauxTermine');
  //          console.log(response)
  //          setRegion(response.data[8].REGIONS_CONCERNEES);
  //          setNbTravaux(response.data[8].nbTravauxTermine);
  //          setAnnee(response.data[8].Annee)
  //        } catch (error) {
  //          console.error('', error);
  //        }
  //     };
  //     fetchSearchResults();
  // }, []);

  // console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={betsibokaCoordinates} pathOptions={{ color: 'transparent' }} 
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
           </Polygon> : <div style={{border:'solid 1px',width:'fit-content'}}
         title={`REGION: ${region}\nTRAVAUX TERMINE: ${nbTravaux}`}
         >
           <img src={betsiboka} onClick={handleClick}/>
         </div> }
           
     </>
   )
}

export default Betsiboka