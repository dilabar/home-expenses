import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpReqResService } from './http-req-res.service';

@Injectable({
  providedIn: 'root'
})
export class EarningService {

  private apiUrl: string = environment.baseUrl + "api/";

  constructor(private reqResService: HttpReqResService) {}

  /**
   * Add new earning data.
   * @param data - The earning data to be sent to the API.
   * @param token - JWT token for Authorization.
   * @returns Observable with API response.
   */
  addEarning(data: any, auth: boolean): Observable<any> {
    return this.reqResService.post<any>(`${this.apiUrl}add_earning`, data, auth);
  }

  /**
   * Get source-wise earnings data.
   * @param token - JWT token for Authorization.
   * @returns Observable with API response.
   */
  getEarnings(): Observable<any> {
    return this.reqResService.get<any>(`${this.apiUrl}source_wise_totals`, true);
  }
}
