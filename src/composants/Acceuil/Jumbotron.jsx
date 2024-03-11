import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css'

const Jumbotron = () => {
 const theme = useTheme();

 return (
    <div className='container mt-5'>
      <Box
        sx={{
          backgroundColor:'#9ad29c',
          display: 'flex',
          flexDirection: 'column',
          padding: 4,
          borderRadius: 20,
          width: 'fit-content',
          [theme.breakpoints.down('md')]: { //Lorsque la taille de l'écran diminue
            border: 0,
            backgroundColor: "#fff",
          },
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis recusandae pariatur <br />
        eos illum beatae optio, distinctio debitis in voluptate iusto aliquid nesciunt quod impedit sapiente <br />
        voluptatum excepturi, deleniti numquam?
      </Box>
      <div className='my-4'>
        <Box
          sx={{
            backgroundColor:'#9ad29c',
            display: 'flex',
            flexDirection: 'column',
            padding: 4,
            borderRadius: 20,
            width: 'fit-content',
            marginLeft: 50,
            [theme.breakpoints.down('md')]: {
              border: 0,
              backgroundColor: "#fff",
              margin: 'auto',
              justifyContent: 'center',
              alignItems:'center',
            },
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis recusandae pariatur <br />
          eos illum beatae optio, distinctio debitis in voluptate iusto aliquid nesciunt quod impedit sapiente <br />
          voluptatum excepturi, deleniti numquam?
        </Box>
      </div>

      <Box
        sx={{
          backgroundColor:'#9ad29c',
          display: 'flex',
          flexDirection: 'column',
          padding: 4,
          borderRadius: 20,
          width: 'fit-content',
          [theme.breakpoints.down('md')]: {
            border: 0,
            backgroundColor: "#fff",
          },
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis recusandae pariatur <br />
        eos illum beatae optio, distinctio debitis in voluptate iusto aliquid nesciunt quod impedit sapiente <br />
        voluptatum excepturi, deleniti numquam?
      </Box>
    </div>
 );
};

export default Jumbotron;
