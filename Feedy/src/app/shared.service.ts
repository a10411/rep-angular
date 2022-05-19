import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SharedService {
  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http:HttpClient) { }

  loginCliente(val:any)
  {
    return this.http.get(this.APIUrl+'/cliente/login', val);
  }
  
}
