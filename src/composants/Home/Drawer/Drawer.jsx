import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DirectionsCar, Leaderboard, ListAlt, NoteAdd } from '@mui/icons-material';
import Dashboard from './Dashboard';
import { Formulaire } from './Formulaire';
import Listes from './Listes';
import Viabilite from './Viabilite';
import { Divider } from '@mui/material';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const onItemClicked = (index) => {
  setSelectedIndex(index);
  };

const DrawerList = (
 <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <List>
      {['Tableau de Bord', 'Formulaire d`ajout ', 'Listes', 'Viabilité des Routes'].map((text, index) => (
        <ListItem key={text} disablePadding onClick={() => onItemClicked(index)}>
          <ListItemButton>
            <ListItemIcon>
              {index === 0 ? <Leaderboard/> : index === 1 ? <NoteAdd/> : index === 2 ? <ListAlt /> : index === 3 ? <DirectionsCar/> : null }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider/>
 </Box>
);

return (
 <div>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
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