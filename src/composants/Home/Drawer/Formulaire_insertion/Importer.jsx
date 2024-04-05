import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box } from '@mui/material';

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
  return ( <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "auto" }}>
                <Button
                color='success'
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<FileDownloadIcon />}
                >
                Excel
                <VisuallyHiddenInput type="file" />
                </Button>
        </Box>
  );
}

export default Importer