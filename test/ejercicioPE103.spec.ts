import 'mocha';
import {expect} from 'chai';
import {ArithmeticableCollection} from '../src/ejercicioPE/clase';
import {Complex} from '../src/ejercicioPE/complex';
import {Rational} from '../src/ejercicioPE/rational';

describe("ejercicio-PE", () => {
  const complexCollection = new ArithmeticableCollection<Complex>([
    new Complex(4, 5),
    new Complex(1, 2),
  ]);

  const rationalCollection2 = new ArithmeticableCollection<Rational>([
    new Rational(2, 11), new Rational(1, 3)]);

  it("Clase  Complex:", () => {
    expect(complexCollection.getArithmeticable(0)).to.be.instanceOf(Complex);
    expect(complexCollection.getArithmeticable(1)).to.be.instanceOf(Complex);
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(2);
    expect(complexCollection.getArithmeticable(0).add(complexCollection.getArithmeticable(1)).toString()).to.be.equal("5 + 7i");
    expect(complexCollection.getArithmeticable(0).substract(complexCollection.getArithmeticable(1)).toString()).to.be.equal("3 + 3i");
    expect(complexCollection.getArithmeticable(0).multiply(complexCollection.getArithmeticable(1)).toString()).to.be.equal("-6 + 13i");
    expect(complexCollection.getArithmeticable(0).divide(complexCollection.getArithmeticable(1)).toString()).to.be.equal("-1.2 + 2.6i");
  });
  it("Clase Rational:", () => {
    expect(rationalCollection2.getArithmeticable(0)).to.be.instanceOf(Rational);
    expect(rationalCollection2.getArithmeticable(1)).to.be.instanceOf(Rational);
    expect(rationalCollection2.getArithmeticable(0).add(rationalCollection2.getArithmeticable(1)).toString()).to.be.equal("17 / 33");
    expect(rationalCollection2.getArithmeticable(0).substract(rationalCollection2.getArithmeticable(1)).toString()).to.be.equal("-5 / 33");
    expect(rationalCollection2.getArithmeticable(0).multiply(rationalCollection2.getArithmeticable(1)).toString()).to.be.equal("2 / 33");
    expect(rationalCollection2.getArithmeticable(0).divide(rationalCollection2.getArithmeticable(1)).toString()).to.be.equal("6 / 11");
    rationalCollection2.addArithmeticable(new Rational(42, 51));
    expect(rationalCollection2.getNumberOfArithmeticables()).to.be.equal(3);
  });
});
