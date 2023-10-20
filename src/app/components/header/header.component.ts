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

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {  
      const currentUrl = this.router.url;
      this.showSignIn = currentUrl !== '/dashboard'
      && currentUrl !== '/login'
      && currentUrl !== '/register'
      && currentUrl !== '/dashboard/jobs-applied'
      && currentUrl !== '/dashboard/edit-profile';
      this.showLogout = currentUrl === '/dashboard'
      || currentUrl === '/dashboard/jobs-applied'
      || currentUrl === '/dashboard/edit-profile'; 
   })
  }

  ngOnInit() {
    
  };

  logout() {
    localStorage.clear();
    this.router.navigate(["/"])
  }

}
