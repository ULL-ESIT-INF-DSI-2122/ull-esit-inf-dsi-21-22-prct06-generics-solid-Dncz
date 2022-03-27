/**
 * Clase efectividad
 */
export class EfectividadMundo {
  /**
   * Constructor
   * @param {string} tipoJugador Poder / tipo del jugador
   */
  constructor(private tipoJugador: string) {
    this.tipoJugador = tipoJugador;
  }

  /**
   * Calcula la efectividad en caso de que los dos jugadores
   * pertenezcan al mundo Pokemon
   * @param {string} tipoOponente Poder/tipo del oponente
   * @returns {number} Efectividad
   */
  public mundoPokemon(tipoOponente: string): number {
    if (this.tipoJugador == 'fuego' && tipoOponente == 'hierba' || this.tipoJugador == 'agua' && tipoOponente == 'fuego' ||
        this.tipoJugador == 'hierba' && tipoOponente == 'agua' || this.tipoJugador == 'eléctrico' && tipoOponente == 'agua') {
      return 2;
    } else if (this.tipoJugador == 'fuego' && tipoOponente == 'eléctrico' || this.tipoJugador == 'hierva' && tipoOponente == 'eléctrico' ||
        this.tipoJugador == 'eléctrico' && tipoOponente == 'fuego' || this.tipoJugador == 'eléctrico' && tipoOponente == 'hierva') {
      return 1;
    }
    return 0.5;
  }

  /**
   * Calcula la efectividad en caso de que los dos jugadores
   * pertenezcan al mundo Marvel
   * @param {string} tipoOponente Poder/tipo del oponente
   * @returns {number} Efectividad
   */
  public mundoMarvel(tipoOponente: string): number {
    if (this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Superfuerza' ||
        this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Cuerpo a cuerpo' ||
        this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Objetos' ||
        this.tipoJugador == 'Superfuerza' && tipoOponente == 'Cuerpo a cuerpo' ||
        this.tipoJugador == 'Superfuerza' && tipoOponente == 'Objetos' ||
        this.tipoJugador == 'Objetos' && tipoOponente == 'Cuerpo a cuerpo' ||
        this.tipoJugador == 'Mutacion' && tipoOponente == 'Superfuerza' ||
        this.tipoJugador == 'Mutacion' && tipoOponente == 'Cuerpo a cuerpo' ||
        this.tipoJugador == 'Mutacion' && tipoOponente == 'Objetos') {
      return 2;
    }
    if (this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Mutacion' ||
        this.tipoJugador == 'Superfuerza' && tipoOponente == 'Mutacion' ||
        this.tipoJugador == 'Objetos' && tipoOponente == 'Objetos') {
      return 1;
    }
    return 0.5;
  }
}
