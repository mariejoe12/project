import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { tap, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  
})
export class ClientComponent implements OnInit {
  client = {
    name: '',
    email: '',
    address: ''
  };
    clientForm: FormGroup;
  private apiservice!: ApiService;
  
    constructor(private fb: FormBuilder, private router: Router , private apiService: ApiService  ) {
      console.log('ApiService injected:', this.apiService); // Debug log
      this.clientForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }
  
    onSubmit() {
      if (this.clientForm.valid) {
        const clientName = this.clientForm.get('name')?.value;
        this.router.navigate(['/books'], { state: { name: clientName } });
      }
    }
    randomDogImageUrl!: string;

    
  
    ngOnInit(): void {
      //this.fetchRandomDog();
      this.apiService.getRandomDog().subscribe((result)=>{console.log(result);
        if(result){this.randomDogImageUrl=result.message;}
      }) ;
      this.apiService.test();
    }
  
   // fetchRandomDog(): void {
   //   console.log('Fetching random dog...');
     // console.log(this.apiService) ;
     // this.apiservice.getRandomDog().subscribe();
   // }
}