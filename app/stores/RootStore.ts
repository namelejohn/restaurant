import Store from './store.ts';

class RootStore {
  productStore: Store;

  constructor() {
    this.productStore = new Store();
  }
}

export default RootStore;
