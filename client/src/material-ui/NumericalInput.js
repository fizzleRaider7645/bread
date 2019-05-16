import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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

class NumericalInput extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = event => {
        this.props.handleInputChange(event)
    }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <TextField
          id="outlined-number"
          label="Amount"
          onChange={this.handleChange}
          type="number"
          inputProps={{ min: "0", step: "0.01" }}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
      </React.Fragment>
    );
  }
}

NumericalInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumericalInput);