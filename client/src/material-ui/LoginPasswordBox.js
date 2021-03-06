import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class LoginPasswordBox extends React.Component {

    handleChange = event => {
        this.props.handleChange()
    };

  render() {
    // const { classes } = this.props;

    return (
      <React.Fragment >     
        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          value={this.props.parentState.password}
          onChange={this.props.handleChange}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
      </React.Fragment>
    );
  }
}

LoginPasswordBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPasswordBox);