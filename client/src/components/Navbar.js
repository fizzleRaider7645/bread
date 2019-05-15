import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const NavBar = props => {
    let logInButton;
    let logOutButton;
    if(props.userAuth) {
        logOutButton = <Button onClick={ props.handleLogOut } color="inherit">Logout</Button>
    } else {
        logInButton = <Button component={ Link } to="/login" color="inherit">Login</Button>
    }

    return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h5" color="inherit" >
            BREAD
          </Typography>
          {logInButton}
          {logOutButton}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
export default NavBar