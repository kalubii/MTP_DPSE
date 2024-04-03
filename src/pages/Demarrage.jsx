import React, { useState } from 'react';
import mtp from '../assets/img/mtp.png';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import TypeWriter from '../composants/Acceuil/TypeWriter';
import Footer from '../composants/Acceuil/Footer';


const Demarrage = () => {
    const theme = useTheme();
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()

    // useEffect(() => {
    //   const timer = window.setTimeout(()=>{
    //     setLoading(false)
    //     navigate('/login')
    //   }, 4000)
    
    //   return () => {
    //     clearInterval(timer)
    //   }
    // }, [])
    const handleClick = () =>{
      navigate('/login')
    }
    
    
    return (
  <div className='container' style={{backgroundImage: `url('/src/assets/img/wave-haikei.png.png')`,
  backgroundSize:'cover'}}>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, margin:'auto',justifyContent:'center', marginTop:15}}>
            <img src={mtp} style={{ width: '200px', height: '220px', objectFit: 'cover' }} alt="Logo" />
        </Box>
                        {/*Responsive Logo*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'center',marginTop:15 }}>
            <img src={mtp} style={{ width: '100px', height: '120px', objectFit: 'cover', marginRight: '10px' }} alt="Logo" />
          </Box>   
{/* 
        <Box sx={{marginTop:8, [theme.breakpoints.down('md')]:{marginTop:5}}} >
            {loading && <Loading/>}
        </Box> */}
        <Box sx={{ display:'flex', margin:'auto',justifyContent:'center'}}>
          <TypeWriter/>
        </Box>

        <Box sx={{marginTop:5}}>
          <Button onClick={handleClick} color='success' sx={{ display:'flex', margin:'auto',justifyContent:'center'}} variant="contained">
              Entrer
          </Button>
        </Box>

        <Box>
          <Footer/>
        </Box>
  </div>
  )
}

export default Demarrage