/**
 * Clase abstracta Fighter
 */
export abstract class Fighter {
  /**
   * Constructor
   * @param {string} nombre Nombre del personaje
   * @param {number} ataque Ataque del personaje
   * @param {number} defensa Defensa del personaje
   * @param {string} poder Poder del personaje
   * @param {number} velocidad Velocidad del personaje
   * @param {number} vida Vida del personaje
   */
  constructor(private nombre: string, private ataque: number, private defensa: number,
    private poder: string, private velocidad: number, private vida: number, private universo: string) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.poder = poder;
    this.vida = vida;
    this.universo = universo;
  }

  /**
   * Getter del atributo privado nombre
   * @returns {string} Retorna el nombre
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * Getter del atributo privado ataque
   * @returns {number} Retorna el ataque
   */
  public getAtaque(): number {
    return this.ataque;
  }

  /**
   * Getter del atributo privado defensa
   * @returns {number} Retorna la defensa
   */
  public getDefensa(): number {
    return this.defensa;
  }

  /**
   * Getter del atributo privado velocidad
   * @returns {number} Retorna la velocidad
   */
  public getVelocidad(): number {
    return this.velocidad;
  }

  /**
   * Getter del atributo privado poder
   * @returns {string} Retorna el tipo/ poder del personaje
   */
  public getPoder(): string {
    return this.poder;
  }

  /**
   * Getter del atributo privado vida
   * @returns {number} Retorna la vida actual del personaje
   */
  public getVida(): number {
    return this.vida;
  }

  /**
   * Getter del universo que pertenece el jugador
   * @returns {string} Universo
   */
  public getUniverso(): string {
    return this.universo;
  }

  /**
   * Setter que modifica la vida del personaje
   * @param {number} vida Vida del personaje
   */
  public setVida(vida: number): void {
    this.vida = vida;
  };

  /**
   * Método abstracto que muestra en la consola la frase
   * de los personajes dependiendo de su mundo
   * @param {string} personaje Nombre del jugador
   */
  abstract frase(personaje: string): string;
}
