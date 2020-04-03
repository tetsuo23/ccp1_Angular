import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ms: ConnexionService, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({

      'Pseudo': ['', Validators.required],
      'Password': ['', Validators.required],
    });
  }
  connexion(Pseudo: any, Password: any) {
    this.ms.connexion(Pseudo, Password);
    console.log(this.angForm.controls['Pseudo']);

    this.router.navigate(['/']);

  };



  ngOnInit(): void {
  }
}
