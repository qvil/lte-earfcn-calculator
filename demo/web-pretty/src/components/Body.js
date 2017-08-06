import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper'

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: 500,
    height: 500,
    display: 'flex',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
}));

class Body extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          Test Paper
        </Paper>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Body);