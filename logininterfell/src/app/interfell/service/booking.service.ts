import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of, Observable } from 'rxjs';

import {  catchError, map, switchMap, tap} from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { booking, ListadoDatos } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUlr: string = 'https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings';
  //https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true&email=ddddd

  
  constructor(  private http: HttpClient ,
                private authService : AuthService) { }


  private ejecutarQuery<T>( query: string ):Observable<T> {

    let headers = new HttpHeaders({
      'adminemail': this.authService.usuarioResponse.email?this.authService.usuarioResponse.email:'',
      'token': this.authService.usuarioResponse.sessionTokenBck?this.authService.usuarioResponse.sessionTokenBck:'',
      'app': 'APP_BCK',
      'Accept':'application/json',
      'Content-Type':'application/json; charset=utf-8'
    });
   

    query = this.apiUlr + query;

    return this.http.get<T>( query, { headers } )    .pipe(
      //Muta la respyuesta
      tap ( (resp:T) => {
        
        if (!resp){
          localStorage.setItem('token','');
          localStorage.setItem('resp','');
        }
      } ));



    
    // return  this.http.put<UsuarioResponse>(`${ this.baseUrl }`, email, {headers})
    // .pipe(
    //   //Muta la respyuesta
    //   tap ( (resp:UsuarioResponse) => {
    //     if (resp.sessionTokenBck){
    //       localStorage.setItem('token',resp.sessionTokenBck!);
    //       localStorage.setItem('resp',JSON.stringify(resp));
    //       this._usuarioResponse = resp;
    //     }
    //   } ),
    //   map( (resp:UsuarioResponse) => {

    //       resp.ok = true;
    //       return resp.ok;
    //   }),
    //   catchError (err => of(err.error.msg))
    // );



  }


  getBookings():Observable<ListadoDatos[]> {
    let listadoDatos : ListadoDatos[] =  [];
    return this.ejecutarQuery<any[]>(`?current=true&email=${ this.authService.usuarioResponse.email }`)
    .pipe(
      switchMap((valores)=>{
                
        valores.forEach( (valor: booking)=>{
          let { parentBooking, bookingTime, bookingPrice } = valor;
          let { tutenUserProfessional } = parentBooking || {};

          let { tutenUser1, streetAddress } = tutenUserProfessional || {}

          let {firstName, lastName } = tutenUser1 || {}

          console.log(tutenUser1);

          let listadoDato: ListadoDatos = {};
          listadoDato.bookingId = valor.bookingId;
          listadoDato.firstName = firstName;
          listadoDato.lastName = lastName;
          listadoDato.streetAddress = streetAddress;
       
          

          let num : number = 0;
          if (bookingTime){
             num  = (bookingTime) || 0;
          }
          
          // const d1 = new Date(+);

          // console.log('Fecha:',d1);
          
          const d2 = new Date(num);

          listadoDato.bookingTime = d2;


          listadoDato.bookingPrice = bookingPrice;

          listadoDatos.push(listadoDato);


        })
        return of (listadoDatos);
      })
    );
  }

 
}
