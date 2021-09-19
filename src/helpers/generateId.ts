class GenerateId {
  private symbols = ['@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', '!', '.'];

  randomSymbol() {
    const index = Math.floor(Math.random() * this.symbols.length);
    return this.symbols[index];
  }

  id() {
    return `${this.randomSymbol()}${Date.now()}`;
  }
}

const generateId = new GenerateId();
export {generateId};
