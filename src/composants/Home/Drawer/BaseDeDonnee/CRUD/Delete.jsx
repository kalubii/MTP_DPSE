import { Delete } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';

const DeleteButton = ({ onDelete }) => {
  const handleClick = () => {
    onDelete();
  };

  return (
    <Box>
      <Button startIcon={<Delete/>} onClick={handleClick}>Supprimer</Button>
    </Box>
  );
};

export default DeleteButton