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

function TransactionDashboardButton(props) {
  return (
    <React.Fragment>
      <Button onClick={props.handleTransactionClick} color="secondary" variant="contained" className={props.class}>
      See Transaction Dashboard
      </Button>
    </React.Fragment>
  );
}

TransactionDashboardButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionDashboardButton);