import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenamientoService {

  private personajes = [
    {
    "name": "Harry Potter",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "wizard": true,
    "ancestry": "half-blood",
    "hogwartsStudent": true,
    "actor": "Daniel Radcliffe",
    },
    {
    "name": "Hermione Granger",
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "wizard": true,
    "ancestry": "muggleborn",
    "hogwartsStudent": true,
    "actor": "Emma Watson",
    },
    {
    "name": "Ron Weasley",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "wizard": true,
    "ancestry": "pure-blood",
    "hogwartsStudent": true,
    "actor": "Rupert Grint",
    },
    {
    "name": "Minerva McGonagall",
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "wizard": true,
    "ancestry": "",
    "hogwartsStudent": false,
    "actor": "Dame Maggie Smith",
    },
    {
    "name": "Rubeus Hagrid",
    "species": "half-giant",
    "gender": "male",
    "house": "Gryffindor",
    "wizard": true,
    "ancestry": "half-blood",
    "hogwartsStudent": false,
    "actor": "Robbie Coltrane",
    },
    {
    "name": "Neville Longbottom",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "wizard": true,
    "ancestry": "pure-blood",
    "hogwartsStudent": true,
    "actor": "Matthew Lewis",
    },
    {
    "name": "Ginny Weasley",
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "wizard": true,
    "ancestry": "pure-blood",
    "hogwartsStudent": true,
    "actor": "Bonnie Wright",
    },
  ];

  constructor() { }

  getPersonajes() {
    return this.personajes;
  }
}
