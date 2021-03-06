import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import apiMasters from '../../apiMasters.js';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Blue Tang
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp({
  setUserType, handleClose, setShowForm, setUserId, setUserName, setUserPic
}) {
  const [role, setRole] = React.useState('');
  const [failed, setFailed] = React.useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const ChangeForm = () => {
    setShowForm('LogIn');
  };

  const handleSubmit = (event) => {
    setFailed(false);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      email: data.get('email'),
      password: data.get('password'),
      username: data.get('username'),
      userType: role,
    };
    apiMasters.registerUser(userInfo.username, userInfo.password, userInfo.email, userInfo.userType)
      .then((response) => {
        console.log(response);
        setUserType(response.data.userType);
        setUserId(response.data.userId);
        setUserName(response.data.username);
        setUserPic(response.data.pic);
        handleClose();
        const date = new Date();
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
        const expires = `; expires=${date.toUTCString()}`;
        document.cookie = `username=${(response.data.username || '')}${expires}; path=/`;
        document.cookie = `usertype=${(response.data.userType || '')}${expires}; path=/`;
        document.cookie = `userid=${(response.data.id || '')}${expires}; path=/`;
        document.cookie = `userpic=${(response.data.pic || '')}${expires}; path=/`;
      })
      .catch((err) => {
        console.log(err);
        setFailed(true);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        {/* <CssBaseline /> */}
        { failed && <span style={{ color: 'red' }}>Failed, Try a different username</span> }
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='username'
                  label='username'
                  name='username'
                  autoComplete='username'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='email'
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Role*</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='role'
                    value={role}
                    label='Role'
                    required
                    onChange={handleChange}
                  >
                    <MenuItem value='artist'>Artist</MenuItem>
                    <MenuItem value='fan'>Fan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='#' variant='body2' onClick={ChangeForm}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
