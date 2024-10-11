import { Injectable } from '@angular/core';
import { HttpReqResService } from './http-req-res.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.baseUrl + "api/";


  constructor(private reqResService:HttpReqResService) { }

  /**
   * Get source-wise earnings data.
   * @param token - JWT token for Authorization.
   * @returns Observable with API response.
   */
  getAccount(): Observable<any> {
    return this.reqResService.get<any>(`${this.apiUrl}get_user_financial_data`, true);
  }
}
