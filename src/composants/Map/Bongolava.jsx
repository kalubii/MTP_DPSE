import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import bongolava from '../../assets/imgMap/bongolava.png'
import axios from 'axios'


const Bongolava = ({setDateSelectedIndex,setAlaotraMangoroClicked,setRegionSearch}) => {

  const [region,setRegion] = useState([])
  const [nbTravaux,setNbTravaux] = useState([])
  const [annee,setAnnee] =useState([])

  let regionName, anneeTravaux
  
  // const handleClick = () => {
  //   regionName = region
  //   anneeTravaux = annee
  //   setDateSelectedIndex(anneeTravaux)
  //   setRegionSearch(regionName)
  //   setAlaotraMangoroClicked(true)
  //   console.log(regionName,anneeTravaux)
  // }

  // useEffect(() => {
  //     const fetchSearchResults = async () => {
  //        try {
  //          const response = await axios.get('http://localhost:8081/travauxTermine');
  //          console.log(response)
  //          setRegion(response.data[8].REGIONS_CONCERNEES);
  //          setNbTravaux(response.data[8].nbTravauxTermine);
  //          setAnnee(response.data[8].Annee)
  //        } catch (error) {
  //          console.error('', error);
  //        }
  //     };
  //     fetchSearchResults();
  // }, []);

  // console.log(region,nbTravaux)

  return (<>
    {/* <div style={{border:'solid 1px',width:'fit-content'}}
    title={`REGION: ${region}\nTRAVAUX TERMINE: ${nbTravaux}`}
    > */}
    <div >
      <img src={bongolava}/>
    </div>
    </>
    )
}

export default Bongolava