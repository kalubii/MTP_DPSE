import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import mtp from '../assets/img/mtp.png'
import "bootstrap/dist/css/bootstrap.min.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const pages = ['Accueil','Directions', 'A Propos', 'Contact'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClickLogin = (event) => {
    navigate('/login')
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const onCLickAcceuil = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" style={{backgroundColor:"#fafafa", marginBottom:"50px",marginTop:"10px"}} className='container rounded' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={mtp} style={{ width: '70px', height: '80px', objectFit: 'cover' }} alt="Logo" />
          </Box>
          <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" 
            onClick={handleOpenNavMenu}
              color="black">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar"  anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem  key={page} onClick={index === 0 ? onCLickAcceuil : handleCloseNavMenu} color="black">
                  <Typography >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'center' }}>
            <img src={mtp} style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '10px' }} alt="Logo" />
            <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" 
              sx={{mr: 2,flexGrow: 1,fontFamily: 'monospace',fontWeight: 700,letterSpacing: '.3rem',color: 'inherit',textDecoration: 'none',
              }}
            >
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <Button key={page} onClick={index === 0 ? onCLickAcceuil : handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Se Connecter">
              <IconButton onClick={handleClickLogin} sx={{ p: 0 }}>
                <AccountCircleIcon fontSize='large' alt="Login" />
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{vertical: 'top',horizontal: 'right',}} keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;