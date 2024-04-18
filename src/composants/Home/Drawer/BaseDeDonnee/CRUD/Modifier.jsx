import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const Modifier = ({stateBtnModifier,setStateBtnModifier,onEdit}) => {

  const handleClick = () => {
      onEdit()
      setStateBtnModifier(!stateBtnModifier);
  };

  return (
      <Box><Button onClick={handleClick}>{stateBtnModifier?"Annuler":"Modifier"}</Button></Box>
  );
};

export default Modifier
