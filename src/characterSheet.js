import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { theme } from './theme.js'
import logo from './logo.svg'
import { magic } from './lore.js'
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

const Stats = (props) =>{
  const classes = useStyles();
  const character = props.character;
  const StatCard = (props) =>{
    const [modifier, setModifier] = useState(character.getStat(props.stat));
    return(
    <Card className={classes.card} variant="outlined">
      <CardContent style={{padding:"5px"}}>
        <Typography className={classes.text} style={{fontSize:"12px"}}>
          {props.name}
        </Typography>
        <Typography id="modifier"  className={classes.text} style={{fontSize:"20px"}}>
          {modifier}
        </Typography>
        <TextField className={classes.text}
        inputProps={{style:{fontSize: 12, color: "#000000",textAlign: "center"}}}
        fullWidth
        defaultValue={10 + character.getStat(props.stat)}
        type="tel"
        onChange={(e) =>{character.updateStat(props.stat, e.target.value - 10); setModifier(character.getStat(props.stat))}}/>
      </CardContent>
    </Card>
  )
  }

  return(
    <Container>
    <StatCard stat="str" name="Strength" />
    <StatCard stat="dex" name="Dexterity" />
    <StatCard stat="con" name="Constituton" />
    <StatCard stat="int" name="Intelligence" />
    <StatCard stat="cha" name="Charisma" />
    <StatCard stat="wil" name="Willpower" />
    </Container>
  )
}

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
        <Grid item xs={1}>
            <Stats character={character} />
        </Grid>
      </Grid>
    </div>
  );
}

export { CharacterSheet }
