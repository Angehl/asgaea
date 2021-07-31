import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { theme } from '../theme.js'
import { magic } from '../lore.js'
import { Paper, CardMedia, Card, CardContent, Typography, Container, TextField, Alert, AlertTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      border: "5px solid green",
      margin: theme.spacing(0),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  text: {
    color: "black",
    textAlign: "center",
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

const Attributes = (props) =>{
  const character = props.character;
  const classes = useStyles();
  const AttributeCard = (props) =>{
    const [attribute, setAttribute] = useState(character.getAttribute(props.attribute));
    return(
    <Card className={classes.card} variant="outlined">
      <CardContent style={{padding:"5px"}}>
        <Typography className={classes.text} style={{fontSize:"12px"}}>
          {props.name}
        </Typography>
        <Typography id="modifier"  className={classes.text} style={{fontSize:"20px"}}>
          {attribute}
        </Typography>
      </CardContent>
    </Card>
  )
  }

//  return(
//    <Container>
//    <AttributeCard attribute="str" name="Strength" />
//    <AttributeCard attribute="dex" name="Dexterity" />
//    <AttributeCard attribute="con" name="Constituton" />
//    <AttributeCard attribute="int" name="Intelligence" />
//    <AttributeCard attribute="cha" name="Charisma" />
//    <AttributeCard attribute="wil" name="Willpower" />
//    </Container>
//  )

return(
  <div className={classes.root}>
  <Paper>
    <Typography className={classes.text} style={{fontSize:"12px"}}>
      Skills
    </Typography>
  </Paper>
</div>
)
}

export { Attributes }
