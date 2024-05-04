import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Modifier = ({stateBtnModifier,setStateBtnModifier,onEdit}) => {

  const handleClick = () => {
      onEdit()
      setStateBtnModifier(!stateBtnModifier);
  };
  const handleUp = (e) => {
    if(e.key == "Enter"){
      // console.log('ENTRER')
      setStateBtnModifier(false);
    }
    
}

  return (
      <Box><Button startIcon={<EditOutlinedIcon/>} onClick={handleClick} onKeyUp={handleUp}>{stateBtnModifier?"Annuler":"Modifier"}</Button></Box>
  );
};

export default Modifier
