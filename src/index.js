import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CharacterSheet } from './characterSheet.js'
import { theme } from './theme.js'
import Character from './character.js'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAlahK8sr589_KxfkGWe19MhGCAGa3J8Us",
    authDomain: "asgea-roleplay.firebaseapp.com",
    databaseURL: "https://asgea-roleplay-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asgea-roleplay",
    storageBucket: "asgea-roleplay.appspot.com",
    messagingSenderId: "182968559562",
    appId: "1:182968559562:web:cb54ed53ba63f30d23d133",
    measurementId: "G-CBCKWMS7HL"
  };



const App = () => {
  const fire = firebase.initializeApp(firebaseConfig);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <CharacterSheet character={new Character} database={fire.firestore()}/>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
