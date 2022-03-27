/**
 * Ejercicio PE 103
 */

/**
 * Interfaz genérica
 */
export interface Arithmeticable<T> {
  /**
   * @param {T} number1 primer numero
   */
  add(number1: T): T;
  /**
   * @param {T} number1 primer numero
   */
  substract(number1: T): T;
  /**
   * @param {T} number1 primer numero
   */
  multiply(number1: T): T;
  /**
   * @param {T} number1 primer numero
   */
  divide(number1: T): T;
}

/**
 * Clase genérica
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  /**
   * Constructor
   * @param {T[]} collection Colección
   */
  constructor(protected collection: T[]) {
  }

  /**
   * Getter de un elemento de la colección
   */
  public getArithmeticable(index: number): T {
    return this.collection[index];
  }

  /**
   * Getter del tamaño de la colección
   */
  public getNumberOfArithmeticables() {
    return this.collection.length;
  }

  /**
   * Añadir un elemento a la colección
   */
  public addArithmeticable(newArithmeticable: T): void {
    this.collection.push(newArithmeticable);
  }
}

