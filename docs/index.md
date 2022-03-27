## Práctica 6 - Clases e interfaces genéricas. Principios SOLID.

### [Git Pages](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/).

## Índice
- [Introducción](#Introducción).
- [Actividades previas](#Actividades-previas).
- [Ejercicios](#Ejercicios).
    - [Ejercicio 1-El combate definitivo](#Ejercicio-1-El-combate-definitivo).
    <!-- - [Ejercicio 2-DSIflix](#Ejercicio-2-DSIflix). -->
    - [Ejercicio 3-El cifrado indescifrable](#Ejercicio-3-El-Cifrado-Indescifrable).
- [Ejercicios PE 103](#Ejercicios-PE-103).
- [Referencias](#Referencias).


## Introducción
En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript.

## Actividades previas
Para la preparación de los ficheros y directorios, la configuración de typedoc y la instación-configuración de mocha y chai, se puede consultar la sección [_actividades previas_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-Dncz/blob/main/docs/index.md#actividades-previas).


## Ejercicios
[Enunciado de las actividades](https://ull-esit-inf-dsi-2122.github.io/prct06-generics-solid/).

### Ejercicio 1-El combate definitivo
Para este ejercicio se ha creado seis clases: **Combat**, **Marvel**, **Pokedex**, **Pokemon**, **EfectividadMundo** y **Fighter**.

* **Clase Pokedex:** En esta clase se almacenan los personajes de todos los universos en una misma estructura. Por ello, en el constructor se retringe el valor genérico _T_ a las clases de los universos creados, Marvel y Pokemon. 

    Además, se crea los métodos necesarios como:
    * Getters: para el atributo privado (_getPokedex_), el número de jugadores dentro del array (_getNumeroJugadores_)y el jugador de un índice concreto (_getJugador_). También, un método para añadir nuevos personajes (_addJugador_).

    A contuación se muestra la clase en typescript.

    [pokedex.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio1/pokedex.ts;)
    ```typescript
    export class Pokedex<T extends Pokemon | Marvel> {
        /**
         * Constructor de la lista
        * @param {T[]} jugadores lista de los jugadores
        */
        constructor(private jugadores: T[]) {
        }

        /**
         * Getter que devuelve el array de los
        * personajes almacenados en la pokedex
        * @returns {T[]} Pokedex
        */
        getPokedex(): T[] {
            return this.jugadores;
        }

        /**
         * Añade nuevos personajes a la lista
        * @param {T} nuevosJugadores Nuevos personajes de diferentes o iguales universos
        */
        addJugador(nuevosJugadores: T) {
            this.jugadores.push(nuevosJugadores);
        }

        /**
         * Getter del número de personajes en la lista
        * @returns {number} Tamaño de la lista
        */
        getNumeroJugadores(): number {
            return this.jugadores.length;
        }

        /**
         * Getter del jugador de una posición de la lista específica
        * @param {number} indice Indice de la posición del personaje en la pokedex
        * @returns {T} Jugador de tipo T
        */
        getJugador(indice: number): T {
            return this.jugadores[indice];
        }
    }
    ```

* **Clase abstracta Fighter:** se define esta clase genérica que las clases de diferentes universos implementarán. En esta clase se contendrá las características comunes que comparten los personajes, como el nombre, el nivel de ataque, el nivel de defensa, el tipo al que pertenece o poder (según sus universo), la velocidad y la cantidad de vida. Por ello, la clase _Fighter_ tendrá los getter para cada atributo privado y un método abstracto que cada clase universo (Marvel y Pokemon) debe implementar, _frase_. En dicha función abstracta, se implementarán las frases de cada personaje.

    A contuación se muestra la clase en typescript.

    [fighter.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio1/fighter.ts)

    ```typescript
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
    ```

* **Clase Pokemon:** En esta clase implementa la clase genérica ya mencionada anteriormente, _Fighter_. En el costructor se pasarán por parámetros el nombre, tipo del pokemon, el nivel de ataque, el nivel de defensa, la velocidad, el nivel de vida y el nombre del universo al que pertenece.
En cuanto al método abracto de la superclase, _frase_, se pasará por parámetro el nombre del personaje. Y, dependiendo del nombre, la función retornará la frase correpondiente.

    A contuación se muestra la clase en typescript.

    [pokemon.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio1/pokemon.ts)

    ````typescript
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
    ````

* **Clase Marvel:** En esta clase implementa la clase genérica _Fighter_. En el costructor se pasarán por parámetros el nombre, tipo del pokemon, el nivel de ataque, el nivel de defensa, la velocidad, el nivel de vida y el nombre del universo al que pertenece.
En cuanto al método abracto de la superclase, _frase_, se pasará por parámetro el nombre del personaje. Y, dependiendo del nombre, la función retornará la frase correpondiente.

    A contuación se muestra la clase en typescript.

    [marvel.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio1/marvel.ts)

    ```typescript
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
    ```

* **Clase EfectividadMundo:** En esta clase se calcula las eficiencias de para cada mundo. Se define esta clase para que la clase _Combat_ sólo tenga que simular el combate. _EfectividadMundo_ contiene dos métodos públicos:
    * _mundoPokemon_: se para por parámetro el tipo de pokemon del oponente y, dependiendo del los tipos de pokemons de los jugadores, se retorna la eficiencia correspondiente.
    * _mundoMarvel_: sus funcionamiento es igual a la función anterior, pero con los tipos de poderes de los personajes de marvel.

    A contuación se muestra la clase en typescript.

    [efectividad.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio1/efectividad.ts)
    ```typescript
    export class EfectividadMundo {
        /**
         * Constructor
        * @param {string} tipoJugador Poder / tipo del jugador
        */
        constructor(private tipoJugador: string) {
            this.tipoJugador = tipoJugador;
        }

        /**
         * Calcula la efectividad en caso de que los dos jugadores
        * pertenezcan al mundo Pokemon
        * @param {string} tipoOponente Poder/tipo del oponente
        * @returns {number} Efectividad
        */
        public mundoPokemon(tipoOponente: string): number {
            if (this.tipoJugador == 'fuego' && tipoOponente == 'hierba' || this.tipoJugador == 'agua' && tipoOponente == 'fuego' ||
                this.tipoJugador == 'hierba' && tipoOponente == 'agua' || this.tipoJugador == 'eléctrico' && tipoOponente == 'agua') {
            return 2;
            } else if (this.tipoJugador == 'fuego' && tipoOponente == 'eléctrico' || this.tipoJugador == 'hierva' && tipoOponente == 'eléctrico' ||
                this.tipoJugador == 'eléctrico' && tipoOponente == 'fuego' || this.tipoJugador == 'eléctrico' && tipoOponente == 'hierva') {
            return 1;
            }
            return 0.5;
        }

        /**
         * Calcula la efectividad en caso de que los dos jugadores
        * pertenezcan al mundo Marvel
        * @param {string} tipoOponente Poder/tipo del oponente
        * @returns {number} Efectividad
        */
        public mundoMarvel(tipoOponente: string): number {
            if (this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Superfuerza' ||
                this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Cuerpo a cuerpo' ||
                this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Objetos' ||
                this.tipoJugador == 'Superfuerza' && tipoOponente == 'Cuerpo a cuerpo' ||
                this.tipoJugador == 'Superfuerza' && tipoOponente == 'Objetos' ||
                this.tipoJugador == 'Objetos' && tipoOponente == 'Cuerpo a cuerpo' ||
                this.tipoJugador == 'Mutacion' && tipoOponente == 'Superfuerza' ||
                this.tipoJugador == 'Mutacion' && tipoOponente == 'Cuerpo a cuerpo' ||
                this.tipoJugador == 'Mutacion' && tipoOponente == 'Objetos') {
            return 2;
            }
            if (this.tipoJugador == 'Telekinesis/telepatia' && tipoOponente == 'Mutacion' ||
                this.tipoJugador == 'Superfuerza' && tipoOponente == 'Mutacion' ||
                this.tipoJugador == 'Objetos' && tipoOponente == 'Objetos') {
            return 1;
            }
            return 0.5;
        }
    }
    ```

* **Clase Combat:** Esta clase permitirá que se realicen combates entre personajes de diferentes universos o iguales. Se crea los getters para los atributos privados y se implementa dos métodos que simularán el combate. Estas funciones son:
    * _ataque:_ En esta función se pasa por parámetro los jugadores y se calcula el ataque. Primero se crea un objeto de EfectividadMundo y luego, dependiendo del universo del jugador del turno del combate, se comprueba el jugador oponente pertenece al mismo mundo o no. En caso de que pertenezca a la misma clase se llama a la función de mundoZZZ(), donde ZZZ es el nombre del universo al que corresponden los jugadores. Pero, si los personajes son de diferentes mundos, se calcula la eficiencia de otra manera sin tener en cuanta el tipo/poder de los jugadores. Finalmente se retorna el ataque causado por el jugador del turno.

    * _start:_ Es la función principal que simula el combate. En este método, se itera hasta que uno de los jugadores se quede sin vida. Dentro del bucle, inicializamos el ataque del jugador del turno y modificamos la vida actual menos el daño causado al jugador oponente. Para modificar el daño, se utilizará el setter de la la clase Fighter (_setVida_). Luego, informaremos qué pokemon ataca y con cuánto daño. Así mismo, indicamos la vida que le queda al personaje oponente. Finalmente, comprobamos qué pokemon es el ganador mediante el nivel de vida y retornamos el nombre.

    A contuación se muestra la clase en typescript.

    [combat.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio1/combat.ts)
    ```typescript
    export class Combat<T extends Pokemon | Marvel> {
        /**
         * Constructor
        * @param {T} jugador1 primer personaje del universo T
        * @param {T} jugador2 segundo personaje del universo T
        */
        constructor(private jugador1: T, private jugador2: T) {
            this.jugador1 = jugador1;
            this.jugador2 = jugador2;
        }

        /**
         * Getter del atributo privado jugador1
        * @returns {T} Jugador del universo T
        */
        public getJugador1() : T {
            return this.jugador1;
        }

        /**
         * Getter del atributo privado jugador2
        * @returns {T} Jugador del universo T
        */
        public getJugador2() : T {
            return this.jugador2;
        }

        /**
         * Función que calcula el ataque causado
        * @param {T} jugadorOponente Jugador del turno
        * @param {T} jugadorTurno Jugador oponente
        * @returns {number} Daño
        */
        public ataque(jugadorTurno: T, jugadorOponente: T): number {
            let efectividad: number = 0;
            let mundo = new EfectividadMundo(jugadorTurno.getPoder());
            switch (jugadorTurno.getUniverso()) {
            case 'Pokemon':
                if (jugadorOponente.getUniverso() == 'Pokemon') {
                efectividad = mundo.mundoPokemon(jugadorOponente.getPoder());
                } else if (jugadorOponente.getUniverso() == 'Marvel') {
                efectividad = 0.5;
                }
                break;
            case 'Marvel':
                if (jugadorOponente.getUniverso() == 'Marvel') {
                efectividad = mundo.mundoMarvel(jugadorOponente.getPoder());
                } else if (jugadorOponente.getUniverso() == 'Pokemon') {
                efectividad = 2;
                }
                break;
            }
            return 50 * (jugadorTurno.getAtaque()/jugadorOponente.getAtaque()) * efectividad;
        }

        /**
         * Función que realiza el combate
        */
        public start(): string {
            let damage1: number = 0;
            let damage2: number = 0;
            let turno: number = 1;

            console.log(`Comienza: ${this.getJugador1().getNombre()}`);
            console.table(this.getJugador1());
            console.log(`Atacante: ${this.getJugador2().getNombre()}`);
            console.table(this.getJugador2());

            while (this.getJugador1().getVida() > 0 && this.getJugador2().getVida() > 0) {
            console.log(`\nTurno: ${turno}`);
            if ( turno % 2 != 0) {
                console.log(`Ataca: ${this.getJugador1().getNombre()}`);
                damage1 = this.ataque(this.getJugador1(), this.getJugador2());
                this.getJugador2().setVida(Math.floor(this.getJugador2().getVida() - damage1));
                console.log(`${this.getJugador1().getNombre()} ataca a ${this.getJugador2().getNombre()} con ${damage1.toFixed(2)} de daño!`);
                console.log(this.getJugador1().frase(this.getJugador1().getNombre()));
                console.log(`${this.getJugador2().getNombre()} ahora tiene ${this.getJugador2().getVida()} de vida`);
            } else {
                console.log(`ataca: ${this.getJugador2().getNombre()}`);
                damage2 = this.ataque(this.getJugador2(), this.getJugador1());
                this.getJugador1().setVida(Math.floor(this.getJugador1().getVida() - damage2));
                console.log(`${this.getJugador2().getNombre()} ataca a ${this.getJugador1().getNombre()} con ${damage2.toFixed(2)} de daño!`);
                console.log(this.getJugador2().frase(this.getJugador2().getNombre()));
                console.log(`${this.getJugador1().getNombre()} ahora tiene ${this.getJugador1().getVida()} de vida`);
            }
            turno++;
            }
            if (this.getJugador1().getVida() < this.getJugador2().getVida()) {
            console.log(`\n¡¡${this.getJugador1().getNombre()} se ha quedado sin vida!!`);
            console.log(`Ganador/a es: ${this.getJugador2().getNombre()}`);
            return this.getJugador2().getNombre();
            } else {
            console.log(`\nEl pokemon ${this.getJugador2().getNombre()} se ha quedado sin vida`);
            console.log(`Ganador/a es: ${this.getJugador1().getNombre()}`);
            return this.getJugador1().getNombre();
            }
        }
    }
    ```

<!-- ### Ejercicio 2-DSIflix -->

### Ejercicio 3-El cifrado indescifrable


* **Clase Cesar:** En esta clase se contiene los getter y setter necesarios para el texto cifrado o texo a cifrar, la clave y el alfabeto que se utilizará. En el constructor se pasa por parámetro el texto, la clave y el alfabeto. En él se inicializa la clave con la función _iniClave_ al tamaño del texto original. es decir, para el texto "HOLAESTOESUNAPRUEBA" y la clave "CLAVE", la clave que se inicializará será "CLAVECLAVECLAVECLAV" al tamaño del texto original. Esta función nos facilitará para el cálculor del desplazamiento para cada carácter del texto y de la clave. Se definen los getters para cada atributo privado y además, se implementarán getters para obtener un carácter de un índice concreto del texto, de la clave y del alfabeto.

    A contuación se muestra la clase en typescript.

    [cesar.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio3/cesar.ts)
    ```typescript
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
    ```

* **Clase Cifrado:** En esta clase se cifrará el texto mediante el método _cifrado_. El constructor de esta clase recibe como parámetro un objeto de la clase Cesar. En cuanto a los getter, se crea un geter para el único atributo privado.

    Se define las funciones:
    * _compruebaCaracter_: se define esta función que comprueba que el carácter pasado por parámetro pertenece al alfabeto o no. finalmente retorna true si pertenece o flase en caso contrario.

    * _calcularDesplazamiento_: Esta función se encarga se calcular el desplazamiento. Se itera hasta el tamaño del alfabeto y se comprueba que el carácter pasado por parámetro coincide con la letra del alfabeto de la posición i. Si se satisface la condición, se sale del bucle y se retorna la posición i.

    * _cifrado_: Es la función principal. Se itera hasta el tamaño del texto original y dentro del bucle se recorre el alfabeto y se comprueba que el carácter del texto original de la posición actual pertenece al alfabeto (se utliza la función compruebaCaracter). Si se cumple la condición, se calcula el dezplazamiento mediante la función calcularDesplazamiento y en la variable _textoCifrado_ se guarda el carácter de la posición calculada mediante la fórmula `desplazamiento = i + n mod alfabeto.length` (donde i es la posición actual del alfabeto). En caso contrario, de que el carácter no pertenezca al alfabeto, se guardará el mismo carácter en la varible de la solución. Finalmente, se retorna el texto codificado.

    A contuación se muestra la clase en typescript.

    [cifrar.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio3/cifrar.ts)
    ```typescript
    export class Cifrado {
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
         * Función que cifra el texto original
        * @returns {string} texto cifrado
        */
        public cifrado(): string {
            let textoCifrado: string = "";
            let desplazamiento: number = 0;
            for (let index = 0; index < this.cesar.getTextoOriginal().length; index++) {
            for (let i = 0; i < this.cesar.getAlfabeto().length; i++) {
                if (this.compruebaCaracter(this.getCesar().getCaracterTextoOrig(index))) {
                if (this.getCesar().getCaracterTextoOrig(index) == this.getCesar().getCaracterAlfabeto(i)) {
                    desplazamiento = this.calcularDesplazamiento(this.getCesar().getCaracterClave(index));
                    textoCifrado += this.getCesar().getCaracterAlfabeto((i + desplazamiento + 1) % this.cesar.getAlfabeto().length);
                }
                } else {
                textoCifrado += this.getCesar().getCaracterTextoOrig(index);
                break;
                }
            }
            }
            return textoCifrado;
        }
    }
    ```

* **Clase Descifrado:** En esta clase se descifrará el texto cifrado mediante el método _descifrado_. El constructor de esta clase recibe como parámetro un objeto de la clase Cesar. En cuanto a los getter, se crea un geter para el único atributo privado.

    Se define las funciones:
    * _compruebaCaracter_: se define esta función que comprueba que el carácter pasado por parámetro pertenece al alfabeto o no. finalmente retorna true si pertenece o flase en caso contrario.

    * _calcularDesplazamiento_: Esta función se encarga se calcular el desplazamiento. Se itera hasta el tamaño del alfabeto y se comprueba que el carácter pasado por parámetro coincide con la letra del alfabeto de la posición i. Si se satisface la condición, se sale del bucle y se retorna la posición i.

    * _cifrado_: Es la función principal. Se itera hasta el tamaño del texto original y dentro del bucle se recorre el alfabeto y se comprueba que el carácter del texto original de la posición actual pertenece al alfabeto (se utliza la función compruebaCaracter). Si se cumple la condición, se calcula el dezplazamiento mediante la función calcularDesplazamiento y en la variable _textoDesifrado_ se guarda el carácter de la posición calculada mediante la fórmula `desplazamiento = i - n - alfabeto.length mod alfabeto.length` (donde i es la posición actual del alfabeto). En caso contrario, de que el carácter no pertenezca al alfabeto, se guardará el mismo carácter en la varible de la solución. Finalmente, se retorna el texto descodificado.

    A contuación se muestra la clase en typescript.

    [descifrar.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicio3/descifrar.ts)
    ```typescript
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
    ```

## Ejercicios PE 103

* **Interfaz genérica Arithmeticable:** Se definen los métodos add, substract, multiply, divide.
    ```typescript
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
    ```

* **Clase genérica ArithmeticableCollection:** En esta clase se define un parámetro genérico _T_ que se encuentra retringido de la fomra definida por la interfaz genérica. Además, se definen dos getter y un método público:
    * _getArithmeticable:_ Devuelve un elemento de la colección tipo T.

    * _getNumberOfArithmeticables:_ Devuelve el número de elementos de la colección.

    * _addArithmeticable:_ Función que añade a la colección un elemento tipo T.

    A contuación se muestra la clase en typescript.

    [clase.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicioPE/clase.ts)
    ```typescript
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
    ```

* **Clase Complex:** En esta clase se implementa la interfaz genérica para tipos Complex. Se implementan las funciones de la interfaz (add, substract, multiply y divide) para dos números complejos. Además, se crea una función que imprime el número complejo.

    A contuación se muestra la clase en typescript.

    [complex.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicioPE/complex.ts)
    ```typescript
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
    ```

* **Clase Rational:** En esta clase se implementa la interfaz genérica para tipos Rational. Se implementan las funciones de la interfaz (add, substract, multiply y divide) para dos números racionales. Además, se crea una función que imprime el número racional.

    A contuación se muestra la clase en typescript.

    [rational.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Dncz/blob/bd86975063230d9d537d1d5f79271e8ee2ad6234/src/ejercicioPE/rational.ts)

    ```typescript
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
            if (this.denominador != number2.getDenominador()) {
            return new Rational(this.numerador * number2.getDenominador() + this.denominador * number2.getNumerador(),
                this.denominador* number2.getDenominador());
            }
            return new Rational(this.numerador + number2.getNumerador(), number2.getDenominador());
        }

        /**
         * Resta dos números racionales
        * @param {Rational} number2
        * @returns {Rational} resta
        */
        substract(number2: Rational): Rational {
            if (this.denominador != number2.getDenominador()) {
            return new Rational(this.numerador * number2.getDenominador() - this.denominador * number2.getNumerador(),
                this.denominador* number2.getDenominador());
            }
            return new Rational(this.numerador - number2.getNumerador(), number2.getDenominador());
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
    ```

## Referencias
- [División entre dos números complejos](https://www.google.com/search?q=division+entre+dos+numeros+complejos&oq=divi&aqs=chrome.0.69i59l2j69i57j69i59j69i60j69i61j69i60.1505j0j1&sourceid=chrome&ie=UTF-8).
- [Operaciones entre racionales](https://flexbooks.ck12.org/cbook/ck-12-conceptos-de-%C3%A1lgebra-nivel-b%C3%A1sico-en-espa%C3%B1ol/section/2.4/primary/lesson/adici%C3%B3n-de-n%C3%BAmeros-racionales-bsc-alg-spn/).