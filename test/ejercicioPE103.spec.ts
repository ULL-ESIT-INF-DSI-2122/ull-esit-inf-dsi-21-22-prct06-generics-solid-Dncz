import 'mocha';
import {expect} from 'chai';
import {ArithmeticableCollection} from '../src/ejercicioPE/clase';
import {Complex} from '../src/ejercicioPE/complex';
import {Rational} from '../src/ejercicioPE/rational';

describe("ejercicio-PE", () => {
  let coleccioncomplex = new Complex([1, 2, 3]);
  // const myRationalCollection = new ArithmeticableCollection<Rational>([
  //   new Rational(5, 7), new Rational(1, 6)]);


  it("Clase  Complex:", () => {
    expect(coleccioncomplex).to.be.instanceOf(Complex);
    expect(coleccioncomplex.getComplexCollection()).to.deep.equal([1, 2, 3]);
    expect(coleccioncomplex.add(1, 2)).to.be.equal(3);
    expect(coleccioncomplex.substract(2, 3)).to.be.equal(-1);
    expect(coleccioncomplex.multiply(3, 2)).to.be.equal(6);
    expect(coleccioncomplex.divide(6, 2)).to.be.equal(3);
  });
  it("Clase Rational:", () => {
    // expect().to.be.equal();
  });
});
