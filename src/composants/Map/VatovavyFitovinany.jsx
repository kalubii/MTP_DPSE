import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import fitovinany from '../../assets/imgMap/vatovavy_fitovinany.png'
import axios from 'axios'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PieActiveArc from '../Home/Drawer/BaseDeDonnee/Projets/PieActiveArc';
import { Button } from '@mui/material'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
const VatovavyFitovinany = ({handleVatovavyFitovinanyClick,setShowMapGoogle,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])
  const [enCours,setEnCours] = useState([])
  const [resilie,setResilie] =useState([])
  const [phasePPM,setPhasePPM] =useState([])
  const [aDemarrer,setADemarrer] =useState([])
  const [iframeSrc, setIframeSrc] = useState(null);
  const vatovavyCoordinates = [
    [-21.6000, 47.6000], // Point supérieur
    [-21.0000, 48.5000], // Point droit
    [-20.3000, 48.5000], // Point inférieur
    [-20.3000, 47.6000]  // Point gauche
];
const handleRN25Click = () => {
  const rn25MapURL = 'https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d955795.4482178!2d47.35513799255416!3d-20.64613363997124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x21e93edcfd9cd8a1%3A0xaa4f45e83049a1e3!2sMananjary!3m2!1d-21.224514199999998!2d48.346442599999996!4m5!1s0x21edf8cda40874b5%3A0xc565333e76ca8841!2sMahanoro!3m2!1d-19.894468!2d48.8070527!4m5!1s0x21e630a5f50ea61b%3A0xfa84cb63efcc8442!2sAmbohimahasoa!3m2!1d-21.1072249!2d47.210581399999995!5e0!3m2!1sfr!2smg!4v1714986421858!5m2!1sfr!2smg';

  if (iframeSrc === rn25MapURL) {
      setIframeSrc(null); 
  } else {
      setIframeSrc(rn25MapURL);
  }
};
  let regionName, anneeTravaux
  
  const handleClick = () => {
    console.log("Alaotra Mangoro Cliquer!")
    regionName = region
    anneeTravaux = annee
    handleVatovavyFitovinanyClick()
    setShowMapGoogle(false)
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setShowCarte(false)
    setVatovavyFitovinanyClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[54].REGIONS_CONCERNEES);
           setNbTravaux(response.data[54].nbTravauxTermine);
           setAnnee(response.data[54].Annee)
           setEnCours(response.data[54].nbTravauxEnCours)
           setResilie(response.data[54].nbTravauxResilie)
           setPhasePPM(response.data[54].nbTravauxPhasePPM)
           setADemarrer(response.data[54].nbTravauxADemarrer)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>

    {showCarte?
         <Polygon positions={vatovavyCoordinates} pathOptions={{ color: 'transparent' }} 
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
          <Button startIcon={<LocationOnOutlinedIcon/>} onClick={handleRN25Click}> Voir L'Axe</Button>
           {iframeSrc && (
            <iframe
                title="RN25 Map"
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

export default VatovavyFitovinany