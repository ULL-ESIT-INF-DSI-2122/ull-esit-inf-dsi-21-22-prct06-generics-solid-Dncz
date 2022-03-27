import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/ejercicio1/pokedex';
import {Pokemon} from '../src/ejercicio1/pokemon';
import {Marvel} from '../src/ejercicio1/marvel';
import {Combat} from '../src/ejercicio1/combat';
import {EfectividadMundo} from '../src/ejercicio1/efectividad';

let Bulbasaur: Pokemon = new Pokemon("Bulbasaur", "hierba", 30, 12, 34, 98, "Pokemon");
let Chamander: Pokemon = new Pokemon("Chamander", "fuego", 52, 43, 65, 39, "Pokemon");
let Psyduck: Pokemon = new Pokemon("Psyduck", "agua", 52, 48, 55, 50, "Pokemon");
let Pikachu: Pokemon = new Pokemon("Pikachu", "eléctrico", 55, 40, 90, 35, "Pokemon");

let BlackWidow: Marvel = new Marvel("Viuda negra", 60, 55, "Cuerpo a cuerpo", 30, 90, "Marvel");
let Wanda: Marvel = new Marvel("Wanda", 90, 90, "Telekinesis/telepatia", 30, 100, "Marvel");
let IronMan: Marvel = new Marvel("Iron Man", 60, 80, "Objetos", 80, 70, "Marvel");
let SpiderMan: Marvel = new Marvel("Spider Man", 65, 40, "Mutacion", 70, 88, "Marvel");
let Hulk: Marvel = new Marvel("Hulk", 77, 80, "Superfuerza", 20, 86, "Marvel");
let CapitanAmerica: Marvel = new Marvel("Capitan America", 56, 75, "Cuerpo a cuerpo", 58, 87, "Marvel");

let pokedex = new Pokedex([Bulbasaur, Chamander, BlackWidow, IronMan, Psyduck, Pikachu, Hulk, SpiderMan, CapitanAmerica]);

let torneo1 = new Combat(pokedex.getJugador(0), pokedex.getJugador(1));
let torneo2 = new Combat(pokedex.getJugador(1), pokedex.getJugador(2));
let torneo3 = new Combat(pokedex.getJugador(2), pokedex.getJugador(3));

let mundo1 = new EfectividadMundo(Bulbasaur.getPoder());
let mundo2 = new EfectividadMundo(BlackWidow.getPoder());

describe("ejercicio-1", () => {
  it("Clase Pokemons:", () => {
    expect(Bulbasaur).to.be.instanceOf(Pokemon);
    expect(Chamander).to.be.instanceOf(Pokemon);
    expect(Psyduck).to.be.instanceOf(Pokemon);
    expect(Pikachu).to.be.instanceOf(Pokemon);

    expect(Bulbasaur.frase(Bulbasaur.getNombre())).to.be.equal("- Bulbasaur: BAA... BAULBASAAUUUR!");
    expect(Chamander.frase(Chamander.getNombre())).to.be.equal("- Chamander: Cha cha mander!");
    expect(Psyduck.frase(Psyduck.getNombre())).to.be.equal("- Psyduck: Psy psy duuck");
    expect(Pikachu.frase(Pikachu.getNombre())).to.be.equal("- Pikachu: ¡Pika Pika!");
    expect(Pikachu.frase("")).to.be.equal("¿Has introducido bien los datos?");
  });

  it("Clase Marvel:", () => {
    expect(BlackWidow).to.be.instanceOf(Marvel);
    expect(Wanda).to.be.instanceOf(Marvel);
    expect(IronMan).to.be.instanceOf(Marvel);
    expect(SpiderMan).to.be.instanceOf(Marvel);
    expect(Hulk).to.be.instanceOf(Marvel);
    expect(CapitanAmerica).to.be.instanceOf(Marvel);

    expect(BlackWidow.frase(BlackWidow.getNombre())).to.be.equal("- Viuda negra: Gracias por tu cooperación");
    expect(Wanda.frase(Wanda.getNombre())).to.be.equal("- Wanda: Cuidado con lo que me dices");
    expect(IronMan.frase(IronMan.getNombre())).to.be.equal("- Iron Man: La armadura y yo somos uno");
    expect(SpiderMan.frase(SpiderMan.getNombre())).to.be.equal("- Spider Man: ¡Mi sentido arácnido está en alerta!");
    expect(Hulk.frase(Hulk.getNombre())).to.be.equal("- Hulk: Mi secreto es que siempre estoy furioso");
    expect(Hulk.frase("")).to.be.equal("¿Has introducido bien los datos?");
    expect(CapitanAmerica.frase(CapitanAmerica.getNombre())).to.be.equal("- Capitan America: Estás loco o has cruzado una línea que nadie debería cruzar");
  });

  it("Clase Fighter:", () => {
    expect(Bulbasaur.getNombre()).to.be.equal("Bulbasaur");
    expect(Bulbasaur.getPoder()).to.be.equal("hierba");
    expect(Bulbasaur.getAtaque()).to.be.equal(30);
    expect(Bulbasaur.getDefensa()).to.be.equal(12);
    expect(Bulbasaur.getVelocidad()).to.be.equal(34);
    expect(Bulbasaur.getUniverso()).to.be.equal("Pokemon");
    Bulbasaur.setVida(70);
    expect(Bulbasaur.getVida()).to.be.equal(70);

    expect(BlackWidow.getNombre()).to.be.equal("Viuda negra");
    expect(BlackWidow.getPoder()).to.be.equal("Cuerpo a cuerpo");
    expect(BlackWidow.getAtaque()).to.be.equal(60);
    expect(BlackWidow.getDefensa()).to.be.equal(55);
    expect(BlackWidow.getVelocidad()).to.be.equal(30);
    expect(BlackWidow.getUniverso()).to.be.equal("Marvel");
    BlackWidow.setVida(70);
    expect(BlackWidow.getVida()).to.be.equal(70);
  });

  it("Clase Pokedex:", () => {
    expect(pokedex).to.be.instanceOf(Pokedex);
    expect(pokedex.getPokedex()).to.deep.equal([Bulbasaur, Chamander, BlackWidow, IronMan, Psyduck, Pikachu, Hulk, SpiderMan, CapitanAmerica]);
    expect(pokedex.getNumeroJugadores()).to.be.equal(9);
    pokedex.addJugador(Wanda);
    expect(pokedex.getJugador(9)).to.be.equal(Wanda);
  });

  it("Clase Efectividad:", () => {
    expect(mundo1).to.be.instanceOf(EfectividadMundo);
    expect(mundo1.mundoPokemon(Chamander.getPoder())).to.deep.equal(0.5);
    expect(mundo2.mundoMarvel(IronMan.getPoder())).to.be.equal(0.5);
  });

  it("Clase Combat:", () => {
    expect(torneo1.getJugador1()).to.be.equal(Bulbasaur);
    expect(torneo1.getJugador2()).to.be.equal(Chamander);
    expect(torneo1.start()).to.be.equal("Chamander");

    expect(torneo2.getJugador1()).to.be.equal(Chamander);
    expect(torneo2.getJugador2()).to.be.equal(BlackWidow);
    expect(torneo2.start()).to.be.equal("Viuda negra");

    expect(torneo3.getJugador1()).to.be.equal(BlackWidow);
    expect(torneo3.getJugador2()).to.be.equal(IronMan);
    expect(torneo3.start()).to.be.equal("Iron Man");
  });
});
