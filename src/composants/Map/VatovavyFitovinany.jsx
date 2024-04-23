import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import fitovinany from '../../assets/imgMap/vatovavy_fitovinany.png'
import axios from 'axios'


const VatovavyFitovinany = ({setDateSelectedIndex,setAlaotraMangoroClicked,setRegionSearch}) => {

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
           setRegion(response.data[9].REGIONS_CONCERNEES);
           setNbTravaux(response.data[9].nbTravauxTermine);
           setAnnee(response.data[9].Annee)
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
      <img src={fitovinany} onClick={handleClick}/>
    </div>
    </>
    )
}

export default VatovavyFitovinany