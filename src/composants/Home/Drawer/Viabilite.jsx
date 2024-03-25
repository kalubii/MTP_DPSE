import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Search } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';


const Viabilite = () => {
  const [region, setRegion] = React.useState('');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  const Regions = [
    {
      id: 1,
      value: 'Antananarivo',
      label: 'Antananarivo',
    },
    {
      id: 2,
      value: 'Antsiranana',
      label: 'Antsiranana',
    },
    {
      id: 3,
      value: 'Mahajanga',
      label: 'Mahajanga',
    },
  ];

  function preventDefault(event) {
    event.preventDefault();
  }

  return (<>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            display:'flex',
            margin:'auto',
            justifyContent:'center'
          }}
          noValidate
          autoComplete="off">
            <TextField
              id="outlined-select-currency"
              select
              label="Region"
              defaultValue="Antananarivo"
            >
              {Regions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          
            <TextField id="standard-search" label="Axes" type="search" variant="standard"/>
            <TextField id="standard-search" sx={{marginX:4}} label="PK Début" type="search" variant="standard"/>
            <TextField id="standard-search" label="PK Fin" type="search" variant="standard"/>
            <Button sx={{width: '100px', height: '40px'}} variant="contained" endIcon={<Search />}> Voir </Button>
          </Box>

          <Box sx={{marginTop:4}}>
          <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Année</TableCell>
                    <TableCell>Axes</TableCell>
                    <TableCell>Localisation (PK)</TableCell>
                    <TableCell>Travaux</TableCell>
                    <TableCell>Avancement</TableCell>
                    <TableCell align="right">Coût (Ar)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Regions.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell align="right">{`${row.cout}`}</TableCell>
                      <TableCell>
                        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                          Voir plus
                        </Link>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </React.Fragment>
          </Box>
    </>
  )
}

export default Viabilite