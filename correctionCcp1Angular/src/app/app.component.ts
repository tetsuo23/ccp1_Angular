import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'correctionCcp1Angular';

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.nav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('nav_scroll');
    } else {
      element.classList.remove('nav_scroll');
    }
  }
}
