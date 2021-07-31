import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { theme } from '../theme.js'
import { magic } from '../lore.js'
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      border: "5px solid yellow",
      margin: theme.spacing(0),
      width: "100%",
      height: theme.spacing(100),
    },
  },
  text: {
    color: "black",
    textAlign: "center",
  },
}));

const Paths = (props) =>{
  const character = props.character;
  const classes = useStyles();

  return(
    <div className={classes.root}>
    <Paper>
      <Typography className={classes.text} style={{fontSize:"12px"}}>
        Paths
      </Typography>
    </Paper>
  </div>
  )
}

export { Paths }
