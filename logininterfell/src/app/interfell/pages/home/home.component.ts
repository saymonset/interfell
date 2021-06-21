import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booking, ListadoDatos } from '../../interfaces/interface';
import { BookingService } from '../../service/booking.service';

 
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 displayedColumns: string[] = ['bookingId', 'cliente', 'fecha', 'direccion','precio'];
 //displayedColumns: string[] = ['bookingId'];
 // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource :  ListadoDatos[]  = [];

  bookings: ListadoDatos[] = [];
  constructor(private bookingService: BookingService,
    private router: Router) { }





  
  ngOnInit(): void {

    this.bookingService.getBookings().subscribe((resp)=>{
        this.bookings = resp;
        console.log(JSON.stringify(resp));
        this.dataSource = resp;

//        let { tutenUserProfessional } = resp;

    },(error)=>{
       this.router.navigateByUrl('/auth');

    })

   

  }

}
