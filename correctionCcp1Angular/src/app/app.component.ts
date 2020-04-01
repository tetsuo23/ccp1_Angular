import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'correctionCcp1Angular';

  @HostListener('window:scroll', ['$event'])
  // --------------------------------------------background-color de la nav---------------------------
  onWindowScroll(e) {
    let element = document.querySelector('.nav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('nav_scroll');
    } else {
      element.classList.remove('nav_scroll');
    }
  }



  // -----------------------------------formulaire d'inscription-------------------------------

}
export class MemberAddComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      MemberName: ['', Validators.required],
      MemberBio: ['', Validators.required],
      MemberAge: ['', Validators.required],
      MemberMail: ['', Validators.required,
        Validators.pattern('^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    });

  }

  ngOnInit(): void {
  }
}

export class ContactAddComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      Mail: ['', Validators.required],
      Contact: ['', Validators.required,
        Validators.pattern('^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    });

  }

  ngOnInit(): void {
  }
}
