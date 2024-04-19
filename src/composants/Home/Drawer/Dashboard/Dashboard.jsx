import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Diagramme';
import Deposits from './Deposits';
import Classification from './Classification';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';



function Dashboard() {
  const [getAnnee2022,setGetAnnee2022] = useState([])
  const [getTotalTravaux2022,setGetTotalTravaux2022] = useState([])
  const [getTotalTravauxTermine2022,setGetTotalTravauxTermine2022] = useState([])
  
  useEffect(() => {
    const fetchSearchResults = async () => {
       try {
         const response = await axios.get('http://localhost:8081/nbTravauxTermine');
         setGetAnnee2022(response.data[0].Annee);
         setGetTotalTravauxTermine2022(response.data[0].nbTravauxTermine);
         setGetTotalTravaux2022(response.data[0].nbTotalTravaux);
       } catch (error) {
         console.error('', error);
       }
    };
    fetchSearchResults();
   }, []);

  return (<>
        <Box
          component="main"
          sx={{
            marginY: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            
              {/* Diagramme */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <Chart 
                  getAnnee2022={getAnnee2022}
                  getTotalTravaux2022={getTotalTravaux2022}
                  getTotalTravauxTermine2022={getTotalTravauxTermine2022} />
                </Paper>
              </Grid>

              {/* Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits                   
                  getAnnee2022={getAnnee2022}
                  getTotalTravaux2022={getTotalTravaux2022}
                  getTotalTravauxTermine2022={getTotalTravauxTermine2022}/>

                </Paper>
              </Grid>
              {/* Classification */}
              <Grid item xs={30}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Classification />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        </>
  );
}

export default Dashboard