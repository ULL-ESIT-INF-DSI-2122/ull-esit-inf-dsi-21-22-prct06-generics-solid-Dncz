import {Arithmeticable} from "./clase";

/**
 * Clase Rational
 */
export class Rational implements Arithmeticable<Rational> {
  /**
   * Constructor
   * @param {numer} numerador Numerador
   * @param {number} denominador Denominador
   */
  constructor(private numerador: number, private denominador: number) {
    this.numerador = numerador;
    this.denominador = denominador;
  }

  /**
   * Getter del denominador
   * @returns {Rational} Denominador
   */
  public getDenominador(): number {
    return this.denominador;
  }

  /**
   * Getter del numerador
   * @returns {Rational} Numerador
   */
  public getNumerador(): number {
    return this.numerador;
  }

  /**
   * Suma dos números racionales
   * @param {Rational} number2
   * @returns {Rational} suma
   */
  add(number2: Rational): Rational {
    return new Rational(this.numerador * number2.getDenominador() + this.denominador * number2.getNumerador(),
        this.denominador* number2.getDenominador());
  }

  /**
   * Resta dos números racionales
   * @param {Rational} number2
   * @returns {Rational} resta
   */
  substract(number2: Rational): Rational {
    return new Rational(this.numerador * number2.getDenominador() - this.denominador * number2.getNumerador(),
        this.denominador* number2.getDenominador());
  }

  /**
   * Multiplica dos números racionales
   * @param {Rational} number2
   * @returns {Rational} multiplicación
   */
  multiply(number2: Rational): Rational {
    return new Rational(this.numerador * number2.getNumerador(), this.denominador * number2.getDenominador());
  }

  /**
   * Divide dos números racionales
   * @param {Rational} number2
   * @returns {Rational} división
   */
  divide(number2: Rational): Rational {
    return new Rational(this.numerador * number2.getDenominador(), this.denominador * number2.getNumerador());
  }

  /**
   * Imprime los números racionales
   * @returns {string} Número racional
   */
  public toString(): string {
    return `${this.numerador} / ${Math.abs(this.denominador)}`;
  }
}
