import { Injectable } from '@angular/core';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private store;

  constructor() {
    // Configure the localforage store for IndexedDB
    this.store = localforage.createInstance({
      name: 'homeManagementApp',
      storeName: 'dataStore',
      driver: localforage.INDEXEDDB
    });
  }

  // Save data (e.g., earnings)
  async setItem(key: string, value: any): Promise<void> {
    try {
      await this.store.setItem(key, value);
      console.log(`Data saved: ${key}`);
    } catch (error) {
      console.error('Error saving to IndexedDB:', error);
    }
  }

  // Get data
  async getItem(key: string): Promise<any> {
    try {
      const data = await this.store.getItem(key);
      return data;
    } catch (error) {
      console.error('Error retrieving from IndexedDB:', error);
    }
  }

  // Remove data
  async removeItem(key: string): Promise<void> {
    try {
      await this.store.removeItem(key);
      console.log(`Data removed: ${key}`);
    } catch (error) {
      console.error('Error removing from IndexedDB:', error);
    }
  }

  // Clear all data
  async clear(): Promise<void> {
    try {
      await this.store.clear();
      console.log('All data cleared');
    } catch (error) {
      console.error('Error clearing IndexedDB:', error);
    }
  }
}
