import {Marvel} from "./marvel";
import {Pokemon} from "./pokemon";

/**
 * Clase Pokedex que contiene los personajes
 * de cada universo
 */
export class Pokedex<T extends Pokemon | Marvel> {
  /**
   * Constructor de la lista
   * @param {T[]} jugadores lista de los jugadores
   */
  constructor(private jugadores: T[]) {
  }

  /**
   * Getter que devuelve el array de los
   * personajes almacenados en la pokedex
   * @returns {T[]} Pokedex
   */
  getPokedex(): T[] {
    return this.jugadores;
  }

  /**
   * Añade nuevos personajes a la lista
   * @param {T} nuevosJugadores Nuevos personajes de diferentes o iguales universos
   */
  addJugador(nuevosJugadores: T) {
    this.jugadores.push(nuevosJugadores);
  }

  /**
   * Getter del número de personajes en la lista
   * @returns {number} Tamaño de la lista
   */
  getNumeroJugadores(): number {
    return this.jugadores.length;
  }

  /**
   * Getter del jugador de una posición de la lista específica
   * @param {number} indice Indice de la posición del personaje en la pokedex
   * @returns {T} Jugador de tipo T
   */
  getJugador(indice: number): T {
    return this.jugadores[indice];
  }
}
