import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root' // This service can be injected anywhere in the app
})
export class HttpReqResService {

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {}

  /**
   * Make a POST request with common headers like Authorization.
   * @param url - API endpoint
   * @param data - Request body
   * @param token - JWT token for Authorization
   * @returns Observable with response
   */
  post<T>(url: string, data: any, auth?: boolean): Observable<T> {
    let headers = this.createHeaders(); // Create headers without token initially

    // If authentication is required, add the token to headers
    if (auth) {
      const token = this.tokenStorage.getToken(); // Get token from TokenStorageService
      if (token) {
        headers = this.createHeaders(token); // Create headers with token
      }
    }
    

    return this.http.post<T>(url, data, { headers }).pipe(
      map(response => response), // Transform response if necessary
      catchError(this.handleError)
    );
  }

  /**
   * Make a GET request with common headers like Authorization.
   * @param url - API endpoint
   * @param token - JWT token for Authorization
   * @returns Observable with response
   */
  get<T>(url: string, auth?: boolean): Observable<T> {
  
    let headers = this.createHeaders(); // Create headers without token initially

    // If authentication is required, add the token to headers
    if (auth) {
      const token = this.tokenStorage.getToken(); // Get token from TokenStorageService
      if (token) {
        headers = this.createHeaders(token); // Create headers with token
      }
    }
    return this.http.get<T>(url, { headers }).pipe(
      map(response => response), // Transform response if necessary
      catchError(this.handleError)
    );
  }

  /**
   * Create HTTP headers with Authorization token if available.
   * @param token - JWT token for Authorization
   * @returns HttpHeaders object
   */
  private createHeaders(token?: string): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  /**
   * Handle HTTP errors.
   * @param error - The HttpErrorResponse object
   * @returns Observable that emits an error message
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
