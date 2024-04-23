import React, { useState } from 'react';
import MadagascarMap from '../../assets/imgMap/madagascar13.gif';
import AlaotraMangoro from './AlaotraMangoro';
import AmoronIMania from './AmoronIMania';
import Analamanga from './Analamanga';
import Analanjirofo from './Analanjirofo';
import Androy from './Androy';
import AtsimoAndrefana from './AtsimoAndrefana';
import Atsinanana from './Atsinanana';
import Betsiboka from './Betsiboka';
import Boeny from './Boeny';
import Bongolava from './Bongolava';
import Diana from './Diana';
import HauteMatsiatra from './HauteMatsiatra';
import Ihorombe from './Ihorombe';
import Itasy from './Itasy';
import Menabe from './Menabe';
import Sava from './Sava';
import Sofia from './Sofia';
import Vakinankaratra from './Vakinankaratra';
import VatovavyFitovinany from './VatovavyFitovinany';
import Melaky from './Melaky';

const Carte = ({setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked}) => {

  return (<>
        {/* <div style={{backgroundImage: `url(${MadagascarMap})`,backgroundRepeat:'no-repeat', padding:'24%',backgroundPosition:'center'}}>
            
        </div> */}

        <AlaotraMangoro
        setDateSelectedIndex={setDateSelectedIndex}
        setAlaotraMangoroClicked={setAlaotraMangoroClicked}
        setRegionSearch={setRegionSearch}/>

        <AmoronIMania
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        <Analamanga
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        <Analanjirofo
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        <Androy
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        <AtsimoAndrefana
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        <Atsinanana
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        <Betsiboka
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        <Boeny
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Bongolava
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Diana
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <HauteMatsiatra
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Ihorombe
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Itasy
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Melaky
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Menabe
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Sava
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Sofia
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <Vakinankaratra
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
        <VatovavyFitovinany
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>


    </>
  );
};

export default Carte;
