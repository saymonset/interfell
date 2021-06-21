import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { UsuarioResponse } from '../../interfaces/interfaces';
import { AuthService } from '../../service/auth.service';
 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  
  
  
  ]
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    //  email: ['testapis@tuten.cl', [Validators.required, Validators.email]],
    //  password: ['1234', [Validators.required, Validators.minLength(4)]]
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(4)]]
  });
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService : AuthService
   
    ) { }
 
 
    
  login(){
  //   console.log(this.miFormulario.value);
     //console.log(this.miFormulario.valid);
    const { email, password} = this.miFormulario.value;
    this.authService.login(email, password)
     this.authService.login( email, password)
     .subscribe( (ok) =>{
      // console.log(ok)
       if (ok === true){
         this.router.navigateByUrl('/dashboard');
         console.log(ok)
       }else{
         //Todo Mostrar mensaje de error
         Swal.fire('Error', ok,'error')
       }
     }); 
     
  }

  ngOnInit(): void {
  }

}
