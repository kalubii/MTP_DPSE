import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import analanjirofo from '../../assets/imgMap/analanjirofo.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';

const Analanjirofo = ({handleAnalanjirofoClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);

  const analanjirofoCoordinates = [
    [-17.0000, 50.0000], // Point supérieur
    [-17.0000, 49.0000], // Point droit
    [-15.5000, 49.5000], // Point inférieur
    [-15.5000, 50.0000]  // Point gauche
];
  const handleRN5Click = () => {
    const rn5MapURL = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2325888.5182506354!2d47.799140706906876!3d-16.777519304616312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x21f5004877b03b39%3A0xdd4a6822e32e1e71!2sToamasina!3m2!1d-18.1442811!2d49.395783599999994!4m5!1s0x2218144511a36513%3A0xe8fb190d234dfd28!2sMaroantsetra!3m2!1d-15.435398699999999!2d49.7392575!5e0!3m2!1sfr!2smg!4v1714735502944!5m2!1sfr!2smg';
      if (iframeSrc === rn5MapURL) {
          setIframeSrc(null); 
      } else {
          setIframeSrc(rn5MapURL); 
      }
  };
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Analanjirofo Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleAnalanjirofoClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setAnalanjirofoClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[11].REGIONS_CONCERNEES);
           setNbTravaux(response.data[11].nbTravauxTermine);
           setAnnee(response.data[11].Annee)
           setEnCours(response.data[11].nbTravauxEnCours)
           setResilie(response.data[11].nbTravauxResilie)
           setPhasePPM(response.data[11].nbTravauxPhasePPM)
           setADemarrer(response.data[11].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={analanjirofoCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <PieActiveArc nbTravaux={nbTravaux} enCours={enCours} resilie={resilie} phasePPM={phasePPM} aDemarrer={aDemarrer}/></>}
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN5Click}> Voir L'Axe</Button>
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

export default Analanjirofo