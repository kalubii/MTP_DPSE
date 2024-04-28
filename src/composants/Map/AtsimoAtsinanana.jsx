import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import atsimoAtsinanana from '../../assets/imgMap/atsimo_atsinanana.png'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AtsimoAtsinanana = ({setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAtsimoAtsinananaClicked,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

    const [region,setRegion] = useState([])
    const [nbTravaux,setNbTravaux] = useState([])
    const [annee,setAnnee] =useState([])

    const atsimoatsinananaCoordinates = [
        [-23.9000, 46.8000], // Point supérieur
        [-23.9000, 48.0000], // Point droit
        [-22.8000, 48.0000], // Point inférieur
        [-22.8000, 46.8000]  // Point gauche
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
      setAtsimoAtsinananaClicked(true)
      console.log(regionName,anneeTravaux)
    }

    useEffect(() => {
        const fetchSearchResults = async () => {
           try {
             const response = await axios.get('http://localhost:8081/travauxTermine');
             console.log(response)
             setRegion(response.data[6].REGIONS_CONCERNEES);
             setNbTravaux(response.data[6].nbTravauxTermine);
             setAnnee(response.data[6].Annee)
           } catch (error) {
             console.error('', error);
           }
        };
        fetchSearchResults();
    }, []);

    console.log(region,nbTravaux)

    return (<>

      {showCarte?
           <Polygon positions={atsimoatsinananaCoordinates} pathOptions={{ color: 'transparent' }} 
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
             <img src={atsimoAtsinanana} onClick={handleClick}/>
           </div> }
             
       </>
     )
}

export default AtsimoAtsinanana