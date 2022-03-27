/**
 * Ejercicio PE 103
 */

/**
 * Interfaz genérica
 */
export interface Arithmeticable<T> {
  /**
   * @param {T} number1 primer numero
   * @param {T} number2 segundo numero
   */
  add(number1: T, number2: T): T;
  /**
   * @param {T} number1 primer numero
   * @param {T} number2 segundo numero
   */
  substract(number1: T, number2: T): T;
  /**
   * @param {T} number1 primer numero
   * @param {T} number2 segundo numero
   */
  multiply(number1: T, number2: T): T;
  /**
   * @param {T} number1 primer numero
   * @param {T} number2 segundo numero
   */
  divide(number1: T, number2: T): T;
}


export abstract class ArithmeticableCollection<T extends Arithmeticable<T>> {
  /**
   * Constructor
   * @param {T[]} collection Colección
   */
  constructor(protected collection: T[]) {
  }

  /**
   * Getter del atributo privado collection
   * @returns {T[]} collection
   */
  public getCollection(): T[] {
    return this.collection;
  }

  /**
   * Getter de un elemento de la colección
   */
  public getArithmeticable(index: number): T | undefined {
    if (index >= 0 && index < this.collection.length) {
      return this.collection[index];
    }
    return undefined;
  }

  /**
   * Añadir un elemento a la colección
   */
  public addArithmeticable(newArithmeticable: T): void {
    this.collection.push(newArithmeticable);
  }

  /**
   * GEtter del tamaño de la colección
   */
  public getNumberOfArithmeticables() {
    return this.collection.length;
  }
}

