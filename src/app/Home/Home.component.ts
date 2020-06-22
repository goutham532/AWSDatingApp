import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode=false;
  values:any;
  constructor(private http: HttpClient, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.loggedin){
      this.router.navigate(['members']);
    }
  }

  registerToggle(){
    this.registerMode=true;
  }

  registerToggleFalse(){
    this.registerMode=false;
  }
  loggedin(){
    return this.authservice.loggedin();
  }

  

  cancelRegisterMode(Mode: boolean){
    this.registerMode=false;
  }

}
