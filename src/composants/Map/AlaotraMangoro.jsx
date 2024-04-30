import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import alaotraMangoro from '../../assets/imgMap/alaotra-mangoro.png'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';

const AlaotraMangoro = ({handleAlaotraMangoroClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,alaotraMangoroClicked,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

    const [region,setRegion] = useState([])
    const [nbTravaux,setNbTravaux] = useState([]) //Travaux TERMINE
    const [annee,setAnnee] =useState([])
    const [enCours,setEnCours] = useState([])
    const [resilie,setResilie] =useState([])
    const [phasePPM,setPhasePPM] =useState([])
    const [aDemarrer,setADemarrer] =useState([])

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
      handleAlaotraMangoroClick();
      setAlaotraMangoroClicked(true)
      console.log('alaotreeeee',alaotraMangoroClicked)
      setShowMapGoogle(false)
      setDateSelectedIndex(anneeTravaux)
      setRegionSearch(regionName)
      setShowCarte(false)
      console.log(regionName,anneeTravaux)
    }

    useEffect(() => {
        const fetchSearchResults = async () => {
           try {
             const response = await axios.get('http://localhost:8081/travauxTermine');
             console.log(response)
             setRegion(response.data[1].REGIONS_CONCERNEES);
             setNbTravaux(response.data[1].nbTravauxTermine);
             setAnnee(response.data[1].Annee)
             setEnCours(response.data[1].nbTravauxEnCours)
             setResilie(response.data[1].nbTravauxResilie)
             setPhasePPM(response.data[1].nbTravauxPhasePPM)
             setADemarrer(response.data[1].nbTravauxADemarrer)
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
          </Polygon> : 
          <>
          <h3 style={{textAlign:'center'}}>Situation des travaux : {region}</h3>
          <PieActiveArc nbTravaux={nbTravaux} enCours={enCours} resilie={resilie} phasePPM={phasePPM} aDemarrer={aDemarrer}/></>}
    </>
  )
}

export default AlaotraMangoro