import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { theme } from './theme.js'
import logo from './logo.svg'
import { magic } from './lore.js'
import { Attributes } from './characterSheetModules/attributes.js'
import { Abilities } from './characterSheetModules/abilities.js'
import { Backstory } from './characterSheetModules/backstory.js'
import { Equipment } from './characterSheetModules/equipment.js'
import { Paths } from './characterSheetModules/paths.js'
import { Portrait } from './characterSheetModules/portrait.js'
import { Skills } from './characterSheetModules/skills.js'
import { Stats } from './characterSheetModules/stats.js'
import { CardMedia, Card, CardContent, Typography, Container, TextField, Alert, AlertTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "95%",
    margin: "auto",
    marginTop: "1%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  text: {
    color: "#000000",
    textAlign: "center"
  },
  card: {
    borderRadius: "10px",
    margin: "5px",
    paddingLeft:"0px"
  }
}));

const CharacterSheet = (props) => {
  const classes = useStyles();
  const character = props.character;
  const database = props.database;
  database.collection("Characters").doc("Lu").get().then( (doc) => {
    if (doc.exists) {
        console.log( doc.data());
    } else {
        // doc.data() will be undefined in this case
        alert("No such document!");
    }
}).catch((error) => {
    alert("Error getting document:", error);
});

  return (

    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={1} className={classes.block}>
          <Attributes character ={props.character}/>
        </Grid>
        <Grid item xs={3} className={classes.block}>
            <Grid container direction={'column'} spacing={3}>
              <Grid item xs={12} className={classes.block}>
                <Portrait character ={props.character}/>
              </Grid>
              <Grid item xs={12} className={classes.block}>
                <Equipment character ={props.character}/>
              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={2} className={classes.block}>
          <Skills character ={props.character}/>
        </Grid>
        <Grid item xs={6} className={classes.block}>
            <Grid container direction={'column'} spacing={3}>
              <Grid item xs={12} className={classes.block}>
                <Stats character ={props.character}/>
              </Grid>
              <Grid item xs={12} className={classes.block}>
                <Abilities character ={props.character}/>
              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.block}>
          <Paths character ={props.character}/>
        </Grid>
        <Grid item xs={12} className={classes.block}>
          <Backstory character ={props.character}/>
        </Grid>
      </Grid>
    </div>
  );
}

export { CharacterSheet }
