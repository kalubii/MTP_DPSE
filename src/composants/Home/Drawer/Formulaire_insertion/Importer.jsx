import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box } from '@mui/material';
import axios from 'axios';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function Importer() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    console.log(file)

    axios.post('http://localhost:8081/import_excel', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Button
          color='success'
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<FileDownloadIcon />}
        >
          Excel
          <VisuallyHiddenInput type="file" onChange={(event) => setFile(event.target.files[0])} />
        </Button>
      </form>
    </Box>
  );
}

export default Importer;