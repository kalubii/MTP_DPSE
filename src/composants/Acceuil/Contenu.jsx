import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
 '/src/assets/img/images.jfif',
 '/src/assets/img/images2.jfif',
 '/src/assets/img/téléchargement.jfif'
];

// Variantes d'animation ajustées pour une transition de l'intérieur vers l'extérieur
const imageVariants = {
 enter: { opacity: 1, scale: 1, originX: 0, originY: 0 }, // Scale de 1 pour une animation sans redimensionnement
 exit: { opacity: 0, scale: 1, originX: 0, originY: 0 }, // Scale de 1.5 pour une animation vers l'extérieur
};

const ImageSlider = () => {
 const [page, setPage] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % images.length);
    }, 5000); // Change l'image toutes les 2 secondes

    return () => clearInterval(interval); // Nettoyez l'intervalle lors du démontage du composant
 }, []);

 return (
    <AnimatePresence mode='wait'>
      <motion.img
        key={page}
        src={images[page]}
        initial={{ opacity: 0, scale: 1.5 }} // Commencer à l'extérieur pour une transition fluide
        animate="enter"
        exit="exit"
        variants={imageVariants}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: 'auto' }} // Assurez-vous que les images sont bien redimensionnées
      />
    </AnimatePresence>
 );
};

const Contenu = () => {
 return (
    <div className="container">
      <Box sx={{ border: '1px solid', borderRadius: '16px', width: "100%", padding: "20px" }}>
        <div className="row">
          <div className="col-md-8">
            Votre texte ici
          </div>
          <div className="col-md-4">
            <ImageSlider />
          </div>
        </div>
      </Box>
    </div>
 );
};

export default Contenu;
