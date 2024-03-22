import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './SousTitle';

function preventDefault(event) {
  event.preventDefault();
}

function Deposits() {
  return (
    <React.Fragment>
      <Title>Nombre des travaux</Title>
      <Typography component="p" variant="h4">
        3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        En 2024
      </Typography>
    </React.Fragment>
  );
}

export default Deposits