import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './SousTitle';

// Generate Order Data
function createData(id, date, localisation, debut, fin, pkDebut,pkFin,travaux,avancement,cout) {
  return { id, date, localisation, debut, fin, pkDebut, pkFin,travaux,avancement,cout};
}

const rows = [
  createData(
    0,
    '15 Mar, 2024',
    'Antsiranana',
    'Fanambana',
    'Fanambana',
    '182,000',
    '194,000',
    'Trx COLAS = RB FED 95',
    '',
    312.44,
  ),
  createData(
    1,
    '15 Mar, 2024',
    'Toliara',
    'car RN7 (stade)',
    'car RN7 (Andranovory)',
    '0,000',
    '61,000',
    '',
    866.99,
  ),
  createData(
    2, 
    '15 Mar, 2024', 
    'Toamasina', 
    'Car RN2 (stade)',
    'Aéroport Toamasina',
    '0,000',
    '5,000',
    'A corriger/ decret continuité',
    100.81),
  createData(
    3,
    '15 Mar, 2024',
    'Fianarantsoa',
    'Car RN25 PK160',
    'Car RN24',
    '0,000',
    '4,000',
    '',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2024', 
    'Toamasina', 
    'Car RN2 (stade)',
    'Aéroport Toamasina',
    '0,000',
    '5,000',
    'A corriger/ decret continuité',
    100.81
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

function Orders() {
  return (
    <React.Fragment>
      <Title>Travaux Récents</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Localisation</TableCell>
            <TableCell>Début</TableCell>
            <TableCell>Fin</TableCell>
            <TableCell>PK Début</TableCell>
            <TableCell>PK Fin</TableCell>
            <TableCell>Travaux</TableCell>
            <TableCell>Avancement</TableCell>
            <TableCell align="right">Coût (Ar)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.localisation}</TableCell>
              <TableCell>{row.debut}</TableCell>
              <TableCell>{row.fin}</TableCell>
              <TableCell>{row.pkDebut}</TableCell>
              <TableCell>{row.pkFin}</TableCell>
              <TableCell>{row.travaux}</TableCell>
              <TableCell>{row.avancement}</TableCell>
              <TableCell align="right">{`${row.cout}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Voir plus
      </Link>
    </React.Fragment>
  );
}

export default Orders