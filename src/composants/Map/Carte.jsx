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

import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import AtsimoAtsinanana from './AtsimoAtsinanana';
import Anosy from './Anosy';


const Carte = ({handleAlaotraMangoroClick,handleAmoronIManiaClick,handleAnalamangaClick,handleAnalanjirofoClick,handleAndroyClick,handleVatovavyFitovinanyClick,handleVakinankaratraClick,handleSofiaClick,handleSavaClick,handleMenabeClick,handleMelakyClick,handleItasyClick,handleIhorombeClick,handleHauteMatsiatraClick,handleBongolavaClick,handleBoenyClick,handleBetsibokaClick,handleAtsinananaClick,handleAtsimoAndrefanaClick,handleAtsimoAtsinananaClick,handleAnosyClick,handleDianaClick,showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,alaotraMangoroClicked,setAtsimoAtsinananaClicked,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

        const [showMapGoogle,setShowMapGoogle] = useState(true)
        // const [showAlaotraMangoro,setShowAlaotraMangoro] = useState(false)



  return (<>
        {/* <div style={{backgroundImage: `url(${MadagascarMap})`,backgroundRepeat:'no-repeat', padding:'24%',backgroundPosition:'center'}}>
            
        </div> */}

        {showMapGoogle? <MapContainer center={[-18.766947, 47.475433]} zoom={6} style={{ width: '100%', height: '100vh' }} scrollWheelZoom={false}
        >
            {/* Couche de tuiles OpenStreetMap */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            
            <AlaotraMangoro
            handleAlaotraMangoroClick={handleAlaotraMangoroClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setRegionSearch={setRegionSearch}
            />
            <AmoronIMania
            handleAmoronIManiaClick={handleAmoronIManiaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAmoronIManiaClicked={setAmoronIManiaClicked}
                setRegionSearch={setRegionSearch}/>

            <Analamanga
            handleAnalamangaClick={handleAnalamangaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAnalamangaClicked={setAnalamangaClicked}
                setRegionSearch={setRegionSearch}/>

            <Analanjirofo
            handleAnalanjirofoClick={handleAnalanjirofoClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAnalanjirofoClicked={setAnalanjirofoClicked}
                setRegionSearch={setRegionSearch}/>

            <Androy
            handleAndroyClick={handleAndroyClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAndroyClicked={setAndroyClicked}
                setRegionSearch={setRegionSearch}/>

            <Anosy
            handleAnosyClick={handleAnosyClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAnosyClicked={setAndroyClicked}
                setRegionSearch={setRegionSearch}/>

                <AtsimoAndrefana
                handleAtsimoAndrefanaClick={handleAtsimoAndrefanaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAtsimoAndrefanaClicked={setAtsimoAndrefanaClicked}
                setRegionSearch={setRegionSearch}/>

                <Atsinanana
                handleAtsinananaClick={handleAtsinananaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAtsinananaClicked={setAtsinananaClicked}
                setRegionSearch={setRegionSearch}/>

                <Betsiboka
                handleBetsibokaClick={handleBetsibokaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setBetsibokaClicked={setBetsibokaClicked}
                setRegionSearch={setRegionSearch}/>

                <Boeny
                handleBoenyClick={handleBoenyClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setBoenyClicked={setBoenyClicked}
                setRegionSearch={setRegionSearch}/>
                <Bongolava
                handleBongolavaClick={handleBongolavaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setBongolavaClicked={setBongolavaClicked}
                setRegionSearch={setRegionSearch}/>
                <Diana
                handleDianaClick={handleDianaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setDianaClicked={setDianaClicked}
                setRegionSearch={setRegionSearch}/>
                <HauteMatsiatra
                handleHauteMatsiatraClick={handleHauteMatsiatraClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setHauteMatsiatraClicked={setHauteMatsiatraClicked}
                setRegionSearch={setRegionSearch}/>

                <AtsimoAtsinanana
                handleAtsimoAtsinananaClick={handleAtsimoAtsinananaClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setRegionSearch={setRegionSearch}
                setAtsimoAtsinananaClicked={setAtsimoAtsinananaClicked}
                />
                <Ihorombe
                handleIhorombeClick={handleIhorombeClick}
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setIhorombeClicked={setIhorombeClicked}
                setRegionSearch={setRegionSearch}/>
                <Itasy
                handleItasyClick={handleItasyClick}
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setItasyClicked={setItasyClicked}
                setRegionSearch={setRegionSearch}/>
                <Melaky
                handleMelakyClick={handleMelakyClick}
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setMelakyClicked={setMelakyClicked}
                setRegionSearch={setRegionSearch}/>
                <Menabe
                handleMenabeClick={handleMenabeClick}
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setMenabeClicked={setMenabeClicked}
                setRegionSearch={setRegionSearch}/>
                <Sava
                handleSavaClick={handleSavaClick}
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setSavaClicked={setSavaClicked}
                setRegionSearch={setRegionSearch}/>
                <Sofia
                handleSofiaClick={handleSofiaClick}
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setSofiaClicked={setSofiaClicked}
                setRegionSearch={setRegionSearch}/>
                <Vakinankaratra
                handleVakinankaratraClick={handleVakinankaratraClick}
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setVakinankaratraClicked={setVakinankaratraClicked}
                setRegionSearch={setRegionSearch}/>
                <VatovavyFitovinany
                handleVatovavyFitovinanyClick={handleVatovavyFitovinanyClick}
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setVatovavyFitovinanyClicked={setVatovavyFitovinanyClicked}
                setRegionSearch={setRegionSearch}/>

        </MapContainer> 
        
                :   null}

    </>
  );
};

export default Carte;
