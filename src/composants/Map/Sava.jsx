import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import sava from '../../assets/imgMap/sava.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Sava = ({setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])

  const savaCoordinates = [
    [-14.0000, 50.0000], // Point supérieur
    [-15.6000, 50.5000], // Point droit
    [-14.8000, 49.5000], // Point inférieur
    [-14.7000, 49.0000]  // Point gauche
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
    setSavaClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[13].REGIONS_CONCERNEES);
           setNbTravaux(response.data[13].nbTravauxTermine);
           setAnnee(response.data[13].Annee)
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
           </Polygon> : <div style={{border:'solid 1px',width:'fit-content'}}
         title={`REGION: ${region}\nTRAVAUX TERMINE: ${nbTravaux}`}
         >
           <img src={sava} onClick={handleClick}/>
         </div> }
           
     </>
   )
}

export default Sava