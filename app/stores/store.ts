import {makeAutoObservable} from 'mobx';
import {Filter, Product} from '../types';
import {filterData, products as mockProducts} from '../data/data';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItem extends Product {
  quantity: number;
}

class Store {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  activeFilter: Filter = filterData[0];
  cart: CartItem[] = [];
  error: string | null = null;
  selectedItem: {
    id: number;
    image: string;
    price: number;
    name: string;
    category: string;
  } = {category: '', id: 0, image: '', name: '', price: 0};
  search: string = '';
  loyaltyList: {date: string}[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'ProductStore',
      properties: ['loyaltyList'],
      storage: AsyncStorage,
    });
  }

  loadProducts = () => {
    try {
      this.products = mockProducts;
      this.filteredProducts = mockProducts;
      this.applyFilter();
    } catch (error: any) {}
  };

  setFilter = (filter: Filter) => {
    this.activeFilter = filter;
    this.applyFilter();
  };

  setSelectedItem = (item: Product) => {
    this.selectedItem = item;
  };

  setSearch = (query: string) => {
    this.search = query;
    this.applyFilterAndSearch();
  };

  private applyFilterAndSearch = () => {
    let results = this.products;

    if (this.activeFilter.name !== 'All') {
      results = results.filter(
        product =>
          product.category.toLowerCase() ===
          this.activeFilter.name.toLowerCase(),
      );
    }

    if (this.search.trim()) {
      const searchQuery = this.search.toLowerCase().trim();
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchQuery),
      );
    }

    this.filteredProducts = results;
  };

  private applyFilter = () => {
    this.applyFilterAndSearch();
  };

  handlePlus = (product: Product) => {
    const existingItem = this.cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cart = [...this.cart];
    } else {
      this.cart.push({...product, quantity: 1});
    }
  };

  handleMinus = (productId: number) => {
    const existingItem = this.cart.find(item => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        this.cart = [...this.cart];
      } else {
        this.removeFromCart(productId);
      }
    }
  };

  addLoyalty = (code: string) => {
    if (code === 'bonus') {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
      })} | ${now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;

      this.loyaltyList.push({
        date: formattedDate,
      });
      this.error = null;
      return true;
    } else {
      this.error = 'Invalid code';
    }
    return undefined;
  };

  clearLoyalty = () => {
    this.loyaltyList = [];
  };

  removeFromCart = (productId: number) => {
    this.cart = this.cart.filter(item => item.id !== productId);
  };

  clearCart = () => {
    this.cart = [];
  };

  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getItemQuantity = (productId: number): number => {
    const item = this.cart.find(it => it.id === productId);
    return item ? item.quantity : 0;
  };

  get totalItems() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

export default Store;
