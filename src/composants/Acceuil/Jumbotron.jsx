import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css'

const Jumbotron = () => {
 const theme = useTheme();

 return (
    <div className='container'>
    <Box sx={{marginTop:5, [theme.breakpoints.down('md')]:{marginTop:2}}}>
      <Box
        sx={{
          backgroundColor:'#9ad29c',
          display: 'flex',
          flexDirection: 'column',
          padding: 4,
          borderRadius: 20,
          width: 'fit-content',
          [theme.breakpoints.down('md')]: { //responsive
            border: 0,
            backgroundColor: "#fff",
            padding:1,
            margin: 0,
          },
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis recusandae pariatur <br />
        eos illum beatae optio, distinctio debitis in voluptate iusto aliquid nesciunt quod impedit sapiente <br />
        voluptatum excepturi, deleniti numquam?
      </Box>
      
      <Box sx={{marginY:3, [theme.breakpoints.down('md')]:{marginY:2}}}>
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
                backgroundColor:'#fff',
                borderTop: 2,
                borderBottom: 2,
                borderRadius: 0,
                borderColor:'#9ad29c',
                margin: 0,
                padding:1,
              },
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis recusandae pariatur <br />
            eos illum beatae optio, distinctio debitis in voluptate iusto aliquid nesciunt quod impedit sapiente <br />
            voluptatum excepturi, deleniti numquam?
          </Box>
        </Box>

      <Box
        sx={{
          backgroundColor:'#9ad29c',
          display: 'flex',
          flexDirection: 'column',
          padding: 4,
          borderRadius: 20,
          width: 'fit-content',
          [theme.breakpoints.down('md')]: {
            backgroundColor: "#fff",
            padding:1,
          },
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis recusandae pariatur <br />
        eos illum beatae optio, distinctio debitis in voluptate iusto aliquid nesciunt quod impedit sapiente <br />
        voluptatum excepturi, deleniti numquam?
      </Box>
      </Box>
    </div>
 );
};

export default Jumbotron;
