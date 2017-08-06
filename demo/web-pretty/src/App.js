import React, { Component } from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { Body } from './components';

const styleSheet = createStyleSheet((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    // width: '100vw',
    flexDirection: 'column',
    justiftyContent: 'center',
    alignItems: 'center',
  },
  // body: {
  //   display: 'flex',
  // },
}));

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Body className={classes.body} />
      </div>
    );
  }
}

export default withStyles(styleSheet)(App);