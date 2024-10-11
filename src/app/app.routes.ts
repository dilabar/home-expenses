import { Routes } from '@angular/router';
import { authGuard } from './auth.guard'; // Import the auth guard

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
        canActivate: [authGuard] // Protect the home route
      },
      {
        path: 'earnings',
        loadComponent: () => import('./pages/earnings/earnings.page').then((m) => m.EarningsPage),
        canActivate: [authGuard] // Protect the earnings route
      },
      {
        path: 'expenses',
        loadComponent: () => import('./pages/expenses/expenses.page').then(m => m.ExpensesPage),
        canActivate: [authGuard] // Protect the expenses route
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'create-pin',
    loadComponent: () => import('./create-pin/create-pin.page').then( m => m.CreatePinPage)
  },
];
