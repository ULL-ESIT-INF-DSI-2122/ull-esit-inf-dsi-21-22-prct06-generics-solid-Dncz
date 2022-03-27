
import {Marvel} from './marvel';
import {Pokemon} from './pokemon';
import {EfectividadMundo} from './efectividad';

/**
 * Clase Combat
 */
export class Combat<T extends Pokemon | Marvel> {
  /**
   * Constructor
   * @param {T} jugador1 primer personaje del universo T
   * @param {T} jugador2 segundo personaje del universo T
   */
  constructor(private jugador1: T, private jugador2: T) {
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;
  }

  /**
   * Getter del atributo privado jugador1
   * @returns {T} Jugador del universo T
   */
  public getJugador1() : T {
    return this.jugador1;
  }

  /**
   * Getter del atributo privado jugador2
   * @returns {T} Jugador del universo T
   */
  public getJugador2() : T {
    return this.jugador2;
  }

  /**
   * Función que calcula el ataque causado
   * @param {T} jugadorOponente Jugador del turno
   * @param {T} jugadorTurno Jugador oponente
   * @returns {number} Daño
   */
  public ataque(jugadorTurno: T, jugadorOponente: T): number {
    let efectividad: number = 0;
    let mundo = new EfectividadMundo(jugadorTurno.getPoder());
    switch (jugadorTurno.getUniverso()) {
      case 'Pokemon':
        if (jugadorOponente.getUniverso() == 'Pokemon') {
          efectividad = mundo.mundoPokemon(jugadorOponente.getPoder());
        } else if (jugadorOponente.getUniverso() == 'Marvel') {
          efectividad = 0.5;
        }
        break;
      case 'Marvel':
        if (jugadorOponente.getUniverso() == 'Marvel') {
          efectividad = mundo.mundoMarvel(jugadorOponente.getPoder());
        } else if (jugadorOponente.getUniverso() == 'Pokemon') {
          efectividad = 2;
        }
        break;
    }
    return 50 * (jugadorTurno.getAtaque()/jugadorOponente.getAtaque()) * efectividad;
  }

  /**
   * Función que realiza el combate
   */
  public start(): string {
    let damage1: number = 0;
    let damage2: number = 0;
    let turno: number = 1;

    console.log(`Comienza: ${this.getJugador1().getNombre()}`);
    console.table(this.getJugador1());
    console.log(`Atacante: ${this.getJugador2().getNombre()}`);
    console.table(this.getJugador2());

    while (this.getJugador1().getVida() > 0 && this.getJugador2().getVida() > 0) {
      console.log(`\nTurno: ${turno}`);
      if ( turno % 2 != 0) {
        console.log(`Ataca: ${this.getJugador1().getNombre()}`);
        damage1 = this.ataque(this.getJugador1(), this.getJugador2());
        this.getJugador2().setVida(Math.floor(this.getJugador2().getVida() - damage1));
        console.log(`${this.getJugador1().getNombre()} ataca a ${this.getJugador2().getNombre()} con ${damage1.toFixed(2)} de daño!`);
        console.log(this.getJugador1().frase(this.getJugador1().getNombre()));
        console.log(`${this.getJugador2().getNombre()} ahora tiene ${this.getJugador2().getVida()} de vida`);
      } else {
        console.log(`ataca: ${this.getJugador2().getNombre()}`);
        damage2 = this.ataque(this.getJugador2(), this.getJugador1());
        this.getJugador1().setVida(Math.floor(this.getJugador1().getVida() - damage2));
        console.log(`${this.getJugador2().getNombre()} ataca a ${this.getJugador1().getNombre()} con ${damage2.toFixed(2)} de daño!`);
        console.log(this.getJugador2().frase(this.getJugador2().getNombre()));
        console.log(`${this.getJugador1().getNombre()} ahora tiene ${this.getJugador1().getVida()} de vida`);
      }
      turno++;
    }
    if (this.getJugador1().getVida() < this.getJugador2().getVida()) {
      console.log(`\n¡¡${this.getJugador1().getNombre()} se ha quedado sin vida!!`);
      console.log(`Ganador/a es: ${this.getJugador2().getNombre()}`);
      return this.getJugador2().getNombre();
    } else {
      console.log(`\nEl pokemon ${this.getJugador2().getNombre()} se ha quedado sin vida`);
      console.log(`Ganador/a es: ${this.getJugador1().getNombre()}`);
      return this.getJugador1().getNombre();
    }
  }
}

