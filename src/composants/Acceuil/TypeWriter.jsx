import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { TypeWriterText } from 'type-writer-text';

const TypeWriter = () => {
    const theme = useTheme();
    const [showText, setShowText] = useState(true);
    
    useEffect(() => {
      let timer;
      const hideText = () => {
        setShowText(false);
        timer = setTimeout(() => {
          setShowText(true);
        }, 1000);
      };
      return () => clearTimeout(timer);
   }, []);

 return (
    <Box sx={{fontFamily: 'Berlin Sans FB', fontSize:"3rem", color: '#739574', [theme.breakpoints.down('md')]:{fontSize:"1.6rem"}}} >
      {showText && (
        <TypeWriterText
          text={"Le Ministère des Travaux Publics"}
          animationSpeed={60}
          cursorProps={{ color: 'rgba(0,0,0,0.87)', blinkSpeed: '0.8s' }}
          showCursor={false}
        />
      )}
    </Box>
 );
};

export default TypeWriter;
