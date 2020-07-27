import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelOpenState: any;

  users: any
  posts: []
  userid: any
  isEditEnabled: any;
  userName: string;
  constructor(public service: UserServiceService, public router: Router) { }

  addpost() {
    console.log('Post added');
  }
  deletePost(id) {
    const res = confirm("Do you want to delete this post?");
    if (res == true) {
      this.service.deletePost(id).subscribe((res) => {
        this.postlist();


      });
    }
  }

  postlist() {
    this.service.getAllUsers().subscribe(response => {

      this.users = response;
      console.log(this.users);
      this.panelOpenState = new Array(this.users.length).fill(false);
      this.isEditEnabled = new Array(this.users.length).fill(false);
    });
  }

  ngOnInit(): void {
    this.postlist();
    this.userid = sessionStorage.getItem('userId');
    this.userName = sessionStorage.getItem('userName')
    console.log(this.userid);
  }

  verifyEdit(i) {
    this.isEditEnabled[i] = !this.isEditEnabled[i];
  }

}
