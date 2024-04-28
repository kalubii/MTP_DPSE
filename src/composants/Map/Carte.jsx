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


const Carte = ({showCarte,setShowCarte,showProjet,setShowProjet,setDateSelectedIndex,setRegionSearch,alaotraMangoroClicked,setAtsimoAtsinananaClicked,setAlaotraMangoroClicked,setAmoronIManiaClicked,setAnalanjirofoClicked,setAnalamangaClicked,setAndroyClicked,setAnosyClicked,setAtsimoAndrefanaClicked,setAtsinananaClicked,setBetsibokaClicked,setBoenyClicked,setBongolavaClicked,setDianaClicked,setHauteMatsiatraClicked,setIhorombeClicked,setItasyClicked,setMelakyClicked,setMenabeClicked,setSavaClicked,setSofiaClicked,setVakinankaratraClicked,setVatovavyFitovinanyClicked}) => {

        const [showMapGoogle,setShowMapGoogle] = useState(true)
        // const [showAlaotraMangoro,setShowAlaotraMangoro] = useState(false)

          // Coordonnées géographiques des sommets du losange sur la région Analamanga
    // const analamangaCoordinates = [
    //     [-17.9100, 47.2000],
    //     [-18.6000, 47.2000],
    //     [-18.8000, 47.4000],
    //     [-18.9000, 47.9100],
    //     [-18.8000, 47.9000]
    // ];

    // Coordonnées géographiques des sommets du losange sur la région Diana
    // const dianaCoordinates = [
    //     [-14.0000, 48.2000], // Point supérieur
    //     [-12.6000, 50.5000], // Point droit
    //     [-11.9000, 50.0000], // Point inférieur
    //     [-11.1000, 49.8000]  // Point gauche
    // ];

    // Coordonnées géographiques des sommets du losange sur la région Sofia
    // const sofiaCoordinates = [
    //     // Ajoutez les coordonnées pour la région Sofia
    //     [-15.0000, 49.0000], // Point supérieur
    //     [-16.1000, 49.4000], // Point droit
    //     [-14.0000, 48.0000], // Point inférieur
    //     [-16.5000, 47.5000]  // Point gauche
    // ];
    // const savaCoordinates = [
    //     [-14.0000, 50.0000], // Point supérieur
    //     [-15.6000, 50.5000], // Point droit
    //     [-14.8000, 49.5000], // Point inférieur
    //     [-14.7000, 49.0000]  // Point gauche
    // ];

    // const analanjirofoCoordinates = [
    //     [-17.0000, 50.0000], // Point supérieur
    //     [-17.0000, 49.0000], // Point droit
    //     [-15.5000, 49.5000], // Point inférieur
    //     [-15.5000, 50.0000]  // Point gauche
    // ];

    // const boenyCoordinates = [
    //     [-17.1000, 45.5000], // Point supérieur
    //     [-17.0000, 46.6000], // Point droit
    //     [-15.7000, 47.0000], // Point inférieur
    //     [-16.0000, 44.5000]  // Point gauche
    // ];

    // const betsibokaCoordinates = [
    //     [-16.5000, 47.0000], // Point supérieur
    //     [-16.9000, 47.8000], // Point droit
    //     [-17.9000, 47.8000], // Point inférieur
    //     [-17.9000, 47.0000]  // Point gauche
    // ];

    // const melakyCoordinates = [
    //     [-17.5000, 44.0000],
    //     [-17.5000, 45.9000],
    //     [-18.0000, 45.9000],
    //     [-18.0000, 44.0000]
    // ];

    // const atsinananaCoordinates = [
    //     [-18.0000, 49.5000],
    //     [-18.0000, 48.7000],
    //     [-20.0000, 48.7000],
    //     [-20.0000, 49.5000]
    // ];


    // const bongolavaCoordinates = [
    //     [-19.0000, 46.1000], // Point supérieur
    //     [-18.4000, 47.0000], // Point droit
    //     [-17.8000, 46.0000], // Point inférieur
    //     [-17.8000, 46.0000]  // Point gauche
    // ];
    // const itasyCoordinates = [
    //     [-18.6000, 46.9000], // Point supérieur
    //     [-19.3000, 46.5000], // Point droit
    //     [-19.4000, 46.7000], // Point inférieur
    //     [-18.9000, 47.5000]  // Point gauche
    // ];

    // const vakinakaratraCoordinates = [
    //     [-20.0000, 46.0000], // Point supérieur
    //     [-20.0000, 47.7000], // Point droit
    //     [-19.4000, 47.7000], // Point inférieur
    //     [-19.4000, 46.0000]  // Point gauche
    // ];
    // const amoromaniaCoordinates = [
    //     [-20.9000, 46.0000], // Point supérieur
    //     [-20.9000, 47.7000], // Point droit
    //     [-20.3000, 47.7000], // Point inférieur
    //     [-20.3000, 46.0000]  // Point gauche
    // ];
    // const menabeCoordinates = [
    //     [-20.9000, 44.5000], // Point supérieur
    //     [-20.9000, 45.7000], // Point droit
    //     [-19.3000, 45.7000], // Point inférieur
    //     [-19.3000, 44.5000]  // Point gauche
    // ];
    // const matsiatraambonyCoordinates = [
    //     [-21.9000, 46.0000], // Point supérieur
    //     [-21.9000, 47.0000], // Point droit
    //     [-21.0000, 47.0000], // Point inférieur
    //     [-21.0000, 46.0000]  // Point gauche
    // ];
    // const atsimoandrefanaCoordinates = [
    //     [-23.9000, 43.8000], // Point supérieur
    //     [-23.9000, 45.0000], // Point droit
    //     [-22.3000, 45.0000], // Point inférieur
    //     [-22.3000, 43.8000]  // Point gauche
    // ];

    // const vatovavyCoordinates = [
    //     [-21.6000, 47.6000], // Point supérieur
    //     [-21.0000, 48.5000], // Point droit
    //     [-20.3000, 48.5000], // Point inférieur
    //     [-20.3000, 47.6000]  // Point gauche
    // ];
    const fitovinanyCoordinates = [
        [-22.2000, 47.4000], // Point supérieur
        [-22.2000, 48.3000], // Point droit
        [-21.6000, 48.3000], // Point inférieur
        [-21.6000, 47.4000]  // Point gauche
    ];

    // const ihorombeCoordinates = [
    //     [-22.9000, 45.4000], // Point supérieur
    //     [-22.9000, 46.9000], // Point droit
    //     [-22.0000, 46.9000], // Point inférieur
    //     [-22.0000, 45.4000]  // Point gauche
    // ];

    // const atsimoatsinananaCoordinates = [
    //     [-23.9000, 46.8000], // Point supérieur
    //     [-23.9000, 48.0000], // Point droit
    //     [-22.8000, 48.0000], // Point inférieur
    //     [-22.8000, 46.8000]  // Point gauche
    // ];

    // const anosyCoordinates = [
    //     [-24.3000, 45.4000], // Point supérieur
    //     [-24.3000, 46.9000], // Point droit
    //     [-23.7000, 46.9000], // Point inférieur
    //     [-23.7000, 45.4000]  // Point gauche
    // ];

    // const androyCoordinates = [
    //     [-25.3000, 45.1000], // Point supérieur
    //     [-25.3000, 45.9000], // Point droit
    //     [-24.2000, 45.9000], // Point inférieur
    //     [-24.2000, 45.1000]  // Point gauche
    // ];

  return (<>
        {/* <div style={{backgroundImage: `url(${MadagascarMap})`,backgroundRepeat:'no-repeat', padding:'24%',backgroundPosition:'center'}}>
            
        </div> */}

        {showMapGoogle? <MapContainer center={[-18.766947, 47.475433]} zoom={6} style={{ width: '100%', height: '100vh' }} scrollWheelZoom={false}
        >
            {/* Couche de tuiles OpenStreetMap */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            
            <AlaotraMangoro
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}
            />
                              <AmoronIMania
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
                showCarte={showCarte}
                showProjet={showProjet}
                setShowProjet={setShowProjet}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAndroyClicked={setAndroyClicked}
                setRegionSearch={setRegionSearch}/>

                <AtsimoAndrefana
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
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setItasyClicked={setItasyClicked}
                setRegionSearch={setRegionSearch}/>
                <Melaky
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setMelakyClicked={setMelakyClicked}
                setRegionSearch={setRegionSearch}/>
                <Menabe
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setMenabeClicked={setMenabeClicked}
                setRegionSearch={setRegionSearch}/>
                <Sava
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setSavaClicked={setSavaClicked}
                setRegionSearch={setRegionSearch}/>
                <Sofia
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setSofiaClicked={setSofiaClicked}
                setRegionSearch={setRegionSearch}/>
                <Vakinankaratra
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setVakinankaratraClicked={setVakinankaratraClicked}
                setRegionSearch={setRegionSearch}/>
                <VatovavyFitovinany
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
