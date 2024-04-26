import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import hauteMatsiatra from '../../assets/imgMap/haute_matsiatra.png'
import axios from 'axios'


const HauteMatsiatra = ({setShowCarte,setDateSelectedIndex,setAlaotraMangoroClicked,setRegionSearch}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])

  let regionName, anneeTravaux
  
  const handleClick = () => {
    regionName = region
    anneeTravaux = annee
    setDateSelectedIndex(anneeTravaux)
    setRegionSearch(regionName)
    setAlaotraMangoroClicked(true)
    console.log(regionName,anneeTravaux)
  }

  useEffect(() => {
      const fetchSearchResults = async () => {
         try {
           const response = await axios.get('http://localhost:8081/travauxTermine');
           console.log(response)
           setRegion(response.data[10].REGIONS_CONCERNEES);
           setNbTravaux(response.data[10].nbTravauxTermine);
           setAnnee(response.data[10].Annee)
         } catch (error) {
           console.error('', error);
         }
      };
      fetchSearchResults();
  }, []);

  console.log(region,nbTravaux)

  return (<>
    <div style={{border:'solid 1px',width:'fit-content'}}
    title={`REGION: ${region}\nTRAVAUX TERMINE: ${nbTravaux}`}
    >
      <img src={hauteMatsiatra} onClick={handleClick}/>
    </div>
    </>
    )
}

export default HauteMatsiatra