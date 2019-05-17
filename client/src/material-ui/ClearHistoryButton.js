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


function ClearHistoryButton(props) {
  return (
    <React.Fragment>
      <Button onClick={props.closeHistoryButtonClick} label="submit" type="submit" color="secondary" variant="contained">
        Clear
      </Button>
    </React.Fragment>
  );
}

ClearHistoryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClearHistoryButton);