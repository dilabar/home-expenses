import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpReqResService } from './http-req-res.service';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.baseUrl + "api/";

  constructor(private reqres: HttpReqResService,private tokenStorage: TokenStorageService,private router:Router) {}

  /**
   * Logs in the user and stores the JWT token in local storage.
   * @param email - The user's email.
   * @param password - The user's password.
   * @returns Observable containing the login response.
   */
  login(email: string, password?: string,pin?:string): Observable<any> {
    let loginPayload: any = { email };

    if (password) {
      loginPayload.password = password;
    } else if (pin) {
      loginPayload.pin = pin;
    }
    return this.reqres.post<any>(this.apiUrl + "login", loginPayload).pipe(
      tap(response => {
        if (response && response.token) {
          // Store the JWT token in local storage
          this.tokenStorage.setToken(response.token);
          this.tokenStorage.setUserData(response.user);
        }
      })
    );
  }

  logout(): Observable<any> {
// Call the API to log out the user
return this.reqres.post<any>(this.apiUrl + "logout", {}, true).pipe(
      tap(res => {
        // Success: remove the token after the server confirms logout
        if(res.status){
          this.tokenStorage.removeToken();
          // Optionally, you could navigate to the login page or another page after logout
        }else{
          this.router.navigate(['/login']);

        }
      
      })
  
    );
  }

  /**
   * Sets a PIN for the current user.
   * @param pin - The PIN to be set.
   * @returns Observable containing the API response.
   */
  setPin(pin: string): Observable<any> {
    const payload = { pin };

    return this.reqres.post<any>(this.apiUrl + "set_pin", payload, true).pipe(
      tap(response => {
        if (response && response.status==true) {
          this.tokenStorage.setPin(pin)
          console.log('PIN has been set successfully.');
        }
      })
    );
  }
  isLoggedIn(): boolean {
    return !!this.tokenStorage.getToken(); // Check token using TokenStorageService
  }

  getToken(): string | null {
    return this.tokenStorage.getToken(); // Use TokenStorageService to get token
  }
  getPin(): string | null {
    return this.tokenStorage.getPin(); // Use TokenStorageService to get pin
  }
  getUser(): string | null {
    return this.tokenStorage.getUserData(); // Use TokenStorageService to get pin
  }
}
