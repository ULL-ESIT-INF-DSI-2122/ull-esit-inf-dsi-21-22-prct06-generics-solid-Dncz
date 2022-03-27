import {Cesar} from "./cesar";
import {Descifrado} from "./descifrar";
import {Cifrado} from "./cifrar";


let cesar = new Cesar("HOLAESTOESUNAPRUEBA", "CLAVE", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
let cifrarTexto = new Cifrado(cesar);
let textoCifrado: string = cifrarTexto.cifrado();
// console.log(textoCifrado);

let descifrarTexto = new Cesar(textoCifrado, "CLAVE", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
let textoDesifrado = new Descifrado(descifrarTexto);
// console.log(textoDesifrado.descifrado());
