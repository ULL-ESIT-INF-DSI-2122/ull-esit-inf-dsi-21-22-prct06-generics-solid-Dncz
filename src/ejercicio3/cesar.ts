/**
 * Clase cesar
 */
export class Cesar {
  /**
   * Constructor
   * @param {string} textoOriginal Texto original
   * @param {string} clave Clave
   * @param {string} alfabeto Alfabeto
   */
  constructor(private textoOriginal: string, private clave: string, private alfabeto: string) {
    this.textoOriginal = textoOriginal;
    this.alfabeto = alfabeto;
    this.setClavePos(this.iniClave(clave));
  }

  /**
   * Inicializa la clave
   * @param {string} clave Clave
   * @returns {string} Nueva clave
   */
  private iniClave(clave: string): string {
    let nuevaClave: string = "";
    nuevaClave = clave.repeat(clave.length).substring(0, this.textoOriginal.length);
    return nuevaClave;
  }

  /**
   * Getter del texto original
   * @returns {string} Atributo privado
   */
  public getTextoOriginal() : string {
    return this.textoOriginal;
  }

  /**
   * Getter del Alfabeto
   * @returns {string} Atributo privado
   */
  public getAlfabeto(): string {
    return this.alfabeto;
  }

  /**
   * Getter de la clave
   * @returns {string} Atributo privado
   */
  public getClave(): string {
    return this.clave;
  }

  /**
   * Getter del caracter del texto dada una posición
   * @param {number} index Posición
   * @returns {string} Caracter del texto original de la posición
   */
  public getCaracterTextoOrig(index: number): string {
    return this.textoOriginal.charAt(index);
  }

  /**
   * Getter del caracter del alfabeto dada una posición
   * @param {number} index Posición
   * @returns {string} Caracter del alfabeto de la posición
   */
  public getCaracterAlfabeto(index: number): string {
    return this.alfabeto.charAt(index);
  }

  /**
   * Getter del caracter de la clave dada una posición
   * @param {number} index Posición
   * @returns {string} Caracter de la clave de la posición
   */
  public getCaracterClave(index: number): string {
    return this.clave.charAt(index);
  }

  /**
   * Setter que modifica la clave
   * @param {string} valor Clave
   */
  public setClavePos(valor: string): void {
    this.clave = valor;
  }
}
