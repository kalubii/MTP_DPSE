import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import VoirPlusPage from '../../../../../pages/VoirPlusPage';
import { TableCell } from '@mui/material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function VoirPlus() {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/projet2022', {
//           params: {
//             idRef : id,
//             pkDebutRef : pkDebutRef,
//             pkFinRef : pkFinRef,
//             date : dateSelectedIndex,
//             region: regionSearch,
//             axe: axeSearch,
//             pkDebut: pkDebutSearch,
//             pkFin: pkFinSearch,
//           },
//         });
//         console.log(response.data)
//         setLoading(false)
//         setData(response.data);
//       } catch (error) {
//         setLoading(false)
//         console.error('', error);
//       }
//     };
//     // Effectuer la recherche uniquement si au moins un champ de recherche est rempli
//     if (dateSelectedIndex || regionSearch || axeSearch || pkDebutSearch || pkFinSearch) {
//       setLoading(false)
//       fetchSearchResults();
//     }
//  }, [id,dateSelectedIndex,regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        Detail
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Detail
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Imprimer
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        <TableCell>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
            </TableCell>
            <TableCell>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
              <ListItemText primary="Phone ringtone : "/>
            </TableCell>
        </List>
        {/* <VoirPlusPage/> */}

      </Dialog>
    </React.Fragment>
  );
}


export default VoirPlus