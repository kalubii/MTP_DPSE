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


const Carte = ({showCarte,setShowCarte,setDateSelectedIndex,setRegionSearch,setAlaotraMangoroClicked}) => {

        const [showMapGoogle,setShowMapGoogle] = useState(true)
        // const [showAlaotraMangoro,setShowAlaotraMangoro] = useState(false)

          // Coordonnées géographiques des sommets du losange sur la région Analamanga
    const analamangaCoordinates = [
        [-17.9100, 47.2000],
        [-18.6000, 47.2000],
        [-18.8000, 47.4000],
        [-18.9000, 47.9100],
        [-18.8000, 47.9000]
    ];

    // Coordonnées géographiques des sommets du losange sur la région Diana
    const dianaCoordinates = [
        [-14.0000, 48.2000], // Point supérieur
        [-12.6000, 50.5000], // Point droit
        [-11.9000, 50.0000], // Point inférieur
        [-11.1000, 49.8000]  // Point gauche
    ];

    // Coordonnées géographiques des sommets du losange sur la région Sofia
    const sofiaCoordinates = [
        // Ajoutez les coordonnées pour la région Sofia
        [-15.0000, 49.0000], // Point supérieur
        [-16.1000, 49.4000], // Point droit
        [-14.0000, 48.0000], // Point inférieur
        [-16.5000, 47.5000]  // Point gauche
    ];
    const savaCoordinates = [
        [-14.0000, 50.0000], // Point supérieur
        [-15.6000, 50.5000], // Point droit
        [-14.8000, 49.5000], // Point inférieur
        [-14.7000, 49.0000]  // Point gauche
    ];

    const analanjirofoCoordinates = [
        [-17.0000, 50.0000], // Point supérieur
        [-17.0000, 49.0000], // Point droit
        [-15.5000, 49.5000], // Point inférieur
        [-15.5000, 50.0000]  // Point gauche
    ];

    const boenyCoordinates = [
        [-17.1000, 45.5000], // Point supérieur
        [-17.0000, 46.6000], // Point droit
        [-15.7000, 47.0000], // Point inférieur
        [-16.0000, 44.5000]  // Point gauche
    ];

    const betsibokaCoordinates = [
        [-16.5000, 47.0000], // Point supérieur
        [-16.9000, 47.8000], // Point droit
        [-17.9000, 47.8000], // Point inférieur
        [-17.9000, 47.0000]  // Point gauche
    ];

    const melakyCoordinates = [
        [-17.5000, 44.0000],
        [-17.5000, 45.9000],
        [-18.0000, 45.9000],
        [-18.0000, 44.0000]
    ];

    const atsinananaCoordinates = [
        [-18.0000, 49.5000],
        [-18.0000, 48.7000],
        [-20.0000, 48.7000],
        [-20.0000, 49.5000]
    ];


    const bongolavaCoordinates = [
        [-19.0000, 46.1000], // Point supérieur
        [-18.4000, 47.0000], // Point droit
        [-17.8000, 46.0000], // Point inférieur
        [-17.8000, 46.0000]  // Point gauche
    ];
    const itasyCoordinates = [
        [-18.6000, 46.9000], // Point supérieur
        [-19.3000, 46.5000], // Point droit
        [-19.4000, 46.7000], // Point inférieur
        [-18.9000, 47.5000]  // Point gauche
    ];

    const vakinakaratraCoordinates = [
        [-20.0000, 46.0000], // Point supérieur
        [-20.0000, 47.7000], // Point droit
        [-19.4000, 47.7000], // Point inférieur
        [-19.4000, 46.0000]  // Point gauche
    ];
    const amoromaniaCoordinates = [
        [-20.9000, 46.0000], // Point supérieur
        [-20.9000, 47.7000], // Point droit
        [-20.3000, 47.7000], // Point inférieur
        [-20.3000, 46.0000]  // Point gauche
    ];
    const menabeCoordinates = [
        [-20.9000, 44.5000], // Point supérieur
        [-20.9000, 45.7000], // Point droit
        [-19.3000, 45.7000], // Point inférieur
        [-19.3000, 44.5000]  // Point gauche
    ];
    const matsiatraambonyCoordinates = [
        [-21.9000, 46.0000], // Point supérieur
        [-21.9000, 47.0000], // Point droit
        [-21.0000, 47.0000], // Point inférieur
        [-21.0000, 46.0000]  // Point gauche
    ];
    const atsimoandrefanaCoordinates = [
        [-23.9000, 43.8000], // Point supérieur
        [-23.9000, 45.0000], // Point droit
        [-22.3000, 45.0000], // Point inférieur
        [-22.3000, 43.8000]  // Point gauche
    ];

    const vatovavyCoordinates = [
        [-21.6000, 47.6000], // Point supérieur
        [-21.0000, 48.5000], // Point droit
        [-20.3000, 48.5000], // Point inférieur
        [-20.3000, 47.6000]  // Point gauche
    ];
    const fitovinanyCoordinates = [
        [-22.2000, 47.4000], // Point supérieur
        [-22.2000, 48.3000], // Point droit
        [-21.6000, 48.3000], // Point inférieur
        [-21.6000, 47.4000]  // Point gauche
    ];

    const ihorombeCoordinates = [
        [-22.9000, 45.4000], // Point supérieur
        [-22.9000, 46.9000], // Point droit
        [-22.0000, 46.9000], // Point inférieur
        [-22.0000, 45.4000]  // Point gauche
    ];

    const atsimoatsinananaCoordinates = [
        [-23.9000, 46.8000], // Point supérieur
        [-23.9000, 48.0000], // Point droit
        [-22.8000, 48.0000], // Point inférieur
        [-22.8000, 46.8000]  // Point gauche
    ];

    const anosyCoordinates = [
        [-24.3000, 45.4000], // Point supérieur
        [-24.3000, 46.9000], // Point droit
        [-23.7000, 46.9000], // Point inférieur
        [-23.7000, 45.4000]  // Point gauche
    ];

    const androyCoordinates = [
        [-25.3000, 45.1000], // Point supérieur
        [-25.3000, 45.9000], // Point droit
        [-24.2000, 45.9000], // Point inférieur
        [-24.2000, 45.1000]  // Point gauche
    ];

  return (<>
        {/* <div style={{backgroundImage: `url(${MadagascarMap})`,backgroundRepeat:'no-repeat', padding:'24%',backgroundPosition:'center'}}>
            
        </div> */}

        {showMapGoogle? <MapContainer center={[-18.766947, 47.475433]} zoom={7} style={{ width: '100%', height: '100vh' }}>
            {/* Couche de tuiles OpenStreetMap */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Polygone en forme de losange sur la région Analamanga */}
            <Polygon positions={analamangaCoordinates} pathOptions={{ color: 'transparent' }}>
                {/* Tooltip pour afficher le nom de la région */}
                <Tooltip>Analamanga</Tooltip>
            </Polygon>

            {/* Polygone en forme de losange sur la région Diana */}
            <Polygon positions={dianaCoordinates} pathOptions={{ color: 'transparent' }}>
                {/* Tooltip pour afficher le nom de la région */}
                <Tooltip>Diana</Tooltip>
            </Polygon>

            {/* Polygone en forme de losange sur la région Sofia */}
            <Polygon positions={sofiaCoordinates} pathOptions={{ color: 'transparent' }}>
                {/* Tooltip pour afficher le nom de la région */}
                <Tooltip>Sofia</Tooltip>
            </Polygon>

            {/* Polygone en forme de losange sur la région Sava */}
            <Polygon positions={savaCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Sava</Tooltip>
            </Polygon>

            {/* Polygone en forme de losange sur la région Analanjirofo */}
            <Polygon positions={analanjirofoCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Analanjirofo</Tooltip>
            </Polygon>

             {/* Polygone en forme de losange sur la région Boeny */}
             <Polygon positions={boenyCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Boeny</Tooltip>
            </Polygon>

            {/* Polygone en forme de losange sur la région Betsiboka */}
            <Polygon positions={betsibokaCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Betsiboka</Tooltip>
            </Polygon>

            {/* Polygone en forme de losange sur la région Melaky */}
            <Polygon positions={melakyCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Melaky</Tooltip>
            </Polygon>

            {/* Polygone en forme de losange sur la région Atsinanana */}
            <Polygon positions={atsinananaCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Atsinanana</Tooltip>
            </Polygon>

            
            <AlaotraMangoro
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}
            />
              
            {/* Polygone en forme de losange sur la région Bongolava */}
            <Polygon positions={bongolavaCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Bongolava</Tooltip>
            </Polygon>
            <Polygon positions={itasyCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Itasy</Tooltip>
            </Polygon>
            <Polygon positions={vakinakaratraCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Vakinakaratra</Tooltip>
            </Polygon>
            <Polygon positions={amoromaniaCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Amoron'i Mania</Tooltip>
            </Polygon>
            <Polygon positions={menabeCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Menabe</Tooltip>
            </Polygon>
            <Polygon positions={matsiatraambonyCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Matsiatra Ambony</Tooltip>
            </Polygon>
            <Polygon positions={atsimoandrefanaCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Atsimo Andrefana</Tooltip>
            </Polygon>
            <Polygon positions={vatovavyCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Vatovavy</Tooltip>
            </Polygon>
            <Polygon positions={fitovinanyCoordinates} pathOptions={{ color: 'transparent' }}>
                <Tooltip>Fitovinany</Tooltip>
            </Polygon>
            <Polygon positions={ihorombeCoordinates} pathOptions={{ color: 'transparent', weight: 0, fillOpacity: 0 }}>
                <Tooltip>Ihorombe</Tooltip>
            </Polygon>
            <Polygon positions={atsimoatsinananaCoordinates} pathOptions={{ color: 'transparent', weight: 0, fillOpacity: 0 }}>
                <Tooltip>Atsimo Atsinanana</Tooltip>
            </Polygon>
            <Polygon positions={anosyCoordinates} pathOptions={{ color: 'transparent', weight: 0, fillOpacity: 0 }}>
                <Tooltip>Anosy</Tooltip>
            </Polygon>
            <Polygon positions={androyCoordinates} pathOptions={{ color: 'transparent', weight: 0, fillOpacity: 0 }}>
                <Tooltip>Androy</Tooltip>
            </Polygon>
        </MapContainer> 
        
                :    <Box> 
                {/* <AlaotraMangoro
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/> */}

                <AmoronIMania
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

                <Analamanga
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

                <Analanjirofo
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

                <Androy
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

                <AtsimoAndrefana
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

                <Atsinanana
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

                <Betsiboka
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

                <Boeny
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Bongolava
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Diana
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <HauteMatsiatra
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Ihorombe
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Itasy
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Melaky
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Menabe
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Sava
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Sofia
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <Vakinankaratra
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>
                <VatovavyFitovinany
                showCarte={showCarte}
                showMapGoogle={showMapGoogle}
                setShowMapGoogle={setShowMapGoogle}
                setShowCarte={setShowCarte}
                setDateSelectedIndex={setDateSelectedIndex}
                alaotraMangoroClicked={alaotraMangoroClicked}
                setAlaotraMangoroClicked={setAlaotraMangoroClicked}
                setRegionSearch={setRegionSearch}/>

        </Box>}

    </>
  );
};

export default Carte;
