import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './SousTitle';

function preventDefault(event) {
  event.preventDefault();
}

function Deposits({totalTravaux}) {
  return (
    <React.Fragment>
      <Title>Récapitulatif</Title> 
      <Typography component="p" variant="h6">
      Travaux Terminé: {totalTravaux} / 92
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        En 2022
      </Typography>
    </React.Fragment>
  );
}

export default Deposits