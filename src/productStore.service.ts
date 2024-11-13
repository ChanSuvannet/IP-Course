import axios from 'axios';
import { defineStore } from 'pinia';

export interface Category {
  id: number;
  name: string;
  group: string;
  productCount: number;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  group: string;
  countSold: number;
  price: number;
  image: string;
}

export interface Promotion {
  id: number;
  title: string;
  color: string;
  buttonColor: string;
  image: string;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [] as string[], // Explicit typing for groups
    promotions: [] as Promotion[],
    categories: [] as Category[],
    products: [] as Product[],
  }),
  getters: {
    
    getCategoriesByGroup: (state) => (groupName: string) =>
      state.categories.filter((category) => category.group === groupName),

    getProductsByGroup: (state) => (groupName: string) =>
      state.products.filter((product) => product.group === groupName),

    getProductsByCategory: (state) => (categoryId: number) =>
      state.products.filter((product) => product.categoryId === categoryId),

    getPopularProducts: (state) =>
      state.products.filter((product) => product.countSold > 10),
  },
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get<Category[]>(
          "http://localhost:3000/api/categories"
        );
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get<Promotion[]>(
          "http://localhost:3000/api/promotions"
        );
        this.promotions = response.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3000/api/products"
        );
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async fetchGroup() {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3000/api/groups"
        );
        this.groups = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
