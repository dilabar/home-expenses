import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpReqResService } from './http-req-res.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiUrl: string = environment.baseUrl + "api/";

  constructor(private reqResService:HttpReqResService) {
  
  }



  /**
   * Add new expense data.
   * @param data - The earning data to be sent to the API.
   * @param token - JWT token for Authorization.
   * @returns Observable with API response.
   */
  addExpense(data: any,auth:boolean): Observable<any> {
    return this.reqResService.post<any>(`${this.apiUrl}add_expense`, data, auth);
  }

  /**
   * Get get_category data.
   * @param token - JWT token for Authorization.
   * @returns Observable with API response.
   */
  getCategory(): Observable<any> {
    return this.reqResService.get<any>(`${this.apiUrl}get_category`, true);
  }

    /**
   * Get get_category data.
   * @param token - JWT token for Authorization.
   * @returns Observable with API response.
   */
    getExpenses(): Observable<any> {
      return this.reqResService.get<any>(`${this.apiUrl}get_expense`, true);
    }
  
  

   
}
