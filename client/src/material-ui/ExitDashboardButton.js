import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ExitDashboardButton(props) {
  return (
    <React.Fragment>
      <Button onClick={props.cancelTransaction} label="submit" type="submit" color="secondary" variant="contained" className={props.class}>
        Exit Transaction Dashboard
      </Button>
    </React.Fragment>
  );
}

ExitDashboardButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExitDashboardButton);