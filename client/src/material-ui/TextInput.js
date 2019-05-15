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

class OutlinedTextField extends React.Component {

constructor(props) {
    super(props)
}

handleChange = event => {
    this.props.handleNotesChange(event)
} 

  render() {

    return (
      <React.Fragment>
        <TextField
          id="outlined-full-width"
          label="Notes"
          style={{ margin: 8 }}
          placeholder="..."
          fullWidth
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </React.Fragment>
    );
  }
}

OutlinedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextField);