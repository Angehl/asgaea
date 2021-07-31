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
      border: "5px solid purple",
      margin: theme.spacing(0),
      width: theme.spacing(100),
      height: theme.spacing(87),
    },
  },
  text: {
    color: "black",
    textAlign: "center",
  },
}));

const Abilities = (props) =>{
  const character = props.character;
  const classes = useStyles();

  return(
    <div className={classes.root}>
    <Paper>
      <Typography className={classes.text} style={{fontSize:"12px"}}>
        Abilities
      </Typography>
    </Paper>
  </div>
  )
}

export { Abilities }
