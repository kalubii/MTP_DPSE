import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';

const ListeProjets = () => {
  return (<>
            <Box>
                <React.Fragment>
                    <Table size="small">
                        <TableHead>
                        <TableRow>
                            <TableCell>Numero</TableCell>
                            <TableCell>Programme (LF)</TableCell>
                            <TableCell>Convention (LF)</TableCell>
                            <TableCell>Convention Libellér (LF)</TableCell>
                            <TableCell>Directions</TableCell>
                            <TableCell>Activités</TableCell>
                            <TableCell>Natures</TableCell>
                            <TableCell>Financement</TableCell>
                            <TableCell>Bailleurs</TableCell>
                            <TableCell>Désignations</TableCell>
                            <TableCell>Coût [Ar]</TableCell>
                            <TableCell>Date_OS</TableCell>
                            <TableCell>Physique</TableCell>
                            <TableCell>Situation</TableCell>
                            <TableCell>Observations</TableCell>
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
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </React.Fragment>
                </Box>
        </>
  )
}

export default ListeProjets