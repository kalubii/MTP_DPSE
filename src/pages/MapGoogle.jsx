import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet'; // Importation des composants de react-leaflet
import 'leaflet/dist/leaflet.css'; // Importation des styles CSS de Leaflet
import { useState } from 'react';
import Analamanga from '../composants/Map/Analamanga';

// Coordonnées géographiques de la région Analamanga
const analamangaCoords = [
  [
    [-18.876465, 47.470497], // Coin sud-ouest de la région Analamanga
    [-18.828891, 47.528701], // Coin nord-ouest de la région Analamanga
    [-18.906057, 47.582771], // Coin nord-est de la région Analamanga
    [-18.948452, 47.520599], // Coin sud-est de la région Analamanga
    [-18.876465, 47.470497], // Retour au coin sud-ouest pour fermer le polygone
    // Vous pouvez ajouter d'autres coordonnées pour mieux définir la région
  ],
];

export default function MapGoogle() {
  const [showAnalamanga,setShowAnalamanga] = useState(false)

  return (
    <MapContainer center={[-18.766947, 47.475433]} zoom={10} style={{ width: '100%', height: '100vh' }}>
      {/* Couche de tuiles OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Polygone pour la région Analamanga */}
      <Polygon
        positions={analamangaCoords}
        pathOptions={{ color: 'blue', weight: 2, fillColor: 'purple' }} // Style initial du polygone
        eventHandlers={{
          mouseover: (event) => {
            setShowAnalamanga(true)
            // Change la couleur en rouge lorsque le curseur passe sur la région Analamanga
            event.target.setStyle({ color: 'red', fillColor: 'red' });
            // Affiche le nom de la région dans un Popup
            event.target.bindPopup('Analamanga').openPopup();
          },
          mouseout: (event) => {
            // setShowAnalamanga(false)
            // Change la couleur du polygone en bleu pour les frontières et violet pour le remplissage
            event.target.setStyle({ color: 'blue', fillColor: 'purple' });
            // Ferme le Popup lorsqu'on quitte la région
            event.target.closePopup();
          },
        }}
      >
        {/* Popup avec le nom de la région Analamanga */}
        <Popup>Analamanga</Popup>
        <div style={{display:'flex',margin:'auto',justifyContent:'right'}}>
        {showAnalamanga?<Analamanga/>:null}
      </div>
      </Polygon>
    </MapContainer>
  );
}
