import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProviders'

export default function MenuAppBar() {
  const { isSignedIn, logout } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const navigate = useNavigate()

  const handleChange = (event) => {}

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1, flex: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isSignedIn ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle fontSize='large'/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleLogin}>Login</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
