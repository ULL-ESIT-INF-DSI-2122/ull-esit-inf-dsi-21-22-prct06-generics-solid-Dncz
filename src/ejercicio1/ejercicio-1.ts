// PRUEBA1
// https://www.iteramos.com/pregunta/10580/como-generar-getters-y-setters-en-visual-studio
// https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/subir-y-bajar-cambios-a-un-repositorio-remoto.html
// eslint-disable-next-line no-unused-vars

// node dist/ejercicio1/ejercicio-1.js

import {Combat} from './combat';
import {Marvel} from './marvel';
import {Pokedex} from './pokedex';
import {Pokemon} from './pokemon';

let Bulbasaur: Pokemon = new Pokemon("Bulbasaur", "hierba", 30, 12, 34, 98, "Pokemon");
let Chamander: Pokemon = new Pokemon("Chamander", "fuego", 52, 43, 65, 39, "Pokemon");
let Psyduck: Pokemon = new Pokemon("Psyduck", "agua", 52, 48, 55, 50, "Pokemon");
let Pikachu: Pokemon = new Pokemon("Pikachu", "eléctrico", 55, 40, 90, 35, "Pokemon");

let BlackWidow: Marvel = new Marvel("Viuda negra", 60, 55, "Cuerpo a cuerpo", 30, 90, "Marvel");
let Wanda: Marvel = new Marvel("Wanda", 90, 90, "Telekinesis/telepatia", 30, 100, "Marvel");
let IronMan: Marvel = new Marvel("Iron Man", 60, 80, "Objetos", 80, 70, "Marvel");
let SpiderMan: Marvel = new Marvel("Spider Man", 65, 40, "Mutacion", 70, 88, "Marvel");
let Hulk: Marvel = new Marvel("Hulk", 77, 80, "Superfuerza", 20, 86, "Marvel");
let CapitanAmerica: Marvel = new Marvel("Capitan America", 56, 75, "Cuerpo a cuerpo", 58, 87, "Marvel");

let pokedex = new Pokedex([Bulbasaur, Chamander, BlackWidow, IronMan, Psyduck, Pikachu, Hulk, SpiderMan, CapitanAmerica]);
pokedex.addJugador(Wanda);

let torneo: number = 1;
pokedex.getPokedex().forEach((pokemonI) => {
  for (let i = 1; i < pokedex.getNumeroJugadores(); i++) {
    if (pokemonI != pokedex.getJugador(i) && pokemonI.getVida() > 0 && pokedex.getJugador(i).getVida() > 0) {
      console.log(`\n-------Torneo: ${torneo}-------`);
      let juego = new Combat(pokemonI, pokedex.getJugador(i));
      juego.start();
      torneo++;
      console.log(`\n`);
    }
  }
});
