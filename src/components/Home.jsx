import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center'
  }
}));

/**
 * Home Component
 *
 * @component
 */
function Home() {
  const classes = useStyles();

  return <h2 className={classes.header}>Welcome to MRKN Starter Kit!</h2>;
}

export default Home;
