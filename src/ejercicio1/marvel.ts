import {Fighter} from './fighter';

/**
 * Clase Marvel
 */
export class Marvel extends Fighter {
  /**
   * Constructor
   * @param {string} nombre Nombre del personaje
   * @param {number} ataque Ataque del personaje
   * @param {number} defensa Defensa del personaje
   * @param {number} poder Poder del personaje
   * @param {number} velocidad Velocidad del personaje
   * @param {number} vida Vida del personaje
   * @param {string} universo Universo del personaje
   */
  constructor(nombre: string, ataque: number, defensa: number,
      poder: string, velocidad: number, vida: number, universo: string) {
    super(nombre, ataque, defensa, poder, velocidad, vida, universo);
  }

  /**
   * Función que muestra en la consola la frase
   * de cada personaje
   * @param {string} personaje Nombre del personaje de marvel
   * @returns {string} frase del personaje
   */
  frase(personaje: string): string {
    let frasePersonaje: string = "";
    switch (personaje) {
      case 'Iron Man':
        frasePersonaje = "- Iron Man: La armadura y yo somos uno";
        break;
      case 'Wanda':
        frasePersonaje = "- Wanda: Cuidado con lo que me dices";
        break;
      case 'Viuda negra':
        frasePersonaje = "- Viuda negra: Gracias por tu cooperación";
        break;
      case 'Spider Man':
        frasePersonaje = "- Spider Man: ¡Mi sentido arácnido está en alerta!";
        break;
      case 'Hulk':
        frasePersonaje = "- Hulk: Mi secreto es que siempre estoy furioso";
        break;
      case 'Capitan America':
        frasePersonaje = "- Capitan America: Estás loco o has cruzado una línea que nadie debería cruzar";
        break;
      default:
        frasePersonaje = "¿Has introducido bien los datos?";
        break;
    }
    return frasePersonaje;
  }
}
