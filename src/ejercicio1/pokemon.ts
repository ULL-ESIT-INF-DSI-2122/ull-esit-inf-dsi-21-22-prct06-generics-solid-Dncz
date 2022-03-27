import {Fighter} from './fighter';


export class Pokemon extends Fighter {
  /**
   * Constructor
   * @param {string} nombre Nombre del pokemon
   * @param {string} tipo Tipo al que pertenece el pokemon
   * @param {number} ataque Ataque del pokemon
   * @param {number} defensa Defensa del pokemon
   * @param {number} velocidad Velocidad del pokemon
   * @param {number} vida Vida del pokemon
   * @param {string} universo Universo al que pertenece el pokemon
   */
  constructor(nombre: string, tipo: string, ataque: number, defensa: number, velocidad: number,
      vida: number, universo: string) {
    super(nombre, ataque, defensa, tipo, velocidad, vida, universo);
  }

  /**
   * Función que muestra en la consola la frase
   * de cada personaje
   * @param {string} personaje Nombre del Pokemon
   * @returns {string} frase del personaje
   */
  frase(personaje: string): string {
    let frasePersonaje: string = "";
    switch (personaje) {
      case 'Bulbasaur':
        frasePersonaje = "- Bulbasaur: BAA... BAULBASAAUUUR!";
        break;
      case 'Chamander':
        frasePersonaje = "- Chamander: Cha cha mander!";
        break;
      case 'Psyduck':
        frasePersonaje = "- Psyduck: Psy psy duuck";
        break;
      case 'Pikachu':
        frasePersonaje = "- Pikachu: ¡Pika Pika!";
        break;
      default:
        frasePersonaje = "¿Has introducido bien los datos?";
        break;
    }
    return frasePersonaje;
  }
}
