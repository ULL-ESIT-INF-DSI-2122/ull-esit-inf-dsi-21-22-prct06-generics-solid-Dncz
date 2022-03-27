import {Arithmeticable} from "./clase";


/**
 * Clase complex
 */
export class Complex implements Arithmeticable<number> {
  constructor(private complexCollection: number[]) {
    this.complexCollection = complexCollection;
  }

  /**
   * Getter de la colección de números
   */
  public getComplexCollection(): number[] {
    return this.complexCollection;
  }

  /**
   * Suma dos números
   * @param {numer} number1
   * @param {numer} number2
   * @returns {numer} suma
   */
  add(number1: number, number2: number): number {
    return number1 + number2;
  }
  /**
   * Resta dos números
   * @param {numer} number1
   * @param {numer} number2
   * @returns {numer} resta
   */
  substract(number1: number, number2: number): number {
    return number1 - number2;
  }

  /**
   * Multiplica dos números
   * @param {numer} number1
   * @param {numer} number2
   * @returns {numer} multiplicación
   */
  multiply(number1: number, number2: number): number {
    return number1 * number2;
  }

  /**
   * Divide dos números
   * @param {numer} number1
   * @param {numer} number2
   * @returns {numer} división
   */
  divide(number1: number, number2: number): number {
    return number1 / number2;
  }
}
