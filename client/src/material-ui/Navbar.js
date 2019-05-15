import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navbar(props) {
  const { classes } = props;
  let logInButton;
  let logOutButton;
  let registerButton;
    if(props.userAuth) {
        logOutButton = <Button onClick={ props.handleLogOut } color="inherit">Logout</Button>
    } else {
        registerButton = <Button component={ Link } to="/register" color="inherit">Register</Button>
        logInButton = <Button component={ Link } to="/login" color="inherit">Login</Button>
    }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} component={ Link } to="/account" color="inherit" aria-label="Menu">
            Bread
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          </Typography>
          {logInButton}
          {logOutButton}
          {registerButton}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);