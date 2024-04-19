import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './SousTitle';

function Deposits({getAnnee2022,getTotalTravaux2022,getTotalTravauxTermine2022}) {
  return (
    <React.Fragment>
      <Title>Récapitulatif</Title> 
      <Typography component="p" variant="h6">
      Travaux Terminé: {getTotalTravauxTermine2022} / {getTotalTravaux2022}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        En {getAnnee2022}
      </Typography>
    </React.Fragment>
  );
}

export default Deposits