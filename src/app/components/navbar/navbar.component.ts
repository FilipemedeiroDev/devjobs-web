import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showNavBarMobile: boolean = false;


  showNavMobile() {
    this.showNavBarMobile = !this.showNavBarMobile;
  }
}
