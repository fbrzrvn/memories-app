import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input';
import Icon from './GoogleIcon';

import { AUTH } from '../../constants/actionTypes';

import useStyle from './styles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();

  const handleShowPassword = () => {
    setShowPassword(prevShoWPassword => !prevShoWPassword);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const switchMode = () => {
    setIsSignUp(prevIsSignUp => !prevIsSignUp);
    setShowPassword(false);
  };

  const googleSuccess = async res => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleFailure = () => {
    console.log('Google Sign In was unsuccessful. Try again later.');
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            className={classes.submit}
            variant="contained"
            color="primary"
            fullWidth
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_AUTH_ID}
            render={renderProps => (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                className={classes.googleButton}
              >
                Sign In with Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
