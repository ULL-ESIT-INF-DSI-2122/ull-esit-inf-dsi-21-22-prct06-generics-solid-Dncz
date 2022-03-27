interface Arithmeticable<T> {
  add(operand: T): T;
  substract(operand: T): T;
  multiply(operand: T): T;
  divide(operand: T): T;
}

class ArithmeticableCollection<T extends Arithmeticable<T>> {
  constructor(private items: T[]) {
  }

  public addArithmeticable(item: T) {
    this.items.push(item);
  }

  public getArithmeticable(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return undefined;
  }

  public getNumberOfArithmeticables(): number {
    return this.items.length;
  }
}

class Complex implements Arithmeticable<Complex> {
  constructor(private re: number, private im: number) {
  }

  public add(operand: Complex): Complex {
    return new Complex(this.re + operand.re, this.im + operand.im);
  }

  public substract(operand: Complex): Complex {
    return new Complex(this.re - operand.re, this.im - operand.im);
  }

  public multiply(operand: Complex): Complex {
    return new Complex(this.re * operand.re - this.im * operand.im,
        this.re * operand.im + this.im * operand.re);
  }

  private reciprocal(): Complex {
    return new Complex(this.re / (this.re ** 2 + this.im ** 2),
        this.im / (this.re ** 2 + this.im ** 2));
  }

  public divide(operand: Complex): Complex {
    return this.multiply(operand.reciprocal());
  }

  public toString(): string {
    if (this.im >= 0) {
      return `${this.re} + ${this.im}i`;
    }
    return `${this.re} - ${Math.abs(this.im)}i`;
  }
}

const myComplexCollection = new ArithmeticableCollection<Complex>([
  new Complex(1, 1),
  new Complex(2, 2),
]);

console.log(myComplexCollection.getNumberOfArithmeticables());

console.log(myComplexCollection.getArithmeticable(0)!.toString());
console.log(myComplexCollection.getArithmeticable(1)!.toString());

console.log(myComplexCollection.getArithmeticable(0)!.add(
  myComplexCollection.getArithmeticable(1)!).toString());
console.log(myComplexCollection.getArithmeticable(0)!.substract(
  myComplexCollection.getArithmeticable(1)!).toString());
console.log(myComplexCollection.getArithmeticable(0)!.multiply(
  myComplexCollection.getArithmeticable(1)!).toString());
console.log(myComplexCollection.getArithmeticable(0)!.divide(
  myComplexCollection.getArithmeticable(1)!).toString());
