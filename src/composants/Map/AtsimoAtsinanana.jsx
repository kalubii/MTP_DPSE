import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import atsimoAtsinanana from '../../assets/imgMap/atsimo_atsinanana.png'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const AtsimoAtsinanana = ({handleAtsimoAtsinananaClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAtsimoAtsinananaClicked,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

    const [region,setRegion] = useState([])
    const [nbTravaux,setNbTravaux] = useState([])
    const [annee,setAnnee] =useState([])
    const [enCours,setEnCours] = useState([])
    const [resilie,setResilie] =useState([])
    const [phasePPM,setPhasePPM] =useState([])
    const [aDemarrer,setADemarrer] =useState([])
    const [iframeSrc, setIframeSrc] = useState(null);
    const atsimoatsinananaCoordinates = [
        [-23.9000, 46.8000], // Point supérieur
        [-23.9000, 48.0000], // Point droit
        [-22.8000, 48.0000], // Point inférieur
        [-22.8000, 46.8000]  // Point gauche
    ];
    const handleRN12aClick = () => {
      const rn12aMapURL = 'https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d3755664.7620989247!2d44.43082171635053!3d-23.18328578468313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x21e8fbea073fb78f%3A0x21c14a2728de91f2!2sIrondro!3m2!1d-21.3982752!2d47.9787391!4m5!1s0x21c294a77d8cffef%3A0x30d7bdfc5ff2e32c!2sVohipeno!3m2!1d-22.3539973!2d47.840260099999995!4m5!1s0x21de98c6502026db%3A0x92b037a42f518b07!2sIhosy!3m2!1d-22.400887299999997!2d46.127902!4m5!1s0x21c4a5628728dbfb%3A0x530538853a5d9874!2sVangaindrano!3m2!1d-23.3505295!2d47.5914122!4m5!1s0x21d1bab73bbd2271%3A0xc248f47b6e3495eb!2zVMO0bGFuYXJv!3m2!1d-25.0225309!2d46.985368799999996!5e0!3m2!1sfr!2smg!4v1714984049297!5m2!1sfr!2smg';
        if (iframeSrc === rn12aMapURL) {
            setIframeSrc(null); 
        } else {
            setIframeSrc(rn12aMapURL); 
        }
    };
    let regionName, anneeTravaux
    
    const handleClick = () => {
      console.log("Alaotra Mangoro Cliquer!")
      regionName = region
      anneeTravaux = annee
      handleAtsimoAtsinananaClick()
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
             </Polygon> : <>
          <h3 style={{textAlign:'center'}}>Situation des travaux : {region}</h3>
          <PieActiveArc nbTravaux={nbTravaux} enCours={enCours} resilie={resilie} phasePPM={phasePPM} aDemarrer={aDemarrer}/></> }
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN12aClick}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe 
                    title="RN12A Map"
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

export default AtsimoAtsinanana