import { Error, Lock } from '@mui/icons-material'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'
import TypeWriter from '../composants/Acceuil/TypeWriter'
import mtp from '../assets/img/mtp.png'
import { useTheme } from '@mui/material/styles';


const Login = () => {
  const theme = useTheme()
  const { login } = useAuth()
  const [etat, setEtat] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')

  const handleUserNameChange = (event) => {
    setEtat({ ...etat, username: event.target.value })
  }

  const handlePasswordChange = (event) => {
    setEtat({ ...etat, password: event.target.value })
  }

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('')

    try {
      const user = login({ username: etat.username, password: etat.password })
      if (user) {
          navigate('/home')
      }
    } catch (error) {
        setMessage('Identifiants incorrects!! Veuillez contacter l`administrateur du système.')
    }
  }

  return (<>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, margin:'auto',justifyContent:'center'}}>
          <img src={mtp} style={{ width: '90px', height: '120px', objectFit: 'cover' }} alt="Logo" />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'center',marginTop:2 }}>
            <img src={mtp} style={{ width: '80px', height: '90px', objectFit: 'cover'}} alt="Logo" />
      </Box>

    <Box sx={{display:'flex', margin:'auto',justifyContent:'center', fontFamily: 'Berlin Sans FB', fontSize:"2rem", color: '#739574'}}>
      Veuillez vous identifiez s'il vous plaît
    </Box>
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 3,
          [theme.breakpoints.down('md')]:{marginTop:4}
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
          <Lock />
        </Avatar>

        {/* <Typography component="h1" variant="h5">
          Se Connecter
        </Typography> */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            id="username"
            label="Identifiant"
            fullWidth
            name="username"
            autoComplete="username"
            autoFocus
            value={etat.username}
            onChange={handleUserNameChange}
          />
          <TextField
            margin="normal"
            required
            name="password"
            label="Mot de Passe"
            fullWidth
            type="password"
            id="password"
            autoComplete="current-password"
            value={etat.password}
            onChange={handlePasswordChange}
          />

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}

          <Button
            color='success'
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Valider
          </Button>
          {message && (
            <Alert
              icon={<Error fontSize="inherit" />}
              severity="error">
              {message}
            </Alert>
          )}
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/inscription" variant="body2">
                {' '}
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Container>
  </>
  )
}

export default Login