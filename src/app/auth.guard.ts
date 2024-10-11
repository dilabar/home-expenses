import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenStorage = inject(TokenStorageService);
  const router = inject(Router);

  const isLoggedIn = !!tokenStorage.getToken(); // Check if token exists

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    router.navigate(['/login']);
    return false; // Prevent access to the route
  }

  return true; // Allow access to the route
};
