import React, { useState,useEffect } from 'react';
import Loading from '../composants/Loading';
import mtp from '../assets/img/mtp.png';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import TypeWriter from '../composants/Acceuil/TypeWriter';


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
    
    
    return (
  <div className='container'>
        
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
  </div>
  )
}

export default Demarrage