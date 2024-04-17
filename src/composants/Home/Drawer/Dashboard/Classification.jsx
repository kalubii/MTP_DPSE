import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './SousTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// // Generate Order Data
// function createData(id, date, localisation, debut, fin, pkDebut,pkFin,travaux,avancement,cout) {
//   return { id, date, localisation, debut, fin, pkDebut, pkFin,travaux,avancement,cout};
// }

// const rows = [
//   createData(
//     0,
//     '15 Mar, 2024',
//     'Antsiranana',
//     'Fanambana',
//     'Fanambana',
//     '182,000',
//     '194,000',
//     'Trx COLAS = RB FED 95',
//     '',
//     312.44,
//   ),
//   createData(
//     1,
//     '15 Mar, 2024',
//     'Toliara',
//     'car RN7 (stade)',
//     'car RN7 (Andranovory)',
//     '0,000',
//     '61,000',
//     '',
//     866.99,
//   ),
//   createData(
//     2, 
//     '15 Mar, 2024', 
//     'Toamasina', 
//     'Car RN2 (stade)',
//     'Aéroport Toamasina',
//     '0,000',
//     '5,000',
//     'A corriger/ decret continuité',
//     100.81),
//   createData(
//     3,
//     '15 Mar, 2024',
//     'Fianarantsoa',
//     'Car RN25 PK160',
//     'Car RN24',
//     '0,000',
//     '4,000',
//     '',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2024', 
//     'Toamasina', 
//     'Car RN2 (stade)',
//     'Aéroport Toamasina',
//     '0,000',
//     '5,000',
//     'A corriger/ decret continuité',
//     100.81
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

function Orders() {

  const [travauxRecent, setTravauxRecent] = useState([])

  useEffect(() => {
    const fetchSearchResults = async () => {
       try {
         const response = await axios.get('http://localhost:8081/travauxRecents');
         setTravauxRecent(response.data);
       } catch (error) {
         console.error('', error);
       }
    };
    fetchSearchResults();
   }, []);

  return (
    <React.Fragment>
      <Title>Travaux Récents</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Regions</TableCell>
            <TableCell>PK Debut</TableCell>
            <TableCell>PK Fin</TableCell>
            <TableCell>Travaux</TableCell>
            <TableCell>Financement</TableCell>
            <TableCell>Situation</TableCell>
            <TableCell align="right">Coût (Ar)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {travauxRecent.map((row,index) => (
            <TableRow key={index}>
              <TableCell>{row.REGIONS_CONCERNEES}</TableCell>
              <TableCell>{row.PK_DEBUT}</TableCell>
              <TableCell>{row.PK_FIN}</TableCell>
              <TableCell>{row.ACTIVITES}</TableCell>
              <TableCell>{row.Financement}</TableCell>
              <TableCell>{row.SITUATION}</TableCell>
              <TableCell align="right">{`${row.Co_t_Ar_}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Voir plus
      </Link> */}
    </React.Fragment>
  );
}

export default Orders