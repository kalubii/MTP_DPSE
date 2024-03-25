import React from 'react'
import { Box} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ListeLocalite() {
    return(
        <Box>
          <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Provinces</TableCell>
                    <TableCell>Axes</TableCell>
                    <TableCell>Section</TableCell>
                    <TableCell>PK Début</TableCell>
                    <TableCell>Localité Début</TableCell>
                    <TableCell>PK Fin</TableCell>
                    <TableCell>Localité Fin</TableCell>
                    <TableCell>Longueur (km)</TableCell>
                    <TableCell>Longueur traitée (km)</TableCell>
                    <TableCell>Nature Surface</TableCell>
                    <TableCell>Région</TableCell>
                    <TableCell>Gestionnaire de l'axe</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </React.Fragment>
          </Box>
    )
}


export default ListeLocalite