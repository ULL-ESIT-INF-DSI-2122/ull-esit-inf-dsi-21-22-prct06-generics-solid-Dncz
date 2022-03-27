import {Cesar} from "./cesar";

/**
 * Clase Descifrado
 */
export class Descifrado {
  /**
   * Constructor
   * @param {Cesar} cesar Objeto Cesar
   */
  constructor(private cesar: Cesar) {
    this.cesar = cesar;
  }

  /**
   * Getter del atributo privado
   * @returns {Cesar} Objeto
   */
  public getCesar(): Cesar {
    return this.cesar;
  }

  /**
   * Calcula el desplazamiento
   * @param {string} caracterClave Caracter de una posición de la clave
   * @returns {number} Desplazamiento
   */
  public calcularDesplazamiento(caracterClave: string): number {
    let n: number = 0;
    for (let i = 0; i < this.cesar.getAlfabeto().length; i++) {
      if (caracterClave == this.getCesar().getCaracterAlfabeto(i)) {
        n = i;
        break;
      }
    }
    return n;
  }

  /**
   * Función que comprueba si el caracter del texto
   * original pertenece al alfabeto
   * @param {string} caracterTexto Caracter de una posición
   * @returns {boolean}
   */
  public compruebaCaracter(caracterTexto: string): boolean {
    for (let i = 0; i < this.cesar.getAlfabeto().length; i++) {
      if (caracterTexto == this.getCesar().getCaracterAlfabeto(i)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Función que descifra el texto cifrado
   * @returns {string} texto descifrado
   */
  public descifrado(): string {
    let textoDesifrado: string = "";
    let desplazamiento: number = 0;
    for (let index = 0; index < this.cesar.getTextoOriginal().length; index++) {
      for (let i = 0; i < this.cesar.getAlfabeto().length; i++) {
        if (this.compruebaCaracter(this.getCesar().getCaracterTextoOrig(index))) {
          if (this.getCesar().getCaracterTextoOrig(index) == this.getCesar().getCaracterAlfabeto(i)) {
            desplazamiento = this.calcularDesplazamiento(this.getCesar().getCaracterClave(index));
            textoDesifrado += this.getCesar().getCaracterAlfabeto((i - desplazamiento - 1 + this.cesar.getAlfabeto().length) % this.cesar.getAlfabeto().length);
          }
        } else {
          textoDesifrado += this.getCesar().getCaracterTextoOrig(index);
          break;
        }
      }
    }
    return textoDesifrado;
  }
}
