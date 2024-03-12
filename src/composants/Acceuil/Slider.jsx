import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
 {
    label: 'Antanambao – Manakara',
    imgPath:
      '/src/assets/img/images.jfif',
 },
 {
    label:'Imerikasinina, Antananarivo',
    imgPath:
    '/src/assets/img/images1.jfif',
 },
 {
    label: 'Ambatolampy, RN7',
    imgPath:
    '/src/assets/img/images2.jfif',
 },
 {
    label: '67h, Antananarivo',
    imgPath:
    '/src/assets/img/imagess.jfif',
 },
 {
  label: 'Mahazo, RN2 ',
  imgPath:
  '/src/assets/img/téléchargement.jfif',
  },
  {
    label: 'Antsirabe, RN7',
    imgPath:
    '/src/assets/img/téléchargementt.jfif',
  },
];

function Slider() {
 const theme = useTheme();
 const [activeStep, setActiveStep] = React.useState(0);
 const maxSteps = images.length;

 const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
 };

 const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
 };

 const handleStepChange = (step) => {
    setActiveStep(step);
 };

 return (
    <Box sx={{ maxWidth: 400, flexGrow: 1,margin:"auto", justifyContent:"center" }}>
      <Paper square elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={2000} // Délai de 3 secondes entre chaque transition automatique
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box component="img"
                sx={{
                 height: 255,
                 display: 'block',
                 maxWidth: 400,
                 overflow: 'hidden',
                 width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
          <Box sx={{display:"flex", margin:"auto", justifyContent:"center",marginY:2}}>
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                sx={{color:'#739574'}}>
                {theme.direction === 'rtl' ? (
                  <ArrowCircleRightRoundedIcon fontSize='large'/>
                ) : (
                  <ArrowCircleLeftRoundedIcon fontSize='large'/>
                )}
              </Button>
            
              <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color:'#739574'}}>
                {theme.direction === 'rtl' ? (
                  <ArrowCircleLeftRoundedIcon fontSize='large'/>
                ) : (
                  <ArrowCircleRightRoundedIcon fontSize='large'/>
                )}
              </Button>
          </Box>
    </Box>
 );
}

export default Slider;
