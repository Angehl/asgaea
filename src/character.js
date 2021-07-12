import React, { Component } from 'react';
import { magic } from './lore.js'

const baseMagic = {
  "l":{
    "1": 0,
    "2": 0,
    "3": 0,
  },
  "f":{
    "1": 0,
    "2": 0,
    "3": 0,
  },
  "d":{
    "1": 0,
    "2": 0,
    "3": 0,
  },
  "m":{
    "1": 0,
    "2": 0,
    "3": 0,
  },
}

const baseStats ={
  "str" : -2,
  "dex" : -2,
  "con" : -2,
  "int" : -2,
  "cha" : -2,
  "wil" : -2,
}

const baseSkills ={
  "str" : 8,
  "dex" : 8,
  "con" : 8,
  "int" : 8,
  "cha" : 8,
  "wil" : 8,
}

class Character extends React.Component{

  constructor(props){
    super(props);
    this.abilities = [];
    this.magic = baseMagic;
    this.stats = baseStats;
    this.skills = baseSkills;
  }

  getStat(stat){
    return this.stats[stat]
  }

  updateStat(stat,value){
    if (value > 10 || value < -10)
      return this.stats[stat];
    this.stats[stat] = value;
    return this.stats[stat];
  }
}

export default Character
