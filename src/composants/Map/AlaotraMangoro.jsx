import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import alaotraMangoro from '../../assets/imgMap/alaotra-mangoro.png'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';

const AlaotraMangoro = ({handleAlaotraMangoroClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,alaotraMangoroClicked,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

    const [region,setRegion] = useState([])
    const [nbTravaux,setNbTravaux] = useState([]) //Travaux TERMINE
    const [annee,setAnnee] =useState([])
    const [enCours,setEnCours] = useState([])
    const [resilie,setResilie] =useState([])
    const [phasePPM,setPhasePPM] =useState([])
    const [aDemarrer,setADemarrer] =useState([])
    const [iframeSrc, setIframeSrc] = useState(null);
    
    const alaotraMangoroCoordinates = [
      [-17.0000, 48.0000], // Point supérieur
      [-17.0000, 48.9000], // Point droit
      [-18.5000, 48.9000], // Point inférieur
      [-18.5000, 48.0000]  // Point gauche
  ]

  const handleRN3aClick = () => {
    const rn3aMapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2058302.1382415402!2d47.36239264105084!3d-18.00248006926506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x221ddd370177994d%3A0xcf8d86a5054806a8!2sAndilamena!3m2!1d-17.0127475!2d48.571262999999995!4m5!1s0x21f1054a2d138fdb%3A0x2d8defe7b2947dd8!2sMoramanga!3m2!1d-18.9489026!2d48.224426799999996!5e0!3m2!1sfr!2smg!4v1714736359801!5m2!1sfr!2smg';
      if (iframeSrc === rn3aMapURL) {
          setIframeSrc(null); 
      } else {
          setIframeSrc(rn3aMapURL); 
      }
  };

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
          <Button startIcon={<LocationOnOutlined/>} onClick={handleRN3aClick}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                title="RN5 Map"
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

export default AlaotraMangoro