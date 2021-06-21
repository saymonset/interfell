import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of, Observable } from 'rxjs';

import {  catchError, map, tap} from 'rxjs/operators';
import { UsuarioResponse } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuarioResponse!: UsuarioResponse ;

  get usuarioResponse(){
           return {...this._usuarioResponse}
  }

  constructor(private http: HttpClient) { }


 

 

      public  login(email: string, password:string){

              const headers = new HttpHeaders({
                'password':password,
                'app': 'APP_BCK',
                'Accept':'application/json',
                'Content-Type':'application/json; charset=utf-8'
              });
             
//
              return  this.http.put<UsuarioResponse>(`${ this.baseUrl }`, email, {headers})
                .pipe(
                  //Muta la respyuesta
                  tap ( (resp:UsuarioResponse) => {
                    if (resp.sessionTokenBck){
                      localStorage.setItem('token',resp.sessionTokenBck!);
                      localStorage.setItem('resp',JSON.stringify(resp));
                      this._usuarioResponse = resp;
                    }
                  } ),
                  map( (resp:UsuarioResponse) => {
            
                      resp.ok = true;
                      return resp.ok;
                  }),
                  catchError (err => of(err.error.msg))
                );
                }

            logout(){
              localStorage.clear();
            }


            validarToken():Observable<boolean>{
              let usuarioResponse : UsuarioResponse = {};

              usuarioResponse = JSON.parse( localStorage.getItem('resp') || '' );
              if (usuarioResponse === ''){
                return of (false);
              }
              
              return of (true);
            }


}
