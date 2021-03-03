import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompCommunicationService } from '../service/componentCommunication/comp-communication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private compCommunication: CompCommunicationService,
    private tostr: ToastrService) { }
  loggedIn = "";
  ngOnInit(): void {
    /* avoid using reroute  as data is changed so page should be updted */
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.loggedIn = sessionStorage.getItem('jwtToken');
    if (this.loggedIn == undefined || this.loggedIn == null)
      this.compCommunication.loggedInuser.subscribe(data => {
        this.loggedIn = data;

      })
    else {
      this.loggedIn = sessionStorage.getItem('user');
    }
  }
  logout() {
    sessionStorage.removeItem('jwtToken');
    this.compCommunication.setUserNameForSuccesfullLogin('');
    this.compCommunication.loggedInuser.subscribe(data => {
      this.loggedIn = data;
    })
    this.tostr.success("Logged out successfully !");
    this.router.navigate(['/home']);

  }

}
