import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import alaotraMangoro from '../../assets/imgMap/alaotra-mangoro.png'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AlaotraMangoro = ({showCarte,showMapGoogle,setShowMapGoogle,setShowCarte,setDateSelectedIndex,setAlaotraMangoroClicked,setRegionSearch}) => {

    const [region,setRegion] = useState([])
    const [nbTravaux,setNbTravaux] = useState([])
    const [annee,setAnnee] =useState([])

    const alaotraMangoroCoordinates = [
      [-17.0000, 48.0000], // Point supérieur
      [-17.0000, 48.9000], // Point droit
      [-18.5000, 48.9000], // Point inférieur
      [-18.5000, 48.0000]  // Point gauche
  ]

    let regionName, anneeTravaux
    
    const handleClick = () => {
      console.log("Alaotra Mangoro Cliquer!")
      regionName = region
      anneeTravaux = annee
      setShowMapGoogle(false)
      setDateSelectedIndex(anneeTravaux)
      setRegionSearch(regionName)
      setShowCarte(false)
      setAlaotraMangoroClicked(true)
      console.log(regionName,anneeTravaux)
    }

    useEffect(() => {
        const fetchSearchResults = async () => {
           try {
             const response = await axios.get('http://localhost:8081/travauxTermine');
             console.log(response)
             setRegion(response.data[0].REGIONS_CONCERNEES);
             setNbTravaux(response.data[0].nbTravauxTermine);
             setAnnee(response.data[0].Annee)
           } catch (error) {
             console.error('', error);
           }
        };
        fetchSearchResults();
    }, []);

    console.log(region,nbTravaux)

  return (<>

   {showCarte?
        <Polygon positions={alaotraMangoroCoordinates} pathOptions={{ color: 'transparent' }} 
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
          </Polygon> :null  }
          
    { <div style={{border:'solid 1px',width:'fit-content'}}
        title={`REGION: ${region}\nTRAVAUX TERMINE: ${nbTravaux}`}
        >
          <img src={alaotraMangoro} onClick={handleClick}/>
        </div>}
    </>
  )
}

export default AlaotraMangoro