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

function SeeTransactionHistoryButton(props) {
  return (
    <React.Fragment>
      <Button onClick={props.handleTransactionHistoryClick} label="submit" type="submit" color="secondary" variant="contained" className={props.class}>
        See Transaction History
      </Button><br />
    </React.Fragment>
  );
}

SeeTransactionHistoryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeeTransactionHistoryButton);