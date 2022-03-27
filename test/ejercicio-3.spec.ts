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

let cesar2 = new Cesar("SOFARaWAY", "CLAVE", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
let cifrarTexto2 = new Cifrado(cesar2);
let textoCifrado2: string = cifrarTexto2.cifrado();

let descifrarTexto2 = new Cesar(textoCifrado2, "CLAVE", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
let textoDesifrado3 = new Descifrado(descifrarTexto2);

describe("ejercicio-1", () => {
  it("Clase Cesar:", () => {
    expect(cesar).to.be.instanceOf(Cesar);
    expect(cesar2).to.be.instanceOf(Cesar);


    expect(cesar.getTextoOriginal()).to.be.equal("HOLAESTOESUNAPRUEBA");
    expect(cesar.getAlfabeto()).to.be.equal("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
    expect(cesar.getClave()).to.be.equal("CLAVECLAVECLAVECLAV");
    expect(descifrarTexto.getTextoOriginal()).to.be.equal(textoCifrado);
  });

  it("Clase Cifrado:", () => {
    expect(cifrarTexto).to.be.instanceOf(Cifrado);
    expect(cifrarTexto.cifrado()).to.be.equal("KAMWJVFPAXXYBMWXPCW");
    expect(cifrarTexto.compruebaCaracter("ó")).to.be.equal(false);

    expect(cifrarTexto2.cifrado()).to.be.equal("VAGWWaIBU");
    // expect().to.be.equal();
  });

  it("Clase Descifrado:", () => {
    expect(textoDesifrado).to.be.instanceOf(Descifrado);
    expect(textoDesifrado3).to.be.instanceOf(Descifrado);
    expect(textoDesifrado.descifrado()).to.be.equal("HOLAESTOESUNAPRUEBA");
    expect(textoDesifrado3.descifrado()).to.be.equal("SOFARaWAY");
  });
});
