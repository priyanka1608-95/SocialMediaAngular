import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any
  errmsg:string
  status:string
  constructor(public service:UserServiceService,
              public router:Router) { }

  login(FormData)
  {
    this.user=FormData.form.value;
    console.log(this.user)
    this.service.login(this.user).subscribe(response=>{
      console.log(response);
      if(response == null)
      {
        this.status='fail'
        this.errmsg="invalid login"
              
      }
      else
      {
        sessionStorage['userId']=response['id'];
        sessionStorage['userName']=response['name'];



        this.router.navigate(['home'])
      }

    })

  }

  ngOnInit(): void {
  }

}
