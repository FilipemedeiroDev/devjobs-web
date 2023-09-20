import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showSignIn: boolean = false;
  showLogout: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
       const currentUrl = this.router.url;
       this.showSignIn = currentUrl !== '/dashboard' && currentUrl !== '/login' && currentUrl !== '/register';
       this.showLogout = currentUrl === '/dashboard';
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/"])
  }

}
