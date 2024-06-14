import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  
})
export class ClientComponent {
  client = {
    name: '',
    email: '',
    address: ''
  };
    clientForm: FormGroup;
  
    constructor(private fb: FormBuilder, private router: Router) {
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
  }


