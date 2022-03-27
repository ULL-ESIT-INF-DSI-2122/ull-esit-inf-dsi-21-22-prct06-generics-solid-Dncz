import {Arithmeticable} from "./clase";

/**
 * Clase complex
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * Constructor
   * @param {number} real Parte real
   * @param {number} imaginaria Parte imaginaria
   */
  constructor(private real: number, private imaginaria: number) {
  }

  /**
   * Suma dos números
   * @param {numer} numero2
   * @returns {numer} suma
   */
  add(numero2: Complex): Complex {
    return new Complex(this.real + numero2.real, this.imaginaria + numero2.imaginaria);
  }
  /**
   * Resta dos números
   * @param {numer} numero2
   * @returns {numer} resta
   */
  substract(numero2: Complex): Complex {
    return new Complex(this.real - numero2.real, this.imaginaria - numero2.imaginaria);
  }

  /**
   * Multiplica dos números
   * @param {numer} numero2
   * @returns {numer} multiplicación
   */
  multiply(numero2: Complex): Complex {
    return new Complex(this.real * numero2.real - this.imaginaria * numero2.imaginaria,
        this.real * numero2.imaginaria + this.imaginaria * numero2.real);
  }

  /**
   * Divide dos números
   * @param {numer} numero2
   * @returns {numer} división
   */
  divide(numero2: Complex): Complex {
    return new Complex((this.real*numero2.real + this.imaginaria*numero2.imaginaria) /
    (Math.pow(this.real, 2) + Math.pow(numero2.imaginaria, 2)),
    ((this.imaginaria * numero2.real - this.real * numero2.imaginaria)/
    (Math.pow(this.real, 2) + Math.pow(numero2.imaginaria, 2))) );
  }

  /**
   * Imprime los números complejos
   * @returns {string} Númeor complejo
   */
  public toString(): string {
    if (this.imaginaria >= 0) {
      return `${this.real} + ${this.imaginaria}i`;
    }
    return `${this.real} - ${Math.abs(this.imaginaria)}i`;
  }
}

