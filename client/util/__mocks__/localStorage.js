class LocalStorage {
  constructor() {
    this.data = {};
  }

  getItem(key) {
    console.log(`getItem for ${key}`);
    return this.data[key];
  }

  setItem(key, value) {
    console.log(`setItem for ${key} and ${value}`);
    this.data[key] = value;
  }
}

export const getLocalStorage = () => new LocalStorage();
