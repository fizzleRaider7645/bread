import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Balance from '../components/Balance'
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
        Current Balance <Balance />
        </Typography>
        <Typography component="p">
         <br />Email: {props.user.email}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);