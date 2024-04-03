import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const Modifier = ({onEdit }) => {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
      setShowInput(!showInput);
      onEdit()
  };

  return (
      <Box><Button onClick={handleClick}>{showInput ? "Annuler" : "Modifier"}</Button></Box>
  );
};

export default Modifier
