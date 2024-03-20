import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DirectionsCar,ListAlt,  Menu, NoteAdd, PowerSettingsNew, Timeline } from '@mui/icons-material';
import { Formulaire } from './Formulaire';
import Listes from './Listes';
import Viabilite from './Viabilite';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../providers/AuthProviders';
import Dashboard from './Dashboard/Dashboard';
import mtp from '../../../assets/img/mtp.png';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const {logout} = useAuth()
  const navigate = useNavigate()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const onItemClicked = (index) => {
   setSelectedIndex(index);
  };

  const onLogout = () =>{
    logout()
    navigate('/')
  }

const DrawerList = (
 <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, marginY:3 , justifyContent:'center'}}>
            <img src={mtp} style={{ width: '70px', height: '80px', objectFit: 'cover' }} alt="Logo" />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, marginY:2, flexDirection: 'row', justifyContent: 'center' }}>
            <img src={mtp} style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '10px' }} alt="Logo" />
        </Box>

    <List >
      {['Tableau de Bord', 'Formulaire d`ajout ', 'Listes', 'Viabilité des Routes'].map((text, index) => (
        <ListItem key={text} disablePadding onClick={function () {
          return onItemClicked(index);
        }}> 
          <ListItemButton>
            <ListItemIcon >
              {index === 0 ? <Timeline/> : index === 1 ? <NoteAdd/> : index === 2 ? <ListAlt /> : index === 3 ? <DirectionsCar/> : null }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider/>

    { <List>
        {['Quitter'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={onLogout} sx={{ color: '#e53935'}}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#e53935'}}>
                {index === 0 ? <PowerSettingsNew /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>}

 </Box>
);

return (
 <div>
    <Button onClick={toggleDrawer(true)}> <Menu fontSize='medium'/>Ouvrir le Menu</Button>
    <Drawer open={open} onClose={toggleDrawer(false)} variant='persistent'>
      {DrawerList}
    </Drawer>

    <div className='container d-flex'>
      {selectedIndex === 0 && <Dashboard/>}
      {selectedIndex === 1 && <Formulaire/>}
      {selectedIndex === 2 && <Listes/>}
      {selectedIndex === 3 && <Viabilite/>}
    </div>
    
 </div>
);
}