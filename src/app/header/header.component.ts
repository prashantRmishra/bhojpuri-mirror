import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router :Router) { }
  loggedIn:any;
  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem('jwtToken');
  }
  logout(){
    sessionStorage.removeItem('jwtToken');
    this.router.navigate(['/home']);

  }

}
