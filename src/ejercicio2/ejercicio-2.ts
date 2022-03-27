// Prueba 2

interface Streamable<T> {
  addItem(newItem: T): void;
  getItems(index: number): T;
  getNumberOfItems(): number;
}

interface SearchItem<T> {
  search(term: T): T[];
}

abstract class BasicStreamableCollection<T> implements Streamable<T>, SearchItem<T> {
  constructor(private colection: T[]) {
  }

  public getColection(): T[] {
    return this.colection;
  }

  public getItems(index: number): T {
    return this.colection[index];
  }

  public getNumberOfItems(): number {
    return this.colection.length;
  }

  public addItem(newItem: T): void {
    this.colection.push(newItem);
  }

  abstract search(term: T): T[];
}

class Series extends BasicStreamableCollection<string> {
  constructor(colections: string[]) {
    super(colections);
  }

  public search(term: string): string[] {
    return this.getColection().filter((item) => item === term);
  }
}

class Films extends BasicStreamableCollection<string> {
  constructor(colections: string[]) {
    super(colections);
  }
  public search(term: string): string[] {
    return this.getColection().filter((item) => item === term);
  }
}

class Documentaries extends BasicStreamableCollection<string> {
  constructor(colections: string[]) {
    super(colections);
  }
  public search(term: string): string[] {
    // this.getColection().push
    return this.getColection().filter((item) => item === term);
  }
}
