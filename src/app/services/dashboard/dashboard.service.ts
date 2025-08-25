import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from "../../constants/app.constants";
import { environment } from '../../../environments/environment';
import { Contact } from '../../model/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }


  getDashboardInfo() : Observable<string[]>{
    return this.http.get<string[]>(environment.serviceUrl + AppConstants.USERTS_API_URL + '/current', { withCredentials: true });
  }

  getAccountDetails(email: String){
    return this.http.get(environment.serviceUrl + AppConstants.ACCOUNT_API_URL + "?email="+email,{ observe: 'response',withCredentials: true });
  }

  saveMessage(contact : Contact){
    var contacts: Contact[] = [];
    contacts.push(contact);
    return this.http.post(environment.serviceUrl + AppConstants.CONTACT_API_URL,contacts,{ observe: 'response'});
  }

}
