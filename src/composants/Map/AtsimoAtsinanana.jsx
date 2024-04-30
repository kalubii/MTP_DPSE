import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import atsimoAtsinanana from '../../assets/imgMap/atsimo_atsinanana.png'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';

const AtsimoAtsinanana = ({setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAtsimoAtsinananaClicked,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

    const [region,setRegion] = useState([])
    const [nbTravaux,setNbTravaux] = useState([])
    const [annee,setAnnee] =useState([])
    const [enCours,setEnCours] = useState([])
    const [resilie,setResilie] =useState([])
    const [phasePPM,setPhasePPM] =useState([])
    const [aDemarrer,setADemarrer] =useState([])

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
             setRegion(response.data[23].REGIONS_CONCERNEES);
             setNbTravaux(response.data[23].nbTravauxTermine);
             setAnnee(response.data[23].Annee)
             setEnCours(response.data[23].nbTravauxEnCours)
             setResilie(response.data[23].nbTravauxResilie)
             setPhasePPM(response.data[23].nbTravauxPhasePPM)
             setADemarrer(response.data[23].nbTravauxADemarrer)
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
             </Polygon> : <PieActiveArc nbTravaux={nbTravaux} enCours={enCours} resilie={resilie} phasePPM={phasePPM} aDemarrer={aDemarrer}/> }
             
       </>
     )
}

export default AtsimoAtsinanana