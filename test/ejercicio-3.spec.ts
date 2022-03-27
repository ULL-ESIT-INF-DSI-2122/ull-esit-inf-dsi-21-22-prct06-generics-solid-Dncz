import 'mocha';
import {expect} from 'chai';
import {Cesar} from "../src/ejercicio3/cesar";
import {Descifrado} from "../src/ejercicio3/descifrar";
import {Cifrado} from "../src/ejercicio3/cifrar";

let cesar = new Cesar("HOLAESTOESUNAPRUEBA", "CLAVE", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
let cifrarTexto = new Cifrado(cesar);
let textoCifrado: string = cifrarTexto.cifrado();

let descifrarTexto = new Cesar(textoCifrado, "CLAVE", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
let textoDesifrado = new Descifrado(descifrarTexto);

describe("ejercicio-1", () => {
  it("Clase Cesar:", () => {
    expect(cesar).to.be.instanceOf(Cesar);
    expect(descifrarTexto).to.be.instanceOf(Cesar);

    expect(cesar.getTextoOriginal()).to.be.equal("HOLAESTOESUNAPRUEBA");
    expect(cesar.getAlfabeto()).to.be.equal("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
    expect(cesar.getClave()).to.be.equal("CLAVECLAVECLAVECLAV");
    expect(descifrarTexto.getTextoOriginal()).to.be.equal(textoCifrado);
  });

  it("Clase Cifrado:", () => {
    expect(cifrarTexto).to.be.instanceOf(Cifrado);
    expect(cifrarTexto.cifrado()).to.be.equal("KAMWJVFPAXXYBMWXPCW");
  });

  it("Clase Descifrado:", () => {
    expect(textoDesifrado).to.be.instanceOf(Descifrado);
    expect(textoDesifrado.descifrado()).to.be.equal("HOLAESTOESUNAPRUEBA");
  });
});
