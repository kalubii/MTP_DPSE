import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ihorombe from '../../assets/imgMap/ihorombe.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Ihorombe = ({setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])

  const ihorombeCoordinates = [
    [-22.9000, 45.4000], // Point supérieur
    [-22.9000, 46.9000], // Point droit
    [-22.0000, 46.9000], // Point inférieur
    [-22.0000, 45.4000]  // Point gauche
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
    setIhorombeClicked(true)
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
           </Polygon> : <div style={{border:'solid 1px',width:'fit-content'}}
         title={`REGION: ${region}\nTRAVAUX TERMINE: ${nbTravaux}`}
         >
           <img src={ihorombe} onClick={handleClick}/>
         </div> }
           
     </>
   )
}
export default Ihorombe