import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  // Store the token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Get the token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove the token
  removeToken(): void {
    localStorage.removeItem('token');
  }
  // Store the PIN
  setPin(pin: string): void {
    localStorage.setItem('pin', pin);
  }

  // Get the PIN
  getPin(): string | null {
    return localStorage.getItem('pin');
  }

  // Remove the PIN
  removePin(): void {
    localStorage.removeItem('pin');
  }
// Set user data as a JSON string
setUserData(data: any): void {
  localStorage.setItem('userdata', JSON.stringify(data));
}

// Get user data from local storage
getUserData(): any {
  const data = localStorage.getItem('userdata');
  return data ? JSON.parse(data) : null; // Parse and return user data or null if not found
}

// Remove user data from local storage
removeUserData(): void {
  localStorage.removeItem('userdata');
}
}
